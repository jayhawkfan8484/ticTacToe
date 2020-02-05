'use strict';

const gameBoard = function () {
  const winningArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]];

  /// Set up dummy boards for testing
  let xWinner = ["X", "X", "X", "O", "O", "X", "O", "X", "O"];
  let oWinner = ["X", "O", "X", "O", "O", "X", "X", "O", "O"];
  let xWinnerDiag = ["X", "X", "O", "O", "X", "O", "O", "O", "X"];

  let gameArray = [];
  for (let i = 0; i < 9; i++) {
    gameArray.push('');
  }

  let winner = false;

  let xPlayArray = getPlays('X');
  let oPlayArray = getPlays('O');
  function getPlays(marker) {
    let playArray = [];
    gameArray.forEach((item, index) => {
      if (item === marker) {
        playArray[playArray.length] = index;
      }
    });
    return playArray;
  }

  function checkForWinner(playerArray) {
    let winner = false;
    winningArray.forEach((arr) => {
      // console.log(winner);
      if (winner === true) return;
      let matchCount = 0;
      playerArray.forEach(num => {
        if (winner) {
          console.log("-----------------In WINNER")
          return;
        }
        if (arr.includes(num)) {
          matchCount += 1;
          if (matchCount === 3) {
            winner = true;
            return;
          }
        }
      })
    })
    return winner;
  }



  function placeMark(location = '0', mark = 'x') {
    gameArray[parseInt(location)] = mark.toUpperCase();
    // check for winner?
  }

  return {
    placeMark: placeMark,
    gameArray: gameArray,
    xPlayArray: xPlayArray,
    checkForWinner: checkForWinner
  }
}();




//  Winning Locations: (0,1,2)- (3,4,5)- (6,7,8)
//                     (0,3,6)- (1,4,7)- (2,5,8)
//                     (0,4,8)- (2,4,6);



// console.log(gameBoard.xPlayArray);

// console.table(winningArray);

