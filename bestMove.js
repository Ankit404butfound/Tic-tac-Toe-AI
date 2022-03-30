function bestMove(currentBoard){
    var currentBoard = currentBoard;
    var bestMove = [];
    var bestScore = Infinity;
    var score;
    for(var row=0; row < 3; row++){
        for(var column=0; column < 3; column++){
            var piece = currentBoard[row][column];
            if (piece == ""){
                currentBoard[row][column] = "O";
                score = minimax(currentBoard, true, 4);
                if (score < bestScore){
                    bestScore = score;
                    bestMove = [row, column];
                }
                currentBoard[row][column] = "";
            }
        }
    }
    return [bestMove];
}