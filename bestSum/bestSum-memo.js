function bestSum(targetSum, numbers, memo={}) {
    if (targetSum in memo) return memo[targetSum];
    if(targetSum==0) return [];
    if(targetSum<0) return null;

    let shortestCombination = null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);

        if(remainderCombination !== null) {
            const combination = [...remainderCombination, num];

            if(shortestCombination == null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

console.log(bestSum(7,[5, 3, 4, 7])); // [7]
console.log(bestSum(8,[2, 3, 4]));  // [4, 4]
console.log(bestSum(100,[1, 2, 5, 25])); // [25, 25, 25, 25]

// m = target sum
// n = numbers.length

// Brute Force 
// time: O(n^m * m)
// space: O(m^2)

// memoized
// time: O(n * m^2)
// space: O(m^2)