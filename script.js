document.getElementById('userInput').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleInput();
  }
});

const handleInput = () => {
  const userInput = document.getElementById('userInput');
  let user = userInput.value.toUpperCase();
  userInput.value = '';

  let comp = Math.floor(Math.random() * 3)
  let compChoice;

  switch (comp) {
    case 0:
      compChoice =  "S"
      break
    case 1:
      compChoice = "W"
      break
    case 2:
      compChoice = "G"
      break
    default:
      compChoice = "Invalid"
      break
  }

  let message

  if (user == "S" && compChoice == "W" || user == "W" && compChoice == "G" || user == "G" && compChoice == "S") {
    message = ("Your choice : " + user + "<br>Computer's choice : " + compChoice + "<br>Congratulations!! You win.")
  }

  else if (user == "S" && compChoice == "G" || user == "W" && compChoice == "S" || user == "G" && compChoice == "W") {
    message = ("Your choice : " + user + "<br>Computer's choice : " + compChoice + "<br>Oh no, You lose!!")
  }

  else if (user === compChoice) {
    message = ("Your choice : " + user + "<br>Computer's choice : " + compChoice + "<br>Both have same choices.")
  }

  else {
    message = "Invalid choice."
  }

  const outputElement = document.getElementById('output');
  outputElement.innerHTML = message;

}