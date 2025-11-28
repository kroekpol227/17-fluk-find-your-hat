"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board titles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
  [PLAYER, EMPTY, HOLE, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY, EMPTY, HOLE, EMPTY, HOLE, EMPTY],
  [HOLE, HOLE, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  [HOLE, EMPTY, EMPTY, EMPTY, HOLE, EMPTY, EMPTY, EMPTY],
  [HOLE, HOLE, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, HAT],
];

// Print board
function printBoard(board) {
  console.clear(); // call console.clear() before print each move

  //borad.map วนลูปใน array แล้วสร้าง array ใหม่
  //รวมแต่ละช่องในแถวนั้นให้เป็น string และ ขึ้นบรรทัดใหม่ในแต่ละแถว

  console.log(board.map((row) => row.join(" ")).join("\n"));
}
// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

//Move player
function moveUP() {
  if (playerRow > 0) {
    playerRow--;
    checkRule(board);
    board[playerRow][playerCol] = PLAYER;
  } else {
    console.log("top side");
    playing = false;
  }
}

function moveDown() {
  if (playerRow < board[0].length - 1) {
    playerRow++;
    checkRule(board);
    board[playerRow][playerCol] = PLAYER;
  } else {
    console.log("down side");
    playing = false;
  }
}

function moveLeft() {
  if (playerCol > 0) {
    playerCol--;
    checkRule(board);
    board[playerRow][playerCol] = PLAYER;
  } else {
    console.log("left side");
    playing = false;
  }
}
function moveRight() {
  if (playerCol < board[0].length - 1) {
    playerCol++;
    checkRule(board);
    board[playerRow][playerCol] = PLAYER;
  } else {
    console.log("right side");
    playing = false;
  }
}

function move(input) {
  switch (input) {
    case "w":
      moveUP();
      break;
    case "s":
      moveDown();
      break;
    case "a":
      moveLeft();
      break;
    case "d":
      moveRight();
      break;
    default:
  }
}

// rule
function checkRule(board) {
  let playerLOC = board[playerRow][playerCol];
  if (playerLOC === HAT) {
    playing = false;
    console.log(" you win");
  } else if (playerLOC === HOLE) {
    playing = false;
    console.log(" lose");
  }
}

// Game play loop

while (playing) {
  printBoard(board);
  const input = prompt("Which way? (w/a/s/d): ").toLowerCase().trim();
  console.log("ค่าที่กรอก" + " " + input);
  move(input);
}
