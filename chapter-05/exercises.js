// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  // return the result of using .concat with .reduce to combine all of the nested arrays from the input array into a new single array that isn't nested
  return arrays.reduce((acc, current) => {
    return acc.concat(current); // use .concat to combine each current array into the acc array
  });
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  while(test(value)){ // run the while loop as long as the current value passes the test function
    body(value); // run the body function using the current value;
    value = update(value); // update the value variable by assigning it to a call of the update function that uses value;
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  /* LOOP VERSION */

  // for (let ele of array) { // loop through each element in the input array
  //   if (!test(ele)) { // check if the current element fails the input test function and returns a falsey value
  //     // return false if so
  //     return false;
  //   }
  // }

  // // return true if all tests pass
  // return true;



  /* SOME METHOD VERSION */

  // Use .some to loop through the array. If any use of the test function returns false, then it will be flipped to true, causing the .some function to end and return true, which will be finally flipped and returned as false.
  // If all uses of the test function return values of true that get flipped into false, then the .some function will return false, which will finally be flipped and returned as true.
  return !array.some(ele => !test(ele));
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  // Using countBy and characterScript, create a list of objects, each one containing the writing direction of a script and the amount of times a character from that script has appeared in the input text string.
  let output = countBy(text, (chara) => {
    let script = characterScript(chara.codePointAt(0)); // get whole character code from the current character
    if (script !== null){ // check if the returned script is not null
      return script.direction; // return the writing direction of the script if so
    }
    return "no script"; // return a string of "no script" if so
  }).filter(({name}) => name !== "no script"); // remove any objects from the array that has the name of "no script" (due to how countBy works, I decided/had to store each script's writing direction under a key called "name")

  return output.reduce((acc, current) => { // use .reduce to get the object from the output array that has the count property with the highest value
    return current.count > acc.count ? current : acc;
  }).name; // return the name property (writing direction) of the object produced by using .reduce
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};