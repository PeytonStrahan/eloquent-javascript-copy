////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step=1) {
  // create an empty array to hold the output
  const output = [];

  if (start === end) { // check if start and end are the same value
    // return the empty output array if so
    return output;
  }

  if (step > 0) { // check if step is positive
    for (let i = start; i <= end; i += step) { // loop through each number by counting up
      // push the current number onto the output array
      output.push(i);
    }
  } else if (step < 0) { // check if step is negative
    for (let i = start; i >= end; i += step) { // loop through each number by counting down
      // push the current number onto the output array
      output.push(i);
    }
  }

  // return the output array
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(numbers) {
  // check if the numbers array is empty
  if (numbers.length === 0) {
    // return 0 if so
    return 0;
  }
  // return the result of using .reduce to add together all of the numbers in the numbers array into one number
  return numbers.reduce((acc, current) => acc + current);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  // return the result of using .reduce to unshift each element in the array onto the front of the acc array seeded to be an empty array from the beggining
  return array.reduce((acc, current) => {
    acc.unshift(current);
    return acc;
  }, []);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // create a for loop that loop backwards through the input array
  for (let i = array.length - 1; i >= 0; i--) {
    // push the result of splicing off the current element in the input array to the back of the input array
    array.push(...array.splice(i, 1));
  }
  // return the input array (optional)
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // base
  if (array.length === 0) { // check if the input array is empty
    return null; // return null if so
  }

  // recursion
    // return an object
  return {
    value: array[0], // set the current value key to the first item in the current input array
    rest: arrayToList(array.slice(1)) // set the current rest key to a recursive call of ArrayToList with a copy of the input array that had the first value sliced off to keep the function moving
  }
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array=[]) {
  // push the value from the value key from the current list object onto the input array
  array.push(list.value);

  // base
  if (list.rest === null) { // check if the rest key of the current list object points to a value of null
    return array; // return the input array if so
  }

  // recursion
    // return the result of recursively calling listToArray with list.rest and the input array as the parameters to keep the function moving
  return listToArray(list.rest, array);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  // return an object
  return {
    value: element, // set the value key to the input element
    rest: list // set the rest key to the input list
  };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, index) {
  // base
  if (index < 0) { // check if the current index is negative
    return; // return undefined if so
  }
  if (index === 0) { // check if the current index is equal to 0
    return list.value; // return the value of the value key from the current list object if so
  }

  // recursion
    // return the result of recursively calling nth with list.rest and index-1 as the parameters to keep the function moving
  return nth(list.rest, index-1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val1, val2) {
  if (Array.isArray(val1) && Array.isArray(val2)) { // check if both input values are arrays
    if (val1.length !== val2.length) { // if so, check if both arrays do NOT have the same length
      // return false if so
      return false;
    }
    // loop through val1
    for (let i = 0; i < val1.length; i++) {
      if (!deepEqual(val1[i], val2[i])) { // check if recursively calling deepEqual with the current values from both arrays gives a falsey value
        // return false if so
        return false;
      }
    }
    // return true if no falsey values were given
    return true;
  } else if ((typeof val1 === "object" && val1 !== null) && (typeof val2 === "object" && val2 !== null)) { // otherwise, check if both input values are objects and not null
    if (Object.keys(val1).length !== Object.keys(val2).length) { // if so, check if both objects do NOT have the same length
      // return false if so
      return false;
    }
    // loop through val1
    for (let key in val1) {
      if (!deepEqual(val1[key], val2[key])) { // check if recursively calling deepEqual with the current values from both objects gives a falsey value
        // return false if so
        return false;
      }
    }
    // return true if no falsey values were given
    return true;
  } else {
    // otherwise, return the result of comparing both input variables using the deeply equals operator (===)
    return val1 === val2;
  }
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};