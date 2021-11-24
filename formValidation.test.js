const fv = require('./formValidation');
testHasChar();
testIsNumber();
testIsInRange();
testHasATooLongWord();
testHasForbidenWord();
/*
isInRange,
hasChar,
isNumber,
hasForbidenWord,
hasATooLongWord,
validateQ,
validateNum
*/
function testHasForbidenWord() {
  //
  test("hasForbidenWord ", () => {
    expect(fv.hasForbidenWord('')).toBe(false);
  });
  //
  test("hasForbidenWord pita", () => {
    expect(fv.hasForbidenWord('pita')).toBe(false);
  });
  //
  test("hasForbidenWord aaaa sex pppp", () => {
    expect(fv.hasForbidenWord('aaaa sex pppp')).toBe(true);
  });
  //
  test("hasForbidenWord bbbmurderppppp", () => {
    expect(fv.hasForbidenWord('bbbmurderppppp')).toBe(true);
  });
}
//
function testHasATooLongWord() {
  //
  test("hasATooLongWord ", () => {
    expect(fv.hasATooLongWord('')).toBe(false);
  });
  //
  test("hasATooLongWord qwewqe12313221", () => {
    expect(fv.hasATooLongWord('qwewqe12313221')).toBe(true);
  });
  //
  test("hasATooLongWord bbbe aaaa", () => {
    expect(fv.hasATooLongWord('bbbe aaaa')).toBe(false);
  });
  //
  test("hasATooLongWord bbbe aaaa  qwewqe12313221", () => {
    expect(fv.hasATooLongWord('bbbe aaaa  qwewqe12313221')).toBe(true);
  });
  //
  test("hasATooLongWord aa", () => {
    expect(fv.hasATooLongWord('aa')).toBe(false);
  });
}
//
function testIsInRange() {
  //
  test("isInRange 3", () => {
    expect(fv.isInRange(3)).toBe(true);
  });
  test("isInRange ", () => {
    expect(fv.isInRange()).toBe(false);
  });
  //
  test("isInRange -1", () => {
    expect(fv.isInRange(-1)).toBe(false);
  });
  //
  test("isInRange 55", () => {
    expect(fv.isInRange(55)).toBe(false);
  });
}
//
function testHasChar() {
  test("hasChar ", () => {
    expect(fv.hasChar()).toBe(false);
  });
  test("hasChar  ", () => {
    expect(fv.hasChar('')).toBe(false);
  });
  test("hasChar ", () => {
    expect(fv.hasChar(' ')).toBe(false);
  });
  //
  test("hasChar 3", () => {
    expect(fv.hasChar(3)).toBe(true);
  });
  //
  test("hasChar a", () => {
    expect(fv.hasChar('a')).toBe(true);
  });
}
//
function testIsNumber() {
  test("isNumber 3a", () => {
    expect(fv.isNumber('3a')).toBe(false);
  });
  //
  test("isNumber 3", () => {
    expect(fv.isNumber(3)).toBe(true);
  });
  //
  test("isNumber '3'", () => {
    expect(fv.isNumber('3')).toBe(true);
  });
}
//
  