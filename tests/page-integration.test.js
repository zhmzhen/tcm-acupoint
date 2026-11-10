import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { JSDOM } from 'jsdom';
import {
  acupointData,
  dailyAcupointList,
  symptomSynonyms,
} from '../js/acupoint-data.js';

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const pagesDirectory = path.join(projectRoot, 'pages');

function extractModuleScript(html) {
  const match = html.match(
    /<script\b[^>]*type=["']module["'][^>]*>([\s\S]*?)<\/script>/i,
  );
  return match?.[1] ?? '';
}

describe('页面模块集成', () => {
  it('所有页面应使用可解析且存在的相对模块路径', async () => {
    const pageNames = (await readdir(pagesDirectory))
      .filter(name => name.endsWith('.html'));
    let importCount = 0;

    for (const pageName of pageNames) {
      const html = await readFile(path.join(pagesDirectory, pageName), 'utf8');
      const baseHref = html.match(/<base\s+href=["']([^"']+)["']/i)?.[1];
      const moduleScript = extractModuleScript(html);
      const imports = [...moduleScript.matchAll(/from\s+["']([^"']+)["']/g)]
        .map(match => match[1]);

      expect(baseHref, `${pageName} 缺少 base href`).toBeTruthy();
      expect(imports.length, `${pageName} 缺少模块导入`).toBeGreaterThan(0);

      const pageUrl = new URL(
        `https://example.test/tcm-acupoint/pages/${pageName}`,
      );
      const documentBase = new URL(baseHref, pageUrl);

      for (const specifier of imports) {
        importCount += 1;
        expect(
          specifier,
          `${pageName} 使用了浏览器无法解析的裸模块路径`,
        ).toMatch(/^(?:\.{1,2}\/|\/|https?:\/\/)/);

        const resolvedUrl = new URL(specifier, documentBase);
        expect(resolvedUrl.pathname).toMatch(/^\/tcm-acupoint\/js\//);
        expect(
          resolvedUrl.searchParams.has('v'),
          `${pageName} 的模块路径缺少缓存版本号`,
        ).toBe(true);

        const relativePath = resolvedUrl.pathname.replace(
          /^\/tcm-acupoint\//,
          '',
        );
        await expect(access(path.join(projectRoot, relativePath))).resolves
          .toBeUndefined();
      }
    }

    expect(importCount).toBe(15);
  });

  it('穴位查询页不应依赖模块作用域不可见的内联事件', async () => {
    const html = await readFile(
      path.join(pagesDirectory, 'acupoint.html'),
      'utf8',
    );

    expect(html).not.toMatch(/\sonclick\s*=/i);
  });

  it('点击“头痛”应渲染对应穴位并支持关闭结果', async () => {
    const html = await readFile(
      path.join(pagesDirectory, 'acupoint.html'),
      'utf8',
    );
    const moduleScript = extractModuleScript(html)
      .replace(/^\s*import\b.*;\s*$/gm, '');
    const documentHtml = html.replace(
      /<script\b[^>]*type=["']module["'][^>]*>[\s\S]*?<\/script>/i,
      '',
    );
    const dom = new JSDOM(documentHtml, {
      url: 'https://example.test/tcm-acupoint/pages/acupoint.html',
      runScripts: 'outside-only',
    });

    dom.window.HTMLElement.prototype.scrollIntoView = () => {};
    dom.window.__acupointData = acupointData;
    dom.window.__dailyAcupointList = dailyAcupointList;
    dom.window.__symptomSynonyms = symptomSynonyms;
    dom.window.eval(`
      const acupointData = window.__acupointData;
      const dailyAcupointList = window.__dailyAcupointList;
      const symptomSynonyms = window.__symptomSynonyms;
      ${moduleScript}
    `);

    const headacheTag = [...dom.window.document.querySelectorAll('.symptom-tag')]
      .find(tag => tag.textContent.trim() === '头痛');
    headacheTag.dispatchEvent(new dom.window.MouseEvent('click', {
      bubbles: true,
    }));

    const results = dom.window.document.getElementById('results');
    expect(dom.window.document.getElementById('search-input').value)
      .toBe('头痛');
    expect(results.classList.contains('show')).toBe(true);
    expect(results.textContent).toContain('头痛 - 推荐穴位');
    expect(results.textContent).toContain('太阳穴');

    results.querySelector('#close-results-btn').click();
    expect(results.classList.contains('show')).toBe(false);

    dom.window.close();
  });
});
