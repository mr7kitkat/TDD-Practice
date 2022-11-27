import { caesarCipher } from "./caesarCipher";

test("ciphering 'attack at dawn' would become 'buubdl bu ebxo'", () => {
  expect(caesarCipher("attack at dawn")).toMatch("buubdl bu ebxo");
});

test("ciphering 'abcdefghijklmnopqrstuvwxyz' would become 'bcdefghijklmnopqrstuvwxyza bu ebxo'", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toMatch(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("ciphering 'aaj 12 baje ice cream milegi sabko' would become 'bbk 12 cbkf gveej njmfhj tbclp'", () => {
  expect(caesarCipher("aaj 12 baje ice cream milegi sabko")).toMatch(
    "bbk 12 cbkf jdf dsfbn njmfhj tbclp"
  );
});

test("ciphering 'Learning Programming' would become 'Mfbsojoh Qsphsbnnjoh'", () => {
  expect(caesarCipher("Learning Programming")).toMatch("Mfbsojoh Qsphsbnnjoh");
});

test("ciphering 'amanzon.com' would become 'bnboapo.dpn'", () => {
  expect(caesarCipher("amanzon.com")).toMatch("bnboapo.dpn");
});
