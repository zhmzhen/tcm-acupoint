import { describe, it, expect } from 'vitest';
import { tideData } from '../js/tide-data.js';

describe('tide-data.js - 潮汐水产数据', () => {
  it('应包含多个沿海城市', () => {
    expect(tideData.length).toBeGreaterThanOrEqual(4);
  });

  it('每个城市应有必需的字段', () => {
    tideData.forEach(city => {
      expect(city).toHaveProperty('location');
      expect(city).toHaveProperty('coords');
      expect(city).toHaveProperty('lat');
      expect(city).toHaveProperty('lng');
      expect(city).toHaveProperty('region');
      expect(city).toHaveProperty('tideType');
      expect(city).toHaveProperty('highTide1');
      expect(city).toHaveProperty('lowTide1');
      expect(city).toHaveProperty('seafood');
      expect(city).toHaveProperty('tips');
      expect(Array.isArray(city.seafood)).toBe(true);
      expect(city.seafood.length).toBeGreaterThan(0);
      expect(Array.isArray(city.tips)).toBe(true);
    });
  });

  it('坐标应在合理范围内', () => {
    tideData.forEach(city => {
      expect(city.lat).toBeGreaterThan(15);
      expect(city.lat).toBeLessThan(45);
      expect(city.lng).toBeGreaterThan(105);
      expect(city.lng).toBeLessThan(125);
    });
  });

  it('每个水产应有必需的字段', () => {
    tideData.forEach(city => {
      city.seafood.forEach(s => {
        expect(s).toHaveProperty('name');
        expect(s).toHaveProperty('alias');
        expect(s).toHaveProperty('icon');
        expect(s).toHaveProperty('habitat');
        expect(s).toHaveProperty('season');
        expect(s).toHaveProperty('price');
        expect(s).toHaveProperty('nutrition');
        expect(s).toHaveProperty('cooking');
        expect(s).toHaveProperty('desc');
        expect(Array.isArray(s.cooking)).toBe(true);
      });
    });
  });

  it('城市名称不应重复', () => {
    const names = tideData.map(c => c.location);
    expect(new Set(names).size).toBe(names.length);
  });
});
