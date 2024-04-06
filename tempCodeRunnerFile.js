function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// Test examples
let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t); // Output: 100
});

t = Date.now();
sleep(200).then(() => {
    console.log(Date.now() - t); // Output: 200
});
