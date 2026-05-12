import { describe, it, expect } from 'vitest';
import { dietData, getCurrentSolarTerm } from '../js/diet-data.js';

describe('diet-data.js - 节气饮食数据', () => {
  describe('dietData', () => {
    it('应包含 24 个节气', () => {
      expect(dietData.length).toBe(24);
    });

    it('每个节气应有必需的字段', () => {
      dietData.forEach(term => {
        expect(term).toHaveProperty('name');
        expect(term).toHaveProperty('date');
        expect(term).toHaveProperty('principle');
        expect(term).toHaveProperty('foods');
        expect(term).toHaveProperty('avoid');
        expect(term).toHaveProperty('soup');
        expect(term).toHaveProperty('desc');
        expect(Array.isArray(term.foods)).toBe(true);
        expect(Array.isArray(term.avoid)).toBe(true);
        expect(term.foods.length).toBeGreaterThan(0);
      });
    });

    it('节气名称不应重复', () => {
      const names = dietData.map(t => t.name);
      expect(new Set(names).size).toBe(names.length);
    });

    it('应包含完整的二十四节气', () => {
      const expected = ['立春', '雨水', '惊蛰', '春分', '清明', '谷雨',
        '立夏', '小满', '芒种', '夏至', '小暑', '大暑',
        '立秋', '处暑', '白露', '秋分', '寒露', '霜降',
        '立冬', '小雪', '大雪', '冬至', '小寒', '大寒'];
      const names = dietData.map(t => t.name);
      expected.forEach(name => {
        expect(names).toContain(name);
      });
    });
  });

  describe('getCurrentSolarTerm()', () => {
    it('应返回有效的节气对象', () => {
      const term = getCurrentSolarTerm();
      expect(term).toBeDefined();
      expect(term).toHaveProperty('name');
      expect(dietData).toContainEqual(term);
    });
  });
});
