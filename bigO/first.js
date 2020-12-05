const { performance } = require('perf_hooks');
const newArray = ['nemo', 'james', 'joe'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(1000).fill('nemo');
// Find nemo for array

const findNemo = (arr) => {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
      console.log('Found Nemo');
    }
  }
  let t1 = performance.now();
  console.log('Time to find Nemo ' + (t1 - t0) + ' ms');
};

findNemo(large); // O(n) ----> linear time

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
funChallenge(); // O(3+4n)

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

anotherFunChallenge(); // O(4+5n)
