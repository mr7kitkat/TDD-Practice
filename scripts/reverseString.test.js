import { reverseString } from "./reverseString";

test("input of 'input' should return 'tupni'", () => {
  expect(reverseString("input")).toMatch("tupni");
});

test("input of 'argument' should return 'tnemugra'", () => {
  expect(reverseString("argument")).toMatch("tnemugra");
});

test("input of 'run aman run' should return 'nur nama nur'", () => {
  expect(reverseString("run aman run")).toMatch("nur nama nur");
});
