// function showAnimination(identifier){
//   let diceList = [ 'images\\dice2.png', 'images\\dice2.png', 'images\\dice3.png', 'images\\dice4.png', 'images\\dice5.png', 'images\\dice6.png'];
//   let randomNumber = Math.floor(Math.random() * 6);
//   document.querySelector(identifier).setAttribute('src', diceList[randomNumber]);
// }
//
// function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }

function rollTheDie() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  console.log(randomNumber1);
  if (randomNumber1 == 1) {
    document.querySelector('.img1').setAttribute('src', 'images\\dice1.png');
  } else if (randomNumber1 == 2) {
    document.querySelector('.img1').setAttribute('src', 'images\\dice2.png');
  } else if (randomNumber1 == 3) {
    document.querySelector('.img1').setAttribute('src', 'images\\dice3.png');
  } else if (randomNumber1 == 4) {
    document.querySelector('.img1').setAttribute('src', 'images\\dice4.png');
  } else if (randomNumber1 == 5) {
    document.querySelector('.img1').setAttribute('src', 'images\\dice5.png');
  }  else if (randomNumber2 == 6) {
    document.querySelector('.img1').setAttribute('src', 'images\\dice6.png');
  }

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  console.log(randomNumber2);
  if (randomNumber2 == 1) {
    document.querySelector('.img2').setAttribute('src', 'images\\dice1.png');
  } else if (randomNumber2 == 2) {
    document.querySelector('.img2').setAttribute('src', 'images\\dice2.png');
  } else if (randomNumber2 == 3) {
    document.querySelector('.img2').setAttribute('src', 'images\\dice3.png');
  } else if (randomNumber2 == 4) {
    document.querySelector('.img2').setAttribute('src', 'images\\dice4.png');
  } else if (randomNumber2 == 5) {
    document.querySelector('.img2').setAttribute('src', 'images\\dice5.png');
  } else if (randomNumber2 == 6) {
    document.querySelector('.img2').setAttribute('src', 'images\\dice6.png');
  }

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".heading").innerHTML = "<img class=\"resultingHeadingIcon\" src=\"https://img.icons8.com/emoji/96/000000/star-struck.png\"/> Player 1 Won!!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".heading").innerHTML = "Player 2 Won!! <img class=\"resultingHeadingIcon\" src=\"https://img.icons8.com/emoji/96/000000/star-struck.png\"/>";
  } else {
    document.querySelector(".heading").innerHTML = "It's a DRAW!";
  }
}

document.querySelector('.rollButton').addEventListener("click",rollTheDie);
