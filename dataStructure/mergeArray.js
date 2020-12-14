//  merge two different array in to one and sort them
// Give array [1,2,3,4,5,'james'] ,['smith','joe',6,9,8,7,'hello']
// [1, 2, 3, 4, 5, 6, 7, 8, 9, "hello", "james", "joe", "smith"];

const array1 = [1, 2, 3, 4, 5, "james"];
const array2 = ["smith", "joe", 6, 9, 8, 7, "hello"];

const mergeArray1 = (arr1, arr2) => [...arr1, ...arr2].sort();

console.log(mergeArray1(array1, array2));
