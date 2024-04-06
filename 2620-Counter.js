// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).



// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.


// Constraints:

// -1000 <= n <= 1000
// 0 <= calls.length <= 1000
// calls[i] === "call"

var createCounter = function(n) {
    let currentValue = n; // Initialize the current value with n
    
    return function() {
        let result = currentValue; // Store the current value
        currentValue++; // Increment the current value for the next call
        return result; // Return the stored current value
    };
};

function counterFunction(n, calls) {
    const counter = createCounter(n);
    const output = [];
    for (let i = 0; i < calls.length; i++) {
        output.push(counter());
    }
    return output;
}

// Test cases
console.log(counterFunction(10, ["call", "call", "call"])); // Output: [10, 11, 12]
console.log(counterFunction(-2, ["call", "call", "call", "call", "call"])); // Output: [-2, -1, 0, 1, 2]


function createCounter(n) {
    // Initialize the counter variable with n
    let counter = n;

    // Define the inner function that will serve as the counter function
    function counterFunction() {
        // Increment the counter and return the updated value
        return counter++;
    }

    // Return the counter function
    return counterFunction;
}


const counter = createCounter(-2);

console.log(counter()); 
console.log(counter()); 
console.log(counter());
console.log(counter());


