var randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);
if (randomNumber1==1) {
  document.querySelector('.img1').setAttribute('src', 'images\\dice1.png');
} else if (randomNumber1==2) {
  document.querySelector('.img1').setAttribute('src', 'images\\dice2.png');
} else if (randomNumber1==3) {
  document.querySelector('.img1').setAttribute('src', 'images\\dice3.png');
} else if (randomNumber1==4) {
  document.querySelector('.img1').setAttribute('src', 'images\\dice4.png');
} else if (randomNumber1==5) {
  document.querySelector('.img1').setAttribute('src', 'images\\dice5.png');
}


var randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber2);
if (randomNumber2==1) {
  document.querySelector('.img2').setAttribute('src', 'images\\dice1.png');
} else if (randomNumber2==2) {
  document.querySelector('.img2').setAttribute('src', 'images\\dice2.png');
} else if (randomNumber2==3) {
  document.querySelector('.img2').setAttribute('src', 'images\\dice3.png');
} else if (randomNumber2==4) {
  document.querySelector('.img2').setAttribute('src', 'images\\dice4.png');
} else if (randomNumber2==5) {
  document.querySelector('.img2').setAttribute('src', 'images\\dice5.png');
}

if (randomNumber1>randomNumber2) {
  document.querySelector(".heading").innerHTML = "<img class=\"resultingHeadingIcon\" src=\"https://img.icons8.com/emoji/96/000000/star-struck.png\"/> Player 1 Won!!";
} else if (randomNumber1<randomNumber2) {
  document.querySelector(".heading").innerHTML = "Player 2 Won!! <img class=\"resultingHeadingIcon\" src=\"https://img.icons8.com/emoji/96/000000/star-struck.png\"/>";
} else {
  document.querySelector(".heading").innerHTML = "It's a DRAW!";
}
