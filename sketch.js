var questionAsked;
var answerGiven;
var output;
// var submitQ;
var submitE;
var button;
var button1;
var button2;
var button3;

var count = 1;
var jibu;

var on = false;

function setup() {
	// createCanvas(windowWidth, windowHeight);
	//noCanvas();
	//textField = createInput("Enter text");
//createCanvas(710,400);
//background(200,0,200);
	greeting = createElement('h2', 'What is the question?');
	greeting.position(1000,5);

	button = createButton('testQuiz');
	button1 = createButton('DELETE');
	button2 = createButton('JARIBU');
	button3 = createButton('JIBUUU');
	button.mousePressed(anFunct);
	button1.mousePressed(futaStorage);
	button2.mousePressed(jaribuTena);
	button3.mousePressed(fanyaMambo);
	//button = createButton('submit');
 //button.position(300, 400);

	questionAsked = select("#question");
	answerGiven = select("#answer");

	// textField.changed(newText);
	//questionAsked.input(newTyping);

	//output = select('#output');

	// submitQ = select("#submitQuestion");
	submitE = select("#submitEntry");

	loadQuestion();


	// submitA.mousePressed(newQuestion);
	// submitQ.mousePressed(newQuestion);
	// submitA.mousePressed(newAnswer);

		//button = createButton('testButton');
	// button.mousePressed(greet);
	//
	// button1 = createButton('takeQuiz');
	// button1.mousePressed(quiz);

	// greeting = createElement('h2', 'What is your Question');
	// greeting.position(300, 300);
}

// function greet() {
// 	const name = questionAsked.value();
// 	greeting.html('the question is ' + name + '?');
// 	questionAsked.value('');
// }

// function quiz() {
// 	const name = questionAsked.value();
// 	greeting.html('the question is ' + name + '?');
// 	answer = createInput();
// 	if (answer.value === answerGiven.value) {
// 		correctAnswer = createElement('h1', 'The Answer is Correct');
// 	} else {
// 		correctAnswer = createElement('h1', 'The Answer is Wrong');
// 	}
// 	questionAsked.value('');
// }

function futaStorage() {
	localStorage.clear();
}

function jaribuTena() {


}

function hesabu() {

var namba = ""
	button = createButton('hesabuClicks');


}

function newTyping() {
	//output.html(questionAsked.value());
	//createP(textField.value());
}

function anFunct() {
	createP(localStorage.key(0));
		jibu = createInput("");
		sawa = createButton('ANSWER');
		//jibu.hide();
		//sawa.hide();
		button.hide();
		button3.position (sawa.x + sawa.width, 300);


}

// function newQuestion() {
// 	createP(questionAsked.value());
// 	createDiv(answerGiven.value());
// }

function fanyaMambo() {
	createP(localStorage.length);
	//	createP('Mambosawa');

	//	var dice = Math.floor(Math.random() * 6) + 1;

		//for (var i=0; i < localStorage.length) {}
		//
		// if (count == localStorage.length) {
		// 	count = 0;
		// }

		var going = true;

		if (going && count < localStorage.length) {
		//	createP(localStorage.getItem(localStorage.key(count)));
		var kurasa = createP(localStorage.key(count));

	//greeting.html(localStorage.key(count));
			jibu = createInput("");
			sawa = createButton('ANSWER');
//			button3.position (sawa.x + sawa.width, 300);
		//	going = true;
		count++;
	} else {
		createP("QUIZ OVER");
		button.hide();
	}



				if (count < localStorage.length) {

					//createP(localStorage.getItem(localStorage.key(count)));



					// if (jibu.value() != "") {
					// 		jibu = createInput("");
					// 	count++;
					// }
				}

//createP(localStorage.getItem(localStorage.key(count)));

				//	count++;



	//	createP(localStorage.getItem(localStorage.key(dice)));

	 //
		// for(var i =0; i < localStorage.length; i++){
	 //
		// 	if (i == 1) {
		// 		createP(localStorage.getItem(localStorage.key(i)));
		// 	} else {
		// 		createP(localStorage.getItem(localStorage.key(i)));
		// 	}
	 //
		// 	// console.log(swali);
		// //	 createP(swali);
	 // }

}

function newQuestion() {
	// output.html(questionAsked.value());
	// createP(questionAsked.value());
	// createP(questionAsked.value());
	// createDiv(answerGiven.value());

	var key = questionAsked.value();
	var value = answerGiven.value();

	localStorage.setItem(key, value);
	//
	// var val = localStorage.getItem(key);
	// console.log(val);
	//var val = localStorage.key(2);
	//console.log(val);

	questionAsked.value('');
	answerGiven.value('');


//  for(var i =0; i < localStorage.length; i++){
// 	 let swali = localStorage.getItem(localStorage.key(i));
//   	console.log(swali);
//
//
// 		createP(swali);
// }
}

function loadQuestion() {
	submitE.mousePressed(newQuestion);
	//submitQ.remove();
	//questionAsked.value('nandi');
}

// function newAnswer() {
// 	createDiv(answerGiven.value());
// }

function draw() {
	background(200,50,200);
}

// function mousePressed() {
// 	removeElements();
// }
