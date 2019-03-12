var textField;
var output;
var submit;


function setup() {
	// createCanvas(windowWidth, windowHeight);
	noCanvas();
	//textField = createInput("Enter text");

	textField = select("#blueberry");

	// textField.changed(newText);
	textField.input(newTyping);

	output = select('#output');
	submit = select("#submit");

	submit.mousePressed(newText);
}

function newTyping() {
	output.html(textField.value());
	//createP(textField.value());
}

function newText() {
	createP(textField.value());
}
