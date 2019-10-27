// Write a method that doubles each element in an array.

function doubler(arr) {
    return arr.map( (el) => {
        return el*2;
    })
}

// Write a method that returns the factors of a number in ascending order.
// Factors are numbers that divide evenly into a number.

function factors(num) {
    let factors = [];
    for(let i = 1; i <= num; i ++){
        if (num % i === 0){
            factors.push(i);
        }
    }
    return factors;
}

// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements.

function median(arr) {
        let sortedArr = arr.sort();         // sorts array
        if(sortedArr.length % 2 === 0){
            return (sortedArr[sortedArr.length/2] + sortedArr[sortedArr.length/2-1]) / 2;
        } else {
            return Math.ceil(sortedArr.length/2);
        }
}

// Write a method that returns the product of all numbers in an array.

function product(arr) {
    let product = 1;
    if(arr.length === 0){
        product = 0;
    } else {
        arr.forEach( (el) => product *= el);
    }
    return product;
}

// Write a method that returns the largest number in an array.

function largest(arr) {
    let largest = arr[0];
    arr.forEach( (el) => {
        if (el > largest){
            largest = el;
        }
    })
    return largest;
}

// Write a method called 'and' that takes in two arguments. It should check
// return whether or not both arguments have a truthy value.

function and(arg1, arg2) {
    if (arg1 && arg2){
        return true;
    } else {
        return false;
    }
}

// Write a function that takes in an array and a target. Return whether or
// not the array contains the target

function includes(arr, target) {
    let contains = false;
    arr.forEach( el => {
        if (el === target){
            contains = true;;
        }
    })
    return contains;
}

// Write a function that removes all the vowels from a string.

function disemvowel(str) {
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        if (str[i].toLowerCase() !== 'a' && str[i].toLowerCase() !== 'e' && str[i].toLowerCase() !== 'i' && str[i].toLowerCase() !== 'o' && str[i].toLowerCase() !== 'u'){
            newStr += str[i];
        }
    }
    return newStr;
}

module.exports = { doubler, factors, median, product, largest, and, includes, disemvowel };
