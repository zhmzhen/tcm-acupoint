import { describe, it, expect } from 'vitest';
import { flowerData } from '../js/flower-data.js';

describe('flower-data.js - 花语数据', () => {
  it('应包含多种花卉', () => {
    expect(flowerData.length).toBeGreaterThanOrEqual(10);
  });

  it('每种花应有必需的字段', () => {
    flowerData.forEach(flower => {
      expect(flower).toHaveProperty('name');
      expect(flower).toHaveProperty('nameEn');
      expect(flower).toHaveProperty('icon');
      expect(flower).toHaveProperty('language');
      expect(flower).toHaveProperty('meaning');
      expect(flower).toHaveProperty('suitableHolidays');
      expect(flower).toHaveProperty('care');
      expect(flower).toHaveProperty('season');
      expect(flower).toHaveProperty('price');
      expect(flower).toHaveProperty('color');
      expect(flower).toHaveProperty('origin');
      expect(Array.isArray(flower.suitableHolidays)).toBe(true);
      expect(Array.isArray(flower.color)).toBe(true);
    });
  });

  it('养护信息应包含光照、浇水、温度', () => {
    flowerData.forEach(flower => {
      expect(flower.care).toHaveProperty('light');
      expect(flower.care).toHaveProperty('water');
      expect(flower.care).toHaveProperty('temperature');
    });
  });

  it('每个节日推荐应有必需的字段', () => {
    flowerData.forEach(flower => {
      flower.suitableHolidays.forEach(holiday => {
        expect(holiday).toHaveProperty('holiday');
        expect(holiday).toHaveProperty('recommendation');
        expect(holiday).toHaveProperty('meaning');
        expect(holiday).toHaveProperty('color');
      });
    });
  });

  it('花卉名称不应重复', () => {
    const names = flowerData.map(f => f.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('英文名不应重复', () => {
    const namesEn = flowerData.map(f => f.nameEn);
    expect(new Set(namesEn).size).toBe(namesEn.length);
  });
});
