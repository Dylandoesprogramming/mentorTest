//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
    reverseIt: function(newStr) {
        let revStr;
        revStr = newStr.split('').reverse().join('');
        return revStr;
    },

    //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
    //reverse it

    removeDups: function(arr) {
        arr = arr.sort();
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != arr[i + 1]) {
                newArr.push(arr[i])
            }
        }
    },

    //uncomment and finish the removeDups function. It will take in one parameter which is an Array
    //remove all duplicates

    titleIt: function(str) {
        let strArr = str.split(' ');
        let newStr = "";
        for (let i = 0; i < strArr.length; i++) {
            var firstLet = strArr[i].slice(0, 1);
            strArr[i] = strArr[i].slice(1, strArr[i].length);
            newStr += firstLet.toUpperCase() + strArr[i] + " ";
        }
        return newStr.trim();
    },

    //uncomment and finish the titleIt function. It will take in one parameter which is a String and
    //capitalize the first letter of each word

    vowelCounter: function(str) {
        let strArr = str.toLowerCase().split('');
        let vowelCount = 0;
        for (var i = 0; i < strArr.length; i++) {
            if (str[i] == 'a') {
                vowelCount++;
            }
            if (str[i] == 'e') {
                vowelCount++;
            }
            if (str[i] == 'i') {
                vowelCount++;
            }
            if (str[i] == 'o') {
                vowelCount++;
            }
            if (str[i] == 'u') {
                vowelCount++;
            }
        }
    },

    //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
    //return the number of vowels in the string

    isPrime: function(num) {
        var primeCount = 0;
        for (var i = 1; i < 10; i++) {
            if (num % i === 0) {
                primeCount++;
            }

            if (primeCount > 2) {
                return false;
            }
        }
        return true;
    },

    //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
    //return true if it is prime and false if it is not

    //what is the value of foo?
    //var foo = 10 + '20';
    //uncomment the foo property and give your answer as its value

    foo: '1020',

    //what is the outcome of the two console.logs below?
    //   var foo = "Hello";
    // (function() {
    //   var bar = " World";
    //   console.log(foo + bar);
    // })();
    // console.log(foo + bar);
    // uncomment the log1 and log2 properties and give your answers as their values

    log1: "Hello World",
    log2: undefined,
}