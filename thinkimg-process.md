# Thinking Process Guidelines

## Table of Contents

- [Thinking Process Guidelines](#thinking-process-guidelines)
  - [Table of Contents](#table-of-contents)
  - [1. Workflow Planning](#1-workflow-planning)
  - [2.1. Board Functions (Hardcoded)](#21-board-functions-hardcoded)
  - [2.2. Board Functions (Generated)](#22-board-functions-generated)
  - [3. Input Functions](#3-input-functions)
  - [4. Movement Functions](#4-movement-functions)
  - [5. Game Rule Functions](#5-game-rule-functions)
  - [6. Game Play Loop](#6-game-play-loop)
- [WRITE YOUR THINKING PROCESS BELOW. ](#write-your-thinking-process-below)

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>

↳ Draw a flowchart or write steps describing:

<p style="display: flex; align-items: center; gap: 1rem;">
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Game start</span>
<span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Read input</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Update position</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Check rules</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">End/Continue</span>
</p>

↳ Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>

↳ Prints the hardcoded board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>

↳ Creates a random board with player, hat, and holes.
↳ Prints the board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>

↳ Reads and validates user input (w, a, s, d).
↳ Logs invalid input.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>

↳ Updates playerRow / playerCol based on the move.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>

↳ Checks for out-of-bounds, falling into a hole, or finding the hat.

<span style="font-weight:bold; color: pink;">&nbsp;Game Rules:&nbsp;</span>

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

↳ Combine all functions into a playable loop.
↳ Ensure messages appear correctly, board prints at start, and invalid input is handled.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

---

# <p style="display: flex; align-items: center; gap: 0.5em;"><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 2rem;">WRITE YOUR THINKING PROCESS BELOW.</span><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 0;">&nbsp;</span></p>

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">Thinking Process</span> 
### 1. Workflow Planning
- สร้างกระดานบอร์ดเกมส์
- แสดงกระดานบอร์ดเกมส์
- วางตำแหน่งผู้เล่นเริ่มต้น
- รับ input จากผู้เล่น (w,a,s,d)
- แปลงค่า input ที่รับมาให้ทำตามคำสั่งที่เราตั้งไว้ในตัวแปร [w(ขึ้น),a(ซ้าย),s(ลง),d(ขวา)]
- ขยับตำแหน่งผู้เล่น
- ตรวจสอบกฏเกมส์ เป็นช่องว่างให้เดินต่อได้,ตกหลุมให้แพ้,ถ้าถึงหมวกชนะ
- จบเกมส์และวนกลับไปเริ่มใหม่

### 2.  Board Functions 
### 2.1. Board Functions (Hardcoded)
- สร้างกระดานเป็น array 2 มิติ 
- กำหนดค่าคงที่ที่จะวางในบอรด์ โดยกำหนด [PLAYER = "*" / EMPTY = "░" / HOLE = "O" / HAT = "^"]
- แสดงบอร์ดเกมส์แบบกำหนดตำแหน่งค่าที่เราสร้างเอง

### 2.2. Board Functions (Generated)
- สร้างกระดานเป็น array 2 มิติ
- ใช้ฟังชั่นสุ่มการวางตำแหน่ง HOLE และ HAT
- แสดงบอร์ดเกมส์

### 3. Input Functions
- รับ input จากผู้เล่น (w,a,s,d)
- ตรวจสอบอ่านค่าว่าที่รับถูกต้องไหม
- ส่งผลลัพธ์เป็นทิศทาง [w=บน , a=ซ้าย, s=ล่าง , d=ขวา]

### 4. Movement Functions
- รับค่า input
- แปลง input เป็นทิศทาง
- w ย้ายขึ้น 1 ช่อง / s ย้ายลง 1 ช่อง / a ย้ายซ้าย 1 ช่อง / d ย้ายขวา 1 ช่อง
- อัปเดตตำแหน่งผู้เล่นใหม่

### 5. Game Rule Functions
- ตรวจสอบว่าการเดิน เลยขอบกระดานบอร์ดเกมส์ = แพ้ หรือ ตกหลุม = แพ้ หรือ ลงหมวก = ชนะ
- ถ้าไม่ติดเงื่อนไขอัปเดตตำแหน่งว่าง
- แสดงบอร์ดเกมส์ใหม่

### 6. Game Play Loop
- ทำการวนลูปคำสั่งในการเคลื่อนตำแหน่ง จนกว่าจะเจอ HAT หรือ HOLE แล้วออกจากลูป

[Back to Table of Contents](#table-of-contents)

---
