import { describe, it, expect } from 'vitest';
import { teaData } from '../js/tea-data.js';

describe('tea-data.js - 茶道数据', () => {
  it('应包含多种茶叶', () => {
    expect(teaData.length).toBeGreaterThanOrEqual(5);
  });

  it('每种茶应有必需的字段', () => {
    teaData.forEach(tea => {
      expect(tea).toHaveProperty('name');
      expect(tea).toHaveProperty('type');
      expect(tea).toHaveProperty('origin');
      expect(tea).toHaveProperty('appearance');
      expect(tea).toHaveProperty('aroma');
      expect(tea).toHaveProperty('taste');
      expect(tea).toHaveProperty('brewing');
      expect(tea).toHaveProperty('benefits');
      expect(tea).toHaveProperty('taboo');
      expect(tea).toHaveProperty('storage');
      expect(tea).toHaveProperty('price');
      expect(Array.isArray(tea.benefits)).toBe(true);
      expect(Array.isArray(tea.taboo)).toBe(true);
    });
  });

  it('冲泡信息应包含温度、比例、时间', () => {
    teaData.forEach(tea => {
      expect(tea.brewing).toHaveProperty('temperature');
      expect(tea.brewing).toHaveProperty('ratio');
      expect(tea.brewing).toHaveProperty('time');
    });
  });

  it('茶叶名称不应重复', () => {
    const names = teaData.map(t => t.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
