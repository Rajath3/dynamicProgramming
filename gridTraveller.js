// Travel a given grid of size m , n. 
// Allowed moves - Down and right


// Time complexity - O(2^(n + m))
// Space complexity - O(m + n)
const gridTraveller = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
}

console.log(gridTraveller(3,3))

// The above code is similar to fibonacci, but slightly different.
// As we supply larger grid size to the code. The time to calculate the output
// increases. So, we need to have memoization in place.


// Time complexity - O(m * n)
// Space complexity - O(m + n)
const memoizedGridTraveller = (m , n, hash={}) => {
    let key = m + ',' + n;
    if (key in hash) return hash[key];

    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    hash[key] = memoizedGridTraveller(m - 1, n, hash) + memoizedGridTraveller(m, n - 1, hash);
    return hash[key];
}

console.log(memoizedGridTraveller(18, 18))