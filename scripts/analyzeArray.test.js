import { analyzeArray } from "./analyzeArray";

test("[1,8,3,4,2,6] to be equal to {average: 4,min: 1,max: 8,length: 6,}", () => {
  const input = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(input)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
