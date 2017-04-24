var write = document.getElementById("stickItHere");
var testString = "";
var button = document.getElementById("button");
var userInput = document.getElementById("input");

// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.

function reversal(input) {
	var string = input;
	var toArray = string.toUpperCase().split("");
	var reverse = toArray.reverse("").join("");
	write.innerHTML += "Your reversed string is: " + reverse + "<br>";
}

// reversal(testString);

// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.

function alphabits(input) {
	var string = input;
	var toArray = string.toUpperCase().split("");
	var alphabetical = toArray.sort();
	write.innerHTML += "Your string in alphabetical order is: " + alphabetical + "<br>";
}

// alphabits(testString);

// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.

function palindrome(input) {
	var string = input;
	var toArray = string.toUpperCase().split("").join();
	var backwardArray = input;
	backwardArray = backwardArray.toUpperCase().split("").reverse().join();
	if (backwardArray === toArray){
		write.innerHTML += "Your string is a palindrome!<br>";
	} else {
		write.innerHTML += "Your string is not a plaindrome.<br>";
	}
}



// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.

button.addEventListener("click", function(event){
	testString = userInput.value;
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
})

userInput.addEventListener("keyup", function(event){
	var x = event.key;
	if (x === "Enter"){
		testString = userInput.value;
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
	}
})

// The output of each of the functions should immediately appear as well.
