// Variables
let colors = generateRandomColors(6); // Color array
const squares = document.querySelectorAll(".grid-item");
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#resetbtn");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");

// Initial Setup
colorDisplay.textContent = pickedColor;
h1.style.backgroundColor = "steelblue";
initializeGame();

// Function to initialize the game
function initializeGame() {
  setupModeButtons(); // Setup the mode buttons (Easy and Hard)
  resetGame(6); // Default to hard mode with 6 colors
  setupSquares(); // Setup squares (assign colors to them)
  setupResetButton(); // Setup the reset button functionality
}

// Setup mode buttons
function setupModeButtons() {
  [easyBtn, hardBtn].forEach((button) => {
    button.addEventListener("click", function () {
      const numColors = this.id === "easyBtn" ? 3 : 6;
      easyBtn.classList.toggle("selected", this.id === "easyBtn");
      hardBtn.classList.toggle("selected", this.id === "hardBtn");
      resetGame(numColors);
    });
  });
}

// Setup squares
function setupSquares() {
  squares.forEach((square, index) => {
    square.addEventListener("click", function () {
      const clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  });
}

// Setup reset button
function setupResetButton() {
  resetButton.addEventListener("click", () => {
    const numColors = easyBtn.classList.contains("selected") ? 3 : 6;
    resetGame(numColors);
  });
}

// Reset the game
function resetGame(numColors) {
  colors = generateRandomColors(numColors);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  squares.forEach((square, index) => {
    if (colors[index]) {
      square.style.backgroundColor = colors[index];
      square.style.display = "block";
    } else {
      square.style.display = "none";
    }
  });
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
}

// Change all squares to the correct color
function changeColors(color) {
  squares.forEach((square) => {
    square.style.backgroundColor = color;
  });
}

// Pick a random color
function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Generate random colors
function generateRandomColors(num) {
  return Array.from({ length: num }, randomColor);
}

// Generate a single random color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
