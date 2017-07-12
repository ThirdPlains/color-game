var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

init();

function init(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected")
			if(this.textContent === "Easy"){
				numSquares = 3;
			} else{
				numSquares = 6;
			}
			reset();
		});
	}

	for(var i = 0; i < squares.length; i++){
	// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "correct!"
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
			} 
		});
	}

	reset();
}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#388E8E";
}

resetButton.addEventListener("click", function() {
	reset();
});



colorDisplay.textContent = pickedColor;

// Used to change the all the squares colors into the color of the correct square
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
	//change each color to match given color
}

// Used to randomize the rgb color
function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
	//get random color and push to array
	arr.push(randomColor())
	}
	//return the array at the end
	return arr;
}

//this function is used to produce a random color
function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}





