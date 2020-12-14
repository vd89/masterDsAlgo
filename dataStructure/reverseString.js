// Create a function that reverse a string:
// 'Hi My name is Dax Code and I am MERN stack DEVELOPER ' should be
//  'REPOLEVED kcats NREM ma I dna edoC xaD si eman yM iH'

const string1 = "Hi My name is Dax Code and I am MERN stack DEVELOPER ";

function reverseString(str) {
	// Check
	if (!str || str.length < 2 || typeof str !== "string") {
		return "This is not a sting ";
	}
	const backwards = [];
	const totalItems = str.length - 1;
	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}
	return backwards.join("");
}

// reverseString("Hi My name is Dax Code and I am MERN stack DEVELOPER ");
function reverse2(str) {
	//check for valid input
	return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

console.log(string1);
console.log(reverseString(string1));
console.log(reverse2(string1));
console.log(reverse3(string1));
