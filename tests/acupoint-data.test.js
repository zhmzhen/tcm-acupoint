import { describe, it, expect } from 'vitest';
import { acupointData, dailyAcupointList, symptomSynonyms } from '../js/acupoint-data.js';

describe('acupoint-data.js - 穴位数据', () => {
  describe('dailyAcupointList', () => {
    it('应包含至少 20 个穴位', () => {
      expect(dailyAcupointList.length).toBeGreaterThanOrEqual(20);
    });

    it('每个穴位应有必需的字段', () => {
      dailyAcupointList.forEach(point => {
        expect(point).toHaveProperty('name');
        expect(point).toHaveProperty('pinyin');
        expect(point).toHaveProperty('meridian');
        expect(point).toHaveProperty('location');
        expect(point).toHaveProperty('effects');
        expect(point).toHaveProperty('bodyPart');
        expect(Array.isArray(point.effects)).toBe(true);
        expect(point.effects.length).toBeGreaterThan(0);
      });
    });

    it('穴位名称不应重复', () => {
      const names = dailyAcupointList.map(p => p.name);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(names.length);
    });

    it('所有穴位应有非空字符串字段', () => {
      dailyAcupointList.forEach(point => {
        expect(typeof point.name).toBe('string');
        expect(point.name.length).toBeGreaterThan(0);
        expect(typeof point.location).toBe('string');
        expect(point.location.length).toBeGreaterThan(0);
        expect(typeof point.meridian).toBe('string');
        expect(point.meridian.length).toBeGreaterThan(0);
      });
    });
  });

  describe('acupointData - 症状映射', () => {
    it('应包含常见症状', () => {
      const symptoms = Object.keys(acupointData);
      expect(symptoms).toContain('头痛');
      expect(symptoms).toContain('失眠');
      expect(symptoms).toContain('感冒');
      expect(symptoms).toContain('胃痛');
    });

    it('每个症状应有 points、diet、massage 字段', () => {
      Object.entries(acupointData).forEach(([symptom, data]) => {
        expect(data).toHaveProperty('points');
        expect(data).toHaveProperty('diet');
        expect(data).toHaveProperty('massage');
        expect(Array.isArray(data.points)).toBe(true);
        expect(data.points.length).toBeGreaterThan(0);
        expect(Array.isArray(data.diet)).toBe(true);
        expect(typeof data.massage).toBe('string');
      });
    });

    it('症状名称不应重复', () => {
      const symptoms = Object.keys(acupointData);
      const uniqueSymptoms = new Set(symptoms);
      expect(uniqueSymptoms.size).toBe(symptoms.length);
    });
  });

  describe('symptomSynonyms - 同义词映射', () => {
    it('应包含常见口语化表达', () => {
      expect(symptomSynonyms).toHaveProperty('脑袋疼');
      expect(symptomSynonyms).toHaveProperty('睡不着');
      expect(symptomSynonyms).toHaveProperty('大姨妈');
    });

    it('同义词应映射到有效症状', () => {
      const validSymptoms = Object.keys(acupointData);
      Object.values(symptomSynonyms).forEach(targets => {
        targets.forEach(target => {
          expect(validSymptoms).toContain(target);
        });
      });
    });

    it('同义词值应为数组', () => {
      Object.values(symptomSynonyms).forEach(value => {
        expect(Array.isArray(value)).toBe(true);
      });
    });
  });
});
