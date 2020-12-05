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

findNemo(large);
