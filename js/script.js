var colors = generateRandomColors(6); //Color array
var squares = document.querySelectorAll(".grid-item");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetbtn");

colorDisplay.textContent = pickedColor;

// Add initial colors to squares
for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  // Add click listeners to squares
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor; // Normalize clicked color
    var targetColor = pickedColor; // Normalize picked color

    if (clickedColor === targetColor) {
      messageDisplay.textContent = "Correct..!"; // Show "Correct" on match
      resetButton.textContent = "Play Again";
      changeColors(clickedColor); // Change all squares to the correct color
      h1.style.backgroundColor = clickedColor; // Update header color
    } else {
      this.style.backgroundColor = "#232323"; // Fade wrong square
      messageDisplay.textContent = "Try Again"; // Show "Try Again" for wrong color
    }
  });
}

// Change all squares to the correct color
function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// Pick a random color
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Generate random colors
function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

// Generate a single random color
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Reset colors
resetButton.addEventListener("click", function resetColors() {
  // Generate all new colors
  colors = generateRandomColors(6);
  // Pick a random color from the array
  pickedColor = pickColor();
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // Change colors of squares
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = colors[index];
    squares[index].style.visibility = "visible"; // Ensure squares are visible
  }
  // Reset h1 background
  h1.style.backgroundColor = "steelblue";
  // Reset message display
  messageDisplay.textContent = "";
  // Reset button text
  resetButton.textContent = "New Colors";
});
