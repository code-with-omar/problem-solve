function addDigits(num) {
    if (num < 10) {
        return num;
    }
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

// Example usage:
console.log(addDigits(38)); // Output: 2
console.log(addDigits(0));  // Output: 0