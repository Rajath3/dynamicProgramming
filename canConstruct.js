// Given a set of words in array. Return true of false on whether the targetString can be constructed from them

// Time complexity:
// m - length of targetString
// n - length of words array
// We get stack length max of m. Also in worst case each word in list can be individual letters of targetString.
// O(n^m * m)

// Space complexity:
// targetString.slice(word.length) will take m space and we have max m height.
// O(m^2)


const canConstruct = (targetString, words) => {
    if (targetString === '') return true;

    for (let word of words) {
        if (targetString.indexOf(word) === 0) {
            const suffix = targetString.slice(word.length);
            if (canConstruct(suffix, words) === true) {
                return true;
            }
        }
    }

    return false;
}


console.log(canConstruct('beetroot', ['beet', 'root'])); // true
console.log(canConstruct('beetroot', ['beet', 'roo'])); // false
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee'])); // false

// Time Complexity: O(m^2 * n )
// Space Complexity: O(m^2)

const memoizedCanConstruct = (targetString, words, hash = {}) => {
    if (targetString in hash) return hash[targetString];

    if (targetString === '') return true;

    for (let word of words) {
        if (targetString.indexOf(word) === 0) {
            const suffix = targetString.slice(word.length);
            if (memoizedCanConstruct(suffix, words, hash) === true) {
                hash[targetString] = true;
                return true;
            }
        }
    }

    hash[targetString] = false;
    return false;
}

console.log(memoizedCanConstruct('beetroot', ['beet', 'root'])); // true
console.log(memoizedCanConstruct('beetroot', ['beet', 'roo'])); // false
console.log(memoizedCanConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee'])); // false


