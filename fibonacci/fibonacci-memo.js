function fib(n, dup={}) {
    if(n in dup) return dup[n];
    if(n <= 2) return 1;
    dup[n] = fib(n-1, dup) + fib(n-2, dup);
    return dup[n];
}

console.log(fib(1476));
