function minimax(currentBoard, isMinimizing, depth){
    var currentBoard = currentBoard;
    // if (depth <= 0){
    //     return 1;
    // }
    if (isMinimizing){
        var player = "O";
    }
    else{
        var player = "X";
    }
    var score = checkWinner(currentBoard, player);
    if (score != null){
        return score;
    }
    if (isMinimizing){
        var bestScore = Infinity;
        for(var row=0; row < 3; row++){
            for(var column=0; column < 3; column++){
                var piece = currentBoard[column][row];
                if (piece == ""){
                    currentBoard[column][row] = "O";
                    score = minimax(currentBoard, false, depth-1);
                    currentBoard[column][row] = "";
                    if (score < bestScore){
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore;
    }
    else if (!isMinimizing){
        var bestScore = -Infinity;
        for(var row=0; row < 3; row++){
            for(var column=0; column < 3; column++){
                var piece = currentBoard[column][row];
                if (piece == ""){
                    currentBoard[column][row] = "X";
                    score = minimax(currentBoard, true, depth-1);
                    currentBoard[column][row] = "";
                    if (score > bestScore){
                        bestScore = score;
                    }
                }
            }
        }
        return bestScore;
    }
}




// var board = [
//     ["", "X", ""],
//     ["X", "O", "X"],
//     ["O", "O", ""]
//   ];
// console.log(bestMove(board));