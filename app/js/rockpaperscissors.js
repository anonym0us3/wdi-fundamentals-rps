////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    if (playerMove === computerMove) {
    winner = 'tie';
	} else if (playerMove === 'rock' && computerMove === 'scissors') {
		winner = 'player';
	} else if (playerMove === 'rock' && computerMove === 'paper') {
		winner = 'computer';	
	} else if (playerMove === 'paper' && computerMove === 'rock') {
		winner = 'player';
	} else if (playerMove === 'paper' && computerMove === 'scissors') {
		winner = 'computer';
	} else if (playerMove === 'scissors' && computerMove === 'rock') {
		winner = 'computer';
	} else {
		winner = 'player';
	} 
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins < 5) && (computerWins < 5)) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    console.log("You played " + playerMove + " while HAL9000 chose " + computerMove);
    var winner = getWinner(playerMove,computerMove);
        if (winner === 'player') {
            playerWins += 1;
            console.log("You are the wiener!" + '\n');
        } else if (winner === 'computer') {
            computerWins +=1;
            console.log("You get nothing, you LOSE, good day sir!" + '\n');
        } else {
            console.log("You matched wits with the robot and broke even, keep going!" + '\n') ;
        }
    }
    console.log("And here are the scores: You are at " + playerWins + " while the computer has won " + computerWins + " times.");
    if (playerWins < computerWins) {
    	console.log("Thanks a lot, Miles Dyson... you just gave rise to SKYNET!");
    } else {
    	console.log("Great job, John Connor, you've prevented the rise of the machines!");
    }
    return [playerWins, computerWins];
}
playToFive();

// function playTo(x) {
//	console.log("Would you like to play a game?");
//	var playerWins = 0;
//	var computerWins = 0;
//	for (var i = 1, i <= x, i += 1) {
//		while ((playerWins < x) && (computerWins < x)) {
//      var winner = getWinner();
//		var playerMove = getPlayerMove();
//		var computerMove = getComputerMove();
//			if (winner === 'player') {
//          	playerWins += 1;
//          	console.log("You are the wiener!" + '\n');
//      	} else if (winner === 'computer') {
//          	computerWins +=1;
//          	console.log("You get nothing, you LOSE, good day sir!" + '\n');
//      	} else if (winner === 'tie') {
//          	console.log("You matched wits with the robot and broke even, keep going!" + '\n');
//      	}
//  	}
//  	console.log("You played " + playerMove + " while HAL9000 chose " + computerMove);
//  	console.log("And here are the scores! You are at " + playerWins + " while the computer has won " + computerWins " times.");
//  	return [playerWins, computerWins];
// }
//playTo(x);