// Time complexity is O(2^n)
// Space complexity is O(n), which is height of recursion tree

const fibonacci = (n) => {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(10))

// This above code will take more time as the input value increases.
// We see a pattern here, where we are repeatedly calculating values in recursion tree
// We can add memoization to this

// Time complexity - O(n)
// Space complexity - O(n)

const memoizeFibonacci = (n, hash={}) => {
    if (n in hash) return hash[n];
    if (n <= 2) return 1;
    hash[n] = memoizeFibonacci(n-1, hash) + memoizeFibonacci(n-2, hash)
    return hash[n]
}

console.log(memoizeFibonacci(50));

// This a

