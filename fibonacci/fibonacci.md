# Fibonacci

Write a function that takes in a number as an argument.
The function should return the n-th number of the fibonacci sequence.

## How it works

The first and second number of the sequence is 1.
To generate the next number of the sequence, we sum the previous two.

## Memoization

Create a recursive function that uses a hash-map (dictionary). We pass to that dictionary, the result of each function call.
Things to note we pass by reference our hash-map, this allows us to use the same dictionary through out the whole chain of the call stack and thereby reference values that have already been calculated due to the nature of the binary tree. By using memoization we reduce the time and space complexity from O(2^n) to O(n).
