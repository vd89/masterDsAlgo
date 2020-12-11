// Has Pair with sum

const hasPairWithSum = (arr, sum) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[2] === sum) {
        return true;
      }
    }
  }
  return false;
};

// Better Way

const hasPairWithSum2 = (arr, sum) => {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
};

const arr1 = [6, 4, 7, 8, 1, 2, 3];
const sum1 = 9;
console.log(hasPairWithSum(arr1, sum1));
console.log(hasPairWithSum2(arr1, sum1));
