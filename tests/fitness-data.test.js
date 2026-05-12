import { describe, it, expect } from 'vitest';
import { fitnessData } from '../js/fitness-data.js';

describe('fitness-data.js - 运动健康数据', () => {
  it('应包含多个训练方案', () => {
    expect(fitnessData.length).toBeGreaterThanOrEqual(5);
  });

  it('每个训练方案应有必需的字段', () => {
    fitnessData.forEach(plan => {
      expect(plan).toHaveProperty('name');
      expect(plan).toHaveProperty('targetSymptoms');
      expect(plan).toHaveProperty('duration');
      expect(plan).toHaveProperty('frequency');
      expect(plan).toHaveProperty('muscles');
      expect(plan).toHaveProperty('exercises');
      expect(plan).toHaveProperty('precautions');
      expect(plan).toHaveProperty('benefits');
      expect(Array.isArray(plan.targetSymptoms)).toBe(true);
      expect(Array.isArray(plan.muscles)).toBe(true);
      expect(Array.isArray(plan.exercises)).toBe(true);
      expect(Array.isArray(plan.precautions)).toBe(true);
      expect(Array.isArray(plan.benefits)).toBe(true);
    });
  });

  it('每个肌肉应有 name、location、function', () => {
    fitnessData.forEach(plan => {
      plan.muscles.forEach(muscle => {
        expect(muscle).toHaveProperty('name');
        expect(muscle).toHaveProperty('location');
        expect(muscle).toHaveProperty('function');
      });
    });
  });

  it('每个训练动作应有 name、detail、reps、tips', () => {
    fitnessData.forEach(plan => {
      plan.exercises.forEach(exercise => {
        expect(exercise).toHaveProperty('name');
        expect(exercise).toHaveProperty('detail');
        expect(exercise).toHaveProperty('reps');
        expect(exercise).toHaveProperty('tips');
      });
    });
  });

  it('训练方案名称不应重复', () => {
    const names = fitnessData.map(p => p.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
