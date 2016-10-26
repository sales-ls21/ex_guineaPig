var output = document.getElementById("output-target");

//#1 Clicking on Sections
var sections = document.querySelectorAll(".article-section");

for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', reflect)
}

function reflect() {
	output.innerHTML = this.innerHTML;
}


//#2 and 3 On Mousover
document.getElementById("page-title").addEventListener("mouseover", write);
document.getElementById("page-title").addEventListener("mouseout", writeAway);

function write() {
	output.innerHTML = "You moused over the header.";
}

function writeAway() {
	output.innerHTML = "You left me!!";
}

//#4 Input Elements Mirror Output Elements
document.getElementById("keypress-input").addEventListener("keypress", mirror);

function mirror() {
	output.innerHTML = document.getElementById("keypress-input").value;
}

//#5 Add Color
document.getElementById("add-color").addEventListener("click", color);

function color() {
	document.getElementById("guinea-pig").classList = "blue"
}

//#6 Increase Size
document.getElementById("make-large").addEventListener("click", hulkify);

function hulkify () {
	document.getElementById("guinea-pig").classList = "bigger";

}
//#7 Capture
document.getElementById("add-border").addEventListener("click", capture);

function capture() {
	document.getElementById("guinea-pig").classList = "wrap";
}

//#8 Round
document.getElementById("add-rounding").addEventListener("click", rounder);

function rounder() {
	document.getElementById("guinea-pig").classList = "rounded";
}

