// Given a set of words in array. Return number of possibility for targetString can be constructed from given words.

// Time complexity: O(n^m * m)
// Space complexity: O(m^2)
const countConstruct = (targetString, words) => {
    if (targetString === '') return 1;

    let totalCount = 0;

    for (let word of words) {
        if (targetString.indexOf(word) === 0) {
            const suffix = targetString.slice(word.length);
            const num = countConstruct(suffix, words)
            totalCount += num;
        }
    }

    return totalCount;
}

console.log(countConstruct('beetroot', ['beet', 'root'])); // 1
console.log(countConstruct('beetroot', ['beet', 'roo'])); // 0
console.log(countConstruct('beetroot', ['beet', 'root', 'bee', 't'])) // 2
// console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee'])); // 0


// Time complexity: O(n*m^2)
// Space complexity: O(m^2)
const memoizedCountConstruct = (targetString, words, hash = {}) => {
    if (targetString in hash) return hash[targetString];
    if (targetString === '') return 1;

    let totalCount = 0;

    for (let word of words) {
        if (targetString.indexOf(word) === 0) {
            const suffix = targetString.slice(word.length);
            const num = memoizedCountConstruct(suffix, words, hash)
            totalCount += num;
        }
    }

    hash[targetString] = totalCount;
    return totalCount;
}


console.log(memoizedCountConstruct('beetroot', ['beet', 'root'])); // 1
console.log(memoizedCountConstruct('beetroot', ['beet', 'roo'])); // 0
console.log(memoizedCountConstruct('beetroot', ['beet', 'root', 'bee', 't'])) // 2
console.log(memoizedCountConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee'])); // 0