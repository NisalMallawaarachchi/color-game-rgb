var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 110, 0)",
  "rgb(255, 0, 110)",
  "rgb(255, 50, 50)",
  "rgb(255, 88, 20)",
  "rgb(255, 90, 30)",
];

var squares = document.querySelectorAll(".grid-item");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial colors to sqares
  squares[i].style.backgroundColor = colors[i];

  // Add click listners to squares
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

// Change all the squares into the correct color
function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}


