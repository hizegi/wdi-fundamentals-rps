////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if ( move === 'rock') {
        return 'rock';
    } else if (move === 'paper') {
        return 'paper';
    } else if (move === 'scissors') {
        return 'scissors';
    } else {
        return getInput();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  
}

function getComputerMove(move) {
    if ( move === 'rock') {
        return 'rock';
    } else if (move === 'paper') {
        return 'paper';
    } else if (move === 'scissors') {
        return 'scissors';
    } else {
        return randomPlay();
    }
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
  

function getWinner(playerMove,computerMove) {
    var winner;
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    //conditions where Player wins
    if ((playerMove === 'rock') && (computerMove === 'scissors') ||
        (playerMove === 'scissors') && (computerMove === 'paper') ||
        (playerMove === 'paper') && (computerMove === 'rock')) {
            winner = 'player';
    //conditions where Player loses, computer wins
    } else if ((playerMove === 'rock') && (computerMove === 'paper') ||
        (playerMove === 'scissors') && (computerMove === 'rock') ||
        (playerMove === 'paper') && (computerMove === 'scissors')) {
            winner = 'computer' ;   
    //else game results in a tie
    } else if (playerMove === computerMove) {
        winner = 'tie';
    } else {
        return getWinner();
    }
    //return either computer, player, or tie
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
        //winner = computer, player, or tie from getWinner
       var winner = getWinner();
       //player wins, add 1 to player total
        if (winner === 'player'){
            playerWins++;
        //computer wins, add 1 to computer total
        } else if (winner === 'computer') {
            computerWins++;
        //if a tie , do nothing
        } else {
            
        }
    }
        return [playerWins, computerWins];
}

  

    /* run getWinner function. If result is player, add +1 to playerWins count. 
    If result is computer, add +1 to computer count.
    If result is tie, add 0 to the count.
    run getWinner function again for 2nd result.
    Run the loop until either playerWins or computerWins = 5.
    Declare the either Player or Computer as winner.
    return the final score.*/
 
    

playToFive();


