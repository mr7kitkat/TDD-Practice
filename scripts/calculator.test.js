import { calculator } from "./calculator";

const { add, subtract, multiply, divide } = calculator;

test("Sum of 10 + 15 should be 25", () => {
  expect(add(10, 15)).toBe(25);
});

test("Sum of 1.100 + 2.2 should be 3.300", () => {
  expect(add(1.1, 2.2)).toBeCloseTo(3.3);
});

test("Substraction of 10 - 15 should be -5", () => {
  expect(subtract(10, 15)).toBe(-5);
});

test("Substraction of 50 - 15 should be 35", () => {
  expect(subtract(50, 15)).toBe(35);
});

test("Substraction of 1.25 - 0.333 should be 0.917", () => {
  expect(subtract(1.25, 0.333)).toBe(0.917);
});

test("Product of of 1.25 * 0.333 should be 0.41625", () => {
  expect(multiply(1.25, 0.333)).toBe(0.41625);
});

test("Product of of 525 * 0.15 should be 78.75", () => {
  expect(multiply(525, 0.15)).toBe(78.75);
});

test("Product of of 25 * 60 should be 1500", () => {
  expect(multiply(25, 60)).toBe(1500);
});

test("Product of of 250 * 100 should be 25000", () => {
  expect(multiply(250, 100)).toBe(25000);
});

test("Division of of 1 / 2 should be 0.5", () => {
  expect(divide(1, 2)).toBe(0.5);
});

test("Product of of 25/5 should be 5", () => {
  expect(divide(25, 5)).toBe(5);
});

test("Product of of 100/3 should be 33.33....", () => {
  expect(divide(100, 3)).toBeCloseTo(33.33);
});
