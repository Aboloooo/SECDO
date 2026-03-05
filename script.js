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
  " ": " ",
};
function start() {
  /*   alert("start");
   */
}
$("#encryptBtn").on("click", function () {
  $("#output").html("");
  let input = $("#text").val();
  //save all the input letters into an array
  let array_input = input.split("");
  //number of characters in input
  let numChars = array_input.length;
  if (numChars > 0) {
    $("#output").append(
      "Your Encrypted Text has " + numChars + " characters long<br>",
    );
    array_input.forEach((element) => {
      if (cipherMap.hasOwnProperty(element)) {
        console.log(
          "Key " + element + " found. Encrypted form " + cipherMap[element],
        );
      } else {
        console.log("failed to find the key");
      }
      $("#output").append(cipherMap[element]);
    });
  } else {
    $("#output").append("No input provided for encryption.");
  }
});
$("#dencryptBtn").on("click", function () {
  $("#output").html("");
  $(".frequency-table").html("");
  let input = $("#text").val();
  //save all the input letters into an array
  let array_input = input.split("");
  let num_characters = array_input.length;
  if (num_characters > 0) {
    $("#output").append("Characters long: " + num_characters + "<br>");

    $("#output").append("Your Decrypted Text: <br>");
    let table = $("<table>").addClass("frequency-table");
    let tableHeading = $("<thead>").append(
      "<tr><th>Original Character</th><th>Decrypted Character</th><th>Frequency</th></tr>",
    );
    let tableBody = $("<tbody>");
    array_input.forEach((element) => {
      let decryptedChar = "";
      for (let key in cipherMap) {
        if (cipherMap[key] == element) {
          decryptedChar = key;
          break;
        }
      }
      let frequencyOfElement =
        (array_input.filter((x) => x === element).length / num_characters) *
        100;
      tableBody.append(
        $("<tr>").append(
          $("<td>").text(element),
          $("<td>").text(decryptedChar),
          $("<td>").text(frequencyOfElement.toFixed(0) + "%"),
        ),
      );
    });
    table.append(tableHeading);
    table.append(tableBody);
    $("body").append(table);
  } else {
    $("#output").append("No input provided for decryption.");
  }

  let decryptedText = "";

  array_input.forEach((element) => {
    let found = false;

    for (let key in cipherMap) {
      if (cipherMap[key] == element) {
        console.log(`✓ Value "${element}" found! Corresponds to key: "${key}"`);
        decryptedText += key;
        found = true;
        break;
      }
    }

    // If not found in cipherMap values
    if (!found) {
      console.log(`✗ No decryption found for "${element}"`);
      decryptedText += element;
    }
  });

  // Append the final result once
  $("#output").append(decryptedText);
});
