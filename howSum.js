// Similar to canSum but we have to return any combination.


// Time Complexity:
// m - targetSum
// n - numbers.length
// O(n ^ m * m)
// Space Complexity: O(m)
const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let number of numbers) {
        const remainder = targetSum - number;
        const res = howSum(remainder, numbers)
        if (res !== null) {
            return [...res, number]
        }        
    }

    return null;
}

console.log(howSum(300, [7, 14]));


// Memoized Solution
// Time - O(n * m^2)
// Space - O(m^2)
const memoizeHowSum = (targetSum, numbers, hash = {}) => {
    if (targetSum in hash) return hash[targetSum];

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let number of numbers) {
        const remainder = targetSum - number;
        const res = memoizeHowSum(remainder, numbers, hash)
        if (res !== null) {
            hash[targetSum] =  [...res, number]
            return hash[targetSum]
        }        
    }

    hash[targetSum] = null;
    return null;
}

console.log(memoizeHowSum(300, [7, 14]));