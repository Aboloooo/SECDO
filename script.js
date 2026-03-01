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
 */}
 $("#encryptBtn").on('click', function() {
  $("#output").html('');
    let input = $("#text").val();
    //save all the input letters into an array
    let array_input = input.split('');    
    $("#output").append("Your Encrypted Text: ")

    array_input.forEach(element => {
      if(cipherMap.hasOwnProperty(element)){
        console.log("Key " + element + " found. Encrypted form " + cipherMap[element])
      }else{
        console.log("failed to find the key")
      }
      $("#output").append(cipherMap[element])
    });
    }
);
$("#dencryptBtn").on('click', function() {
    $("#output").html('')
    let input = $("#text").val();
    //save all the input letters into an array
    let array_input = input.split('');    
    $("#output").append("Your Decrypted Text: ")

    array_input.forEach(element => {
      for(let key in cipherMap){
        if(cipherMap[key] == element ){
          console.log("key found for "+ element + " corresponds to: " + cipherMap[key]);
        }else{
          console.log("failed to find the value")
        }
        $("#output").append(cipherMap[key])
    }
    });
    
    /* array_input.forEach(element => {
      if(cipherMap[]  == element ){
        console.log("Key " + element + " found. Encrypted form " + cipherMap[element])
      }else{
        console.log("failed to find the key")
      }
      $("#output").append(cipherMap[element])
    });
    */
    } 
);

