import { describe, it, expect } from 'vitest';
import { getDayOfYear, getTodayString, getDailyItem, calculateDistance } from '../js/common.js';

describe('common.js - 工具函数', () => {
  describe('getDayOfYear()', () => {
    it('应返回 1-366 之间的整数', () => {
      const day = getDayOfYear();
      expect(day).toBeGreaterThanOrEqual(1);
      expect(day).toBeLessThanOrEqual(366);
      expect(Number.isInteger(day)).toBe(true);
    });

    it('同一天应返回相同值', () => {
      const d1 = getDayOfYear();
      const d2 = getDayOfYear();
      expect(d1).toBe(d2);
    });
  });

  describe('getTodayString()', () => {
    it('应返回 "X月X日" 格式', () => {
      const str = getTodayString();
      expect(str).toMatch(/^\d{1,2}月\d{1,2}日$/);
    });
  });

  describe('getDailyItem()', () => {
    it('应根据日期轮换返回数组元素', () => {
      const arr = ['a', 'b', 'c'];
      const item = getDailyItem(arr);
      expect(arr).toContain(item);
    });

    it('空数组应返回 undefined', () => {
      expect(getDailyItem([])).toBeUndefined();
    });

    it('单元素数组应始终返回该元素', () => {
      expect(getDailyItem(['only'])).toBe('only');
    });
  });

  describe('calculateDistance()', () => {
    it('相同坐标距离为 0', () => {
      expect(calculateDistance(30, 120, 30, 120)).toBe(0);
    });

    it('应正确计算两点间欧几里得距离', () => {
      const d = calculateDistance(0, 0, 3, 4);
      expect(d).toBe(5);
    });

    it('距离应为非负数', () => {
      const d = calculateDistance(36, 120, 30, 110);
      expect(d).toBeGreaterThanOrEqual(0);
    });
  });
});
