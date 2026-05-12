import { describe, it, expect } from 'vitest';
import { acupointData, symptomSynonyms } from '../js/acupoint-data.js';

/**
 * 模拟 selectSymptom 的搜索逻辑（从 acupoint.html 提取）
 */
function searchSymptom(query, data, synonyms) {
  if (!query) return null;

  // 精确匹配
  if (data[query]) {
    return { matched: query, data: data[query], type: 'exact' };
  }

  // 同义词匹配
  const syns = synonyms[query];
  if (syns) {
    for (const syn of syns) {
      if (data[syn]) {
        return { matched: syn, data: data[syn], type: 'synonym', original: query };
      }
    }
  }

  // 模糊匹配
  for (const key of Object.keys(data)) {
    if (key.includes(query) || query.includes(key)) {
      return { matched: key, data: data[key], type: 'fuzzy', original: query };
    }
  }

  return null;
}

describe('穴位搜索逻辑', () => {
  describe('精确匹配', () => {
    it('输入"头痛"应精确匹配', () => {
      const result = searchSymptom('头痛', acupointData, symptomSynonyms);
      expect(result).not.toBeNull();
      expect(result.type).toBe('exact');
      expect(result.matched).toBe('头痛');
    });

    it('输入"失眠"应精确匹配', () => {
      const result = searchSymptom('失眠', acupointData, symptomSynonyms);
      expect(result).not.toBeNull();
      expect(result.type).toBe('exact');
    });
  });

  describe('同义词匹配', () => {
    it('"脑袋疼"应匹配到"头痛"', () => {
      const result = searchSymptom('脑袋疼', acupointData, symptomSynonyms);
      expect(result).not.toBeNull();
      expect(result.type).toBe('synonym');
      expect(result.matched).toBe('头痛');
    });

    it('"睡不着"应匹配到"失眠"', () => {
      const result = searchSymptom('睡不着', acupointData, symptomSynonyms);
      expect(result).not.toBeNull();
      expect(result.matched).toBe('失眠');
    });

    it('"大姨妈"应匹配到"月经不调"', () => {
      const result = searchSymptom('大姨妈', acupointData, symptomSynonyms);
      expect(result).not.toBeNull();
      expect(result.matched).toBe('月经不调');
    });

    it('"脖子疼"应匹配到"颈椎痛"', () => {
      const result = searchSymptom('脖子疼', acupointData, symptomSynonyms);
      expect(result).not.toBeNull();
      expect(result.matched).toBe('颈椎痛');
    });
  });

  describe('模糊匹配', () => {
    it('"头"应模糊匹配到包含"头"的症状', () => {
      const result = searchSymptom('头', acupointData, symptomSynonyms);
      expect(result).not.toBeNull();
      expect(result.type).toBe('fuzzy');
    });
  });

  describe('无匹配', () => {
    it('不存在的症状应返回 null', () => {
      const result = searchSymptom('不存在的症状xyz', acupointData, symptomSynonyms);
      expect(result).toBeNull();
    });

    it('空字符串应返回 null', () => {
      const result = searchSymptom('', acupointData, symptomSynonyms);
      expect(result).toBeNull();
    });
  });
});
