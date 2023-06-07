let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score"); //dont forget ""
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  return "Scissors"
}

function win(userChoice, computerChoice) {
  userScore++
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
}

function lose(userChoice, computerChoice) {
  computerScore++
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoice)}  beats ${convertToWord(userChoice)}. You lost!`

}

function tie(userChoice, computerChoice) {
  result_p.innerHTML = `It's a tie`

}

function game(userChoice) {
const computerChoice = getComputerChoice();

switch (userChoice + computerChoice) {
  case "pr":
  case "rs":
  case "sp":
    win(userChoice, computerChoice)
    break

  case "rp":
  case "ps":
  case "sr":
    lose(userChoice, computerChoice)
    break;

  case "rr":
  case "pp":
  case "ss":
     tie()
     break;




}
  
}


function main() {
  rock_div.addEventListener('click', function() {
    game("r"); //gives rock the parameter r = userChoice when you click it aka linking up with game()
  }) //check where you put the bracket (after 2nd condition is stated)

  paper_div.addEventListener('click', function() {
   game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
   })
}

main();

//cache the DOM
//main() eventlistner that calls game() when clicked
//game(userChoice) that declares compChoice aka math random then compares them 
//using switch statement(userChoice + compChoice) 
//calls the functions: 
//win(), lose(), tie(): links user and comp para then prints message using .innerHTML 
//for loop to iterate 5 rounds
//extra color function

// user score
// computer score
// choice
// result