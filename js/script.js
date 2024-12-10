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

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial colors to sqares
  squares[i].style.backgroundColor = colors[i];

  // Add click listners to squares
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      alert("correct");
    } else {
      this.style.backgroundColor = "#232323"
    }
  });
}
