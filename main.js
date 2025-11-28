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

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
function printBoard(board) {
  console.clear(); // call console.clear() before print each move

  //.map วนลูปใน array แล้วสร้าง array ใหม่
  //รวมแต่ละช่องในแถวนั้นให้เป็น string และ ขึ้นบรรทัดใหม่ในแต่ละแถว

  console.log(board.map((row) => row.join(" ")).join("\n"));
}

// Game play loop
printBoard(board);
const input = prompt("Which way? (w/a/s/d): ");
console.log(input);
