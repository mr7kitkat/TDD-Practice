import { capitalize } from "./capitalize";

test("Input of 'argument' should Match 'Argument'", () => {
  expect(capitalize("argument")).toMatch("Argument");
});

test("Input of 'sanYas' should Match 'SanYas'", () => {
  expect(capitalize("sanYas")).toMatch("SanYas");
});

test("Input of 'java script14' should match 'Java script14'", () => {
  expect(capitalize("java script14")).toMatch("Java script14");
});
