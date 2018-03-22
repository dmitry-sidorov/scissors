//HTML selectors
window.onload = function () {
	let playerSelect = "";
	let buttonContainerLeft = document.querySelector('.button rock');
	let buttonRock = document.querySelector('.rock');
	buttonRock.addEventLister('click', event => {
		setRockColor();}, false);

function setRockColor() {
	buttonContainerLeft.setAttribute ('style.css','border-color: green');
}

}




let winDisplay = document.querySelector(".win");
winDisplay.textContent += win;

let playButton = document.querySelector(".play-button");
playButton.addEventLister('click', game());


// Business logic

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
	let computerSelection = computerPlay();
	let playerSelection = check (prompt("Rock? Paper? Scissors?"));
	let winnerIndex = compare (playerSelection, computerSelection);
	let winner = message("winnerIndex");
	console.log ("You: " + playerSelection + " Computer: " + computerSelection + " " + winner);
	return winnerIndex;
	}

function message(arg) {
	switch (arg) {
	case 0: return "Draw!";
	break;
	case 1: return "You win!";
	break;
	case 2: return "You loose!"
	break;
	default: return "Invalid argument"
	}
}

function check(str) {
	let checkFailed = false;
	if (str !== "string") {
		console.log("Enter correct value!");
		checkFailed = true;
	} else str = str.toLowerCase();
	if (((str !== "rock") || (str !== "papper") || (str !== "scissors")) && checkFailed == false) {
		console.log("Enter correct value!");
	} else {
		return str;
	}
}


function game() {
	let win = 0;
	let lost = 0;
	let draw = 0; 
	for (i = 0; i < 5; i++) {
		let result = playRound();
		switch (result) {
			case 0: draw++;
			break;
			case 1: win++;
			break;
			case 2: lost++;
			break;
		}
		
	}
}


