var computerMove;
computerMove = "kamień";
printMessage(
"Zagrałem " + computerMove + "! Jeśli Twój ruch to papier, to wygrywasz!"
);

var playerMove;
playerMove = "papier";
printMessage(
"Zagrałem " +
computerMove +
"! Jeśli Twój ruch to" +
playerMove +
" , to wygrywasz!"
);

var randomNumber;
randomNumber = Math.floor(Math.random() \* 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);

// var randomNumber2;
// randomNumber2 = Math.floor(Math.random() \* 9 + 11);
// printMessage('Wylosowana liczba to: ' + randomNumber2);

console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
computerMove = 'kamień';
} else {
computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);
