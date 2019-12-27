// var password = "";
// for (i = 0; i < 4; i++) {
//   for (n = 0; n < 100; n++) {
//
//   }
//   var num = Math.floor(Math.random() * 10).toString();
//   password = password + num;
// }
// console.log(password);


// Loop to add 4 numbers for toString

// Loop from 1 to 10

// iStart = "0000";
// iEnd = "0100";
//
// for (i = iStart; i < iEnd; i++) {
//   if (i.length < 4) {
//     i = "0" + i;
//   }
//   console.log(i.toString());
// }

var output = [], n, padded;
for (n=0; n<=9999; n++) {
    padded = ('000'+n).slice(-4); // Prefix three zeros, and get the last 4 chars
    output.push(padded);
}

for (i=0; i<10000; i++) {
  console.log("STRING " + output[i]);
  console.log("ENTER");
  console.log("DELAY 300000");
}
// console.log("STRING " + console[i]);
// console.log("RETURN");
// console.log("DELAY 5000")
