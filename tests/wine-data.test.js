import { describe, it, expect } from 'vitest';
import { wineData } from '../js/wine-data.js';

describe('wine-data.js - 酒道数据', () => {
  it('应包含多种酒品', () => {
    expect(wineData.length).toBeGreaterThanOrEqual(5);
  });

  it('每种酒应有必需的字段', () => {
    wineData.forEach(wine => {
      expect(wine).toHaveProperty('name');
      expect(wine).toHaveProperty('type');
      expect(wine).toHaveProperty('origin');
      expect(wine).toHaveProperty('alcohol');
      expect(wine).toHaveProperty('appearance');
      expect(wine).toHaveProperty('aroma');
      expect(wine).toHaveProperty('taste');
      expect(wine).toHaveProperty('price');
      expect(wine).toHaveProperty('rating');
      expect(wine).toHaveProperty('drinking');
      expect(wine).toHaveProperty('pairing');
      expect(wine).toHaveProperty('tips');
      expect(wine).toHaveProperty('healthNote');
      expect(Array.isArray(wine.pairing)).toBe(true);
      expect(Array.isArray(wine.tips)).toBe(true);
    });
  });

  it('饮用方式应包含温度、酒具、方式', () => {
    wineData.forEach(wine => {
      expect(wine.drinking).toHaveProperty('temperature');
      expect(wine.drinking).toHaveProperty('vessel');
      expect(wine.drinking).toHaveProperty('method');
    });
  });

  it('酒品名称不应重复', () => {
    const names = wineData.map(w => w.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
