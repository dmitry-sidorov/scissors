
let playerChoice = "";
let roundCounter = 0;
let scoreWin = 0;
let scoreLoose = 0;
let scoreDraw = 0;
let roundsPlayed = document.querySelector('.player');
roundsPlayed.textContent = roundCounter;
let buttonRock = document.querySelector('.rock button');
let paraRock = document.querySelector('.para.rock');
buttonRock.addEventListener('click', (e) => {
	setColorsAll(paraRock, paraScissors, paraPaper);
	playerChoice = "rock";
});

let buttonScissors = document.querySelector('.scissors button');
let paraScissors = document.querySelector('.para.scissors');
buttonScissors.addEventListener('click', (e) => {
	setColorsAll(paraScissors, paraRock, paraPaper);
	playerChoice = "scissors";
});

let buttonPaper = document.querySelector('.paper button');
let paraPaper = document.querySelector('.para.paper');
buttonPaper.addEventListener('click', (e) => {
	setColorsAll(paraPaper, paraScissors, paraRock);
	playerChoice = "paper";
});

let buttonPlay = document.querySelector('.play button');
let paraPlay = document.querySelector('.play');
buttonPlay.addEventListener('click', (e) => {
	playRound();
	resetColor(paraRock);
	resetColor(paraScissors);
	resetColor(paraPaper);
});

let buttonPlayAgain = document.querySelector('.play-again button');
let paraPlayAgain = document.querySelector('.play-again');
buttonPlayAgain.addEventListener('click', (e) => {
	roundCounter = 0;
	roundsPlayed.textContent = roundCounter;
	paraPlayAgain.setAttribute('style','display: none');
	paraPlay.setAttribute('style','display: inline')
});

function setColor(color) {
	return ('background-color: ' + color);
}

function setColorsAll(set, reset1, reset2) {
	set.setAttribute('style', setColor("#b5a1d1")); 
	reset1.setAttribute('style', setColor("white"));
	reset2.setAttribute('style', setColor("white"));
}

function resetColor(reset) {
	reset.setAttribute('style', setColor("white")); 
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function computerPlay() {
	let randomNumber = Math.round(getRandomArbitrary (1,3));
	switch (randomNumber) {
		case 1: return "rock";
		break;
		case 2: return "scissors";
		break;
		case 3: return "papper";
		break;
	}
}

function compare(arg1, arg2) {
	if (arg1 === arg2) {
		return "draw";
	} else if (((arg1 == "rock") && (arg2 == "scissors"))
		|| ((arg1 == "papper") && (arg2 == "rock")) 
		|| ((arg1 == "scissors") && (arg2 == "papper"))) {
	return "win";
	} else return "loose";
}

function playRound() {
	if (roundCounter < 5) {
		let computerChoice = computerPlay();
		let roundResult = compare (playerChoice, computerChoice);
		roundCounter++;
		roundsPlayed.textContent = roundCounter;
	} else {
		paraPlayAgain.setAttribute('style','display: inline');
		paraPlay.setAttribute('style','display: none');
	} 
}
