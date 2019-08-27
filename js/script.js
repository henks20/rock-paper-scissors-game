// *** Useless code ***
// var computerMove, playerMove;
// computerMove = 'kamień';
// printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
// playerMove = 'papier';
// printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

// *** My example ***
// var randomNumber;
// randomNumber = Math.floor(Math.random() * 9 + 11);
// printMessage('Wylosowana liczba to: ' + randomNumber);

// *** Useless code ***
// var computerMove, randomNumber;
// randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log('wylosowana liczba to: ' + randomNumber);
// if (randomNumber == '1') {
//   computerMove = 'kamień';
// } else if (randomNumber == '2') {
//   computerMove = 'papier';
// } else if (randomNumber == '3') {
//   computerMove = 'nożyce';
// } else {
//   computerMove = 'nieznany ruch';
// }
// printMessage('Mój ruch: ' + computerMove);

// *** Useless code ***
// var playerMove, playerInput;
// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
// console.log('Wpisana odpowiedź to: ' + playerInput);
// if (playerInput == '1') {
//   playerMove = 'kamień';
// } else if (playerInput == '2') {
//   playerMove = 'papier';
// } else if (playerInput == '3') {
//   playerMove = 'nożyce';
// } else {
//   playerMove = 'kamień';
// }
// printMessage('Twój ruch: ' + playerMove);

// *** Useles code ***
// function printMessage(msg) {
//   var div = document.createElement("div");
//   div.innerHTML = msg;
//   document.getElementById("messages").appendChild(div);
// }

// function clearMessages() {
//   document.getElementById("messages").innerHTML = "";
// }

// var argMoveId,
//   argPlayerMove,
//   argComputerMove,
//   computerMove,
//   playerMove,
//   randomNumber,
//   playerInput;

// function getMoveName(argMoveId) {
//   console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
//   if (argMoveId == 1) {
//     return "kamień";
//   } else if (argMoveId == 2) {
//     return "papier";
//   } else if (argMoveId == 3) {
//     return "nożyce";
//   } else {
//     printMessage(
//       "Nie znam ruchu o id " + argMoveId + '. Zakładam, że chodziło o "kamień".'
//     );
//     return "kamień";
//   }
// }

// function displayResult(argPlayerMove, argComputerMove) {
//   console.log(
//     "wywołano funkcję displayResults z argumentami: " +
//       argPlayerMove +
//       ", " +
//       argComputerMove
//   );
//   if (argPlayerMove == "papier" && argComputerMove == "kamień") {
//     printMessage("Wygrywasz!");
//   } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
//     printMessage("Wygrywasz!");
//   } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
//     printMessage("Wygrywasz!");
//   } else if (argPlayerMove == argComputerMove) {
//     printMessage("Remis!");
//   } else {
//     printMessage("Przegrywasz :(");
//   }
//   printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
// }
// playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
// console.log("wybór ruchu gracza to: " + playerInput);
// playerMove = getMoveName(playerInput);
// console.log("ruch gracza to: " + playerMove);
// randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log("wylosowana liczba to: " + randomNumber);
// computerMove = getMoveName(randomNumber);
// console.log("ruch komputera to: " + computerMove);
// displayResult(playerMove, computerMove);

var argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;

// buttonTest = document.getElementById("button-test");
buttonRock = document.getElementById("button-rock");
buttonPaper = document.getElementById("button-paper");
buttonScissors = document.getElementById("button-scissors");

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + " został kliknięty");

  function printMessage(msg) {
    var div = document.createElement("div");
    div.innerHTML = msg;
    document.getElementById("messages").appendChild(div);
  }

  function clearMessages() {
    document.getElementById("messages").innerHTML = "";
  }

  var argMoveId,
    argPlayerMove,
    argComputerMove,
    computerMove,
    playerMove,
    randomNumber,
    playerInput;

  function getMoveName(argMoveId) {
    console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    } else {
      printMessage(
        "Nie znam ruchu o id " +
          argMoveId +
          '. Zakładam, że chodziło o "kamień".'
      );
      return "kamień";
    }
  }

  function displayResult(argPlayerMove, argComputerMove) {
    console.log(
      "wywołano funkcję displayResults z argumentami: " +
        argPlayerMove +
        ", " +
        argComputerMove
    );
    if (argPlayerMove == "papier" && argComputerMove == "kamień") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == argComputerMove) {
      printMessage("Remis!");
    } else {
      printMessage("Przegrywasz :(");
    }
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  }
  // playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
  console.log("wybór ruchu gracza to: " + playerInput);
  // playerMove = getMoveName(playerInput);
  playerMove = argButtonName;
  console.log("ruch gracza to: " + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("wylosowana liczba to: " + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log("ruch komputera to: " + computerMove);
  displayResult(playerMove, computerMove);
}

// buttonTest.addEventListener("click", function() {
//   buttonClicked("Guzik TEST");
// });
buttonRock.addEventListener("click", function() {
  buttonClicked("kamień");
});
buttonPaper.addEventListener("click", function() {
  buttonClicked("papier");
});
buttonScissors.addEventListener("click", function() {
  buttonClicked("nożyce");
});
