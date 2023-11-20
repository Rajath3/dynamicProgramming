// Same as howSum, but we have to get the shortest combination of result.
// Time Complexity: O(n^m * m)
// Space Complexity: O(m^2)
const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestLen = null;

    for (let number of numbers) {
        const remainder = targetSum - number;
        const res = bestSum(remainder, numbers);
        if (res !== null) {
            const combination =  [...res, number];
            if (shortestLen === null || combination.length < shortestLen.length) {
                shortestLen = combination;
            }
        }
    }

    return shortestLen;
}

console.log(bestSum(7, [3, 4, 7]))

// Time complexity : O(n * m^2)
// Space Complexity: O(m^2)
const memoizedBestSum = (targetSum, numbers, hash = {}) => {
    if (targetSum in hash) return hash[targetSum];

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestLen = null;

    for (let number of numbers) {
        const remainder = targetSum - number;
        const res = memoizedBestSum(remainder, numbers, hash);
        if (res !== null) {
            const combination =  [...res, number];
            if (shortestLen === null || combination.length < shortestLen.length) {
                shortestLen = combination;
            }
        }
    }
    hash[targetSum] = shortestLen;
    return shortestLen;
}

console.log(memoizedBestSum(300, [7, 14]));