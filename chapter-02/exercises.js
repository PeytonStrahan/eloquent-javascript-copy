
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(number) {
  // create a new empty hashtags string to hold the hashtags
  var hashtags = "";

  // create a loop using the input number
  for (let i = 0; i < number; i++) {
    // concatenate a hashtag onto the hashtags string
    hashtags += "#";
    // log the hashtags string
    console.log(hashtags);
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  // create a loop that increments from the start value to the end value
  for (let i = start; i <= end; i++) {
    // determine if the current value is divisible by both 3 & 5
    if (i % 3 === 0 && i % 5 === 0) {
      // log "fizzbuzz" if so
      console.log("fizzbuzz");
    }
    // otherwise, determine if the current value is divisible by 3
    else if (i % 3 === 0) {
      // log "fizz" if so
      console.log("fizz");
    }
    // otherwise, determine if the current value is divisible by 5
    else if (i % 5 === 0) {
      // log "buzz" if so
      console.log("buzz");
    } else {
      // otherwise, log the current value
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
  // create a chessboard variable assign to an empty string (this will be filled out and returned)
  var chessboard = "";

  // create a placer variable assigned to " " (this will switch between " " and "#")
  var placer = " ";

  // create a loop that increments from 0 to (but not including) x
  for (let i = 0; i < x; i++) {
    // create an inner loop that increments from 0 to x
    for (let j = 0; j < x; j++) {
      // concatenate the placer string onto the chessboard string
      chessboard += placer;

      // determine if the inner loop's current cycle is NOT the last one OR if x is an odd number (you want each row on an even-numbered x by x board to begin with the same symbol that the last row ended on)
      if (j !== x - 1 || x % 2 === 1) {
        // if so, determine if the placer string is currently " "
        if (placer === " ") {
          // assign placer to "#" if so
          placer = "#";
        } else {
          // otherwise, assign placer to " "
          placer = " ";
        }
      }
    }

    // concatenate "\n" onto the chessboard string
    chessboard += "\n";
  }

  // log the chessboard string
  console.log(chessboard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}