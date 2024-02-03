function hasTargetSum(array, target) {
  for (let i=0; i < array.length; i++) {
    let number = array[i];
    for (let j=i+1; j < array.length; j++) {
      let newNumber = array[j];
      if (number + newNumber === target) {
        return true
      };
    };
  } return false;
};

/* 
  O[n^2]
*/

/* 
  take the first number of the array
    add it to second number of array
    check if matches target
    add it to third number of array
    etc to end of array
  take second number of array
    add it to third number of array
    check if it matches target
    etc to end of array
  etc to end of array
*/

/*
  I want to take each number of the array, and add it to each other number, checking each sum against the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([128, 47, 315, 48, 119, 74], 202));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([128, 47, 315, 48, 119, 74], 1000));

  console.log("");

  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
