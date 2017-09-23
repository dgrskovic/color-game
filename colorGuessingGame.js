
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var titleColor = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function() {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
	//add listeners for each square
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to clicked color
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				changeColor(clickedColor);
				titleColor.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				messageDisplay.textContent = "Try Again";
				this.style.background = "#232323";
			}
		});
	}
}


function reset() {
	colors = randomColorPicker(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	titleColor.style.background = "steelblue";
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
	reset();
});


function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColorPicker(num) {
	var array = [];
	for (var i = 0; i < num; i++) {
		array.push(randomColor());
	}
	return array;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb" + "(" + r + ", " + g + ", " + b + ")"; 
}

