$(start);
const cipherMap = {
  A: "q",
  B: "W",
  C: "3",
  D: "m",
  E: "Z",
  F: "!",
  G: "x",
  H: "A",
  I: "9",
  J: "b",
  K: "T",
  L: "@",
  M: "k",
  N: "L",
  O: "2",
  P: "p",
  Q: "R",
  R: "d",
  S: "Y",
  T: "%",
  U: "u",
  V: "G",
  W: "7",
  X: "n",
  Y: "C",
  Z: "0",

  a: "a",
  b: "J",
  c: "4",
  d: "s",
  e: "F",
  f: "h",
  g: "V",
  h: "1",
  i: "e",
  j: "X",
  k: "o",
  l: "I",
  m: "6",
  n: "t",
  o: "K",
  p: "8",
  q: "r",
  r: "w",
  s: "D",
  t: "5",
  u: "c",
  v: "Q",
  w: "z",
  x: "P",
  y: "U",
  z: "y",

  0: "&",
  1: "B",
  2: "M",
  3: "#",
  4: "l",
  5: "S",
  6: "^",
  7: "H",
  8: "j",
  9: "N",
};
function start() {
  alert("start");
}
function processText() {
  let plainTxt = $("#text").val().trim();
  let encryptedTxt = $("#encrypted").val().trim();
  let txt = plainTxt == "" ? encryptedTxt : plainTxt;

  $("#output").text("Output: " + txt);
}
