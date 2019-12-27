var count = 0;

function generatePasscode() {
  var password = "";
  for (i = 0; i < 4; i++) {
    var num = Math.floor(Math.random() * 10).toString();
    password = password + num;
  }
  console.log(password);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedPasscode() {
  while (count < 100) {
    generatePasscode();
    await sleep(2000);
    count++;
  }

}

delayedPasscode();

// function generatePasscode() {
//   var password = "";
//   for (i = 0; i < 4; i++) {
//     var num = Math.floor(Math.random() * 10).toString();
//     password = password + num;
//   }
//   console.log(password);
// }
