// Given an array and targetSum, determine, if targetSum can be made with array of numbers given(Non Negative).

// Time Complexity: O(n^m)
// Space Complexity: O(m)

const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers) === true) {
            return true;
        }
    }

    return false;
}

console.log(canSum(10000, [3, 4]))
// console.log(canSum(10, [3, 4]))


// We can memoize this 

// Time complexity: O(m * n)
// Space Complexity: O(m)
const memoizeCanSum = (targetSum, numbers, hash={}) => {
    if (targetSum in hash) return hash[targetSum];

    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, hash) === true) {
            hash[targetSum] = true;
            return true;
        }
    }

    hash[targetSum] = false;
    return false;
}


// console.log(memoizeCanSum(7, [9, 10]))
console.log(memoizeCanSum(3000, [3, 4]))