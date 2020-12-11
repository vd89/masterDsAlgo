// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

// 2 parameters - arrays - no size limit
// return true or false

const containsCommonItem = (arr1, arr2) => {
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				return true;
			}
		}
	}
	return false;
};
console.log(containsCommonItem(array1, array2)); // Time Complexity O(n^2)
const containsCommonItem2 = (arr1, arr2) => {
	let obj = {};
	for (let i = 0; i < arr1.length; i++) {
		if (!obj[arr1[i]]) {
			const item = arr1[i];
			obj[item] = true;
		}
	}
	for (let j = 0; j < arr2.length; j++) {
		if (obj[arr2[j]]) {
			return true;
		}
	}
	return false;
};

console.log(containsCommonItem2(array1, array2)); // Time Complexity O(a +b)

const containsCommonItem3 = (arr1, arr2) => {
	return arr1.some((item) => arr2.includes(item));
};

console.log(containsCommonItem3(array1, array2));
