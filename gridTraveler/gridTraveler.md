# Grid Traveler

Say that you are a traveler on a 2D grid. You begin in the top-left corner
and your goal is to travel to the bottom-right corner. you may only move down or right.

## How it works

The key here is understanding all the base case and then building the recursive function. we can start by looking at the simplest of grid. that is a one by one and that would return one as you would only need to move once to to fulfill the requirements. from there it is a matter of tracing the path by building the recursive function that would reach the base case. once the funtion is build we can use memoization to make it more efficient by looking for repeating patterns in the binary tree and store those values to be used again when that sub tree is encountered.

