import { stringify } from "querystring";

const buttonRock = document.getElementById("button-rock");
const buttonPaper = document.getElementById("button-paper");
const buttonScissors = document.getElementById("button-scissors");

buttonRock.addEventListener("click", function() {
  buttonClicked("kamień");
});
buttonPaper.addEventListener("click", function() {
  buttonClicked("papier");
});
buttonScissors.addEventListener("click", function() {
  buttonClicked("nożyce");
});

function buttonClicked(argButtonName) {
  const playerMove = argButtonName;
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);
  clearMessages();
  console.log(argButtonName + " został kliknięty");

  function printMessage(msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    document.getElementById("messages").appendChild(div);
  }

  function clearMessages() {
    document.getElementById("messages").innerHTML = "";
  }

  function getMoveName(argMoveId) {
    console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
    // Sprawdzilem ze data type argMoveId: number
    // console.log(typeof argMoveId);
    switch (argMoveId) {
      // Nie daje break poniewaz mam na koncu kazdego rezultatu "return"
      case 1:
        return "kamień";
      case 2:
        return "papier";
      case 3:
        return "nożyce";
      default:
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
    // KOD NIE DZIALA !
    // Probowalem z przecinkiem pomiedzy i && jak widać, z 3 x =, z 2 x ==
    // Brak mi pomyslow
    switch ((argPlayerMove, argComputerMove)) {
      case argPlayerMove == "papier" && argComputerMove == "kamień":
      case argPlayerMove == "kamień" && argComputerMove == "nożyce":
      case (argPlayerMove == "nożyce", argComputerMove == "papier"):
        printMessage("Wygrywasz!");
        console.log("1");
        break;
      case argPlayerMove == argComputerMove:
        printMessage("Remis!");
        console.log("2");
        break;
      default:
        printMessage("Przegrywasz :(");
        // console.log(argPlayerMove, argComputerMove);
        // Oba stringi...
        console.log(typeof argPlayerMove, typeof argComputerMove);
        console.log("3");
        break;
    }
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  }

  console.log("ruch gracza to: " + playerMove);
  console.log("wylosowana liczba to: " + randomNumber);
  console.log("ruch komputera to: " + computerMove);
  displayResult(playerMove, computerMove);
}
