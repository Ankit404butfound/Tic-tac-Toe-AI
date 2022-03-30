function checkWinner(currentBoard, currentPlayer){
    var currentBoard = currentBoard;
    var someOneWon = false;
    for (let i = 0; i < 3; i++){
      if (
          (currentBoard[i][0] == currentBoard[i][1] && currentBoard[i][1] == currentBoard[i][2] && currentBoard[i][2] != "") ||
          (currentBoard[0][i] == currentBoard[1][i] && currentBoard[1][i] == currentBoard[2][i] && currentBoard[2][i] != "") ||
          (currentBoard[0][0] == currentBoard[1][1] && currentBoard[1][1] == currentBoard[2][2] && currentBoard[2][2] != "") ||
          (currentBoard[0][2] == currentBoard[1][1] && currentBoard[1][1] == currentBoard[2][0] && currentBoard[2][0] != "")
          ){
            someOneWon = true;
          }
      }
    if (someOneWon){
      if (currentPlayer == "O"){
        return -1;
      }
  
      else if (currentPlayer == "X"){
        return 1;
      }
    }
    else if (!(currentBoard[0].includes("") || currentBoard[1].includes("") || currentBoard[2].includes(""))){
        return 0;
    }
    else{
        return null;
    }
}