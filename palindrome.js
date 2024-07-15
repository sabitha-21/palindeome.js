function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

let s = "malayalam";
let ans = isPalindrome(s);

if (ans) {
    document.write("Yes Palindrome "+s);
} else {
    document.write("Not a Palindrome "+s);
}