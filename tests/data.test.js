import { describe, it, expect } from 'vitest';
import { acupointData } from '../data.js';

describe('data.js - 穴位数据库', () => {
  it('应包含常见症状', () => {
    const symptoms = Object.keys(acupointData);
    expect(symptoms).toContain('头痛');
    expect(symptoms).toContain('失眠');
    expect(symptoms).toContain('颈椎痛');
    expect(symptoms).toContain('胃痛');
    expect(symptoms).toContain('感冒');
  });

  it('每个症状应有 acupoints 和 diet', () => {
    Object.entries(acupointData).forEach(([symptom, data]) => {
      expect(data).toHaveProperty('acupoints');
      expect(data).toHaveProperty('diet');
      expect(Array.isArray(data.acupoints)).toBe(true);
      expect(data.acupoints.length).toBeGreaterThan(0);
    });
  });

  it('每个穴位应有完整的按摩指导', () => {
    Object.values(acupointData).forEach(data => {
      data.acupoints.forEach(point => {
        expect(point).toHaveProperty('name');
        expect(point).toHaveProperty('pinyin');
        expect(point).toHaveProperty('location');
        expect(point).toHaveProperty('meridian');
        expect(point).toHaveProperty('massage');
        expect(point.massage).toHaveProperty('method');
        expect(point.massage).toHaveProperty('duration');
        expect(point.massage).toHaveProperty('frequency');
        expect(point.massage).toHaveProperty('strength');
        expect(point).toHaveProperty('effects');
        expect(Array.isArray(point.effects)).toBe(true);
      });
    });
  });

  it('每个症状的饮食建议应有 recommended 和 avoid', () => {
    Object.values(acupointData).forEach(data => {
      expect(data.diet).toHaveProperty('recommended');
      expect(data.diet).toHaveProperty('avoid');
      expect(data.diet).toHaveProperty('tips');
      expect(Array.isArray(data.diet.recommended)).toBe(true);
      expect(Array.isArray(data.diet.avoid)).toBe(true);
    });
  });

  it('症状名称不应重复', () => {
    const symptoms = Object.keys(acupointData);
    expect(new Set(symptoms).size).toBe(symptoms.length);
  });
});
