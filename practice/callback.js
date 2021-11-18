console.log("***********First Example***********")


// A function
function fn() {
    console.log('Just a function');
  }
  
  // A function that takes another function as an argument
  function higherOrderFunction(callback) {
    // When you call a function that is passed as an argument, it is referred to as a callback
    callback();
  }
  
  // Passing a function
  higherOrderFunction(fn);


console.log("***********Second Example***********");


function first() {
    console.log("callback ");

}

function second(callback) {
    callback();
    console.log("First call");
}

second(first);

console.log("***********Third Example***********");


// Define three functions
function firstCall() {
    console.log(1)
  }
  
  function secondCall(callback) {
    setTimeout(() => {
      console.log(2);
  
      // Execute the callback function
      callback();
    }, 0)
  }
  
  function thirdCall() {
    console.log(3)
  }

  firstCall();
 secondCall(thirdCall);
 