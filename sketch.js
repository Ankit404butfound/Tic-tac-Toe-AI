let players = ["X", "O"];
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

AI = "O";
HUMAN = "X";

var gameOver = false;
var currentPlayerCounter = false;
var aiMove = false;


function setup() {
  let cnv = createCanvas(400, 400);
  background(230);
  strokeWeight(5);
  textSize(100);
  textAlign(CENTER, CENTER);
}


function draw() {
  line(0, height/3, width, height/3);
  line(0, 2*height/3, width, 2*height/3);

  line(width/3, 0, width/3, height);
  line(2*width/3, 0, 2*width/3, height);
  noLoop();  
}


function drawZeroOrCross(row, column){
  text(players[int(currentPlayerCounter)], (height/6)*(2*column+1), (width/6)*(2*row+1));
  
  board[row][column] = players[int(currentPlayerCounter)];
  console.log(board);
  var anyWinner = checkWinner(board, players[int(currentPlayerCounter)]);
  if (anyWinner != null){
    document.getElementById("WinnerText").innerHTML = (players[int(currentPlayerCounter)]+" is winner");
    gameOver = true;
    noLoop();
  }
  else{
    currentPlayerCounter = !currentPlayerCounter;
    if (aiMove){
      aiMove = false;
      var move = bestMove(board);
      console.log(move[1], move[0]);
    }
  }
}


function mousePressed(){
  if (aiMove){
    return;
  }
  aiMove = true;
  let row = int(mouseY/(height/3));
  let column = int(mouseX/(width/3));
  console.log(gameOver);
  if (gameOver){
    location.reload();
    return;
  }
  if (row > 2 || column > 2 || board[row][column] != ""){
    return;
  }
  drawZeroOrCross(row, column);
}
