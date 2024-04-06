function longestSubstringLength(s) {
    let n = s.length;
    if (n === 0) return 0;

    let charIndex = {};
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
        if (s[end] in charIndex && charIndex[s[end]] >= start) {
            start = charIndex[s[end]] + 1;
        }

        charIndex[s[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
let s = "abcfabcbb";
console.log(longestSubstringLength(s)); // Output should be 3
