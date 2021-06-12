function gridTraveler(n,m, memo={}) {
    const key = n +","+ m;
    if( key in memo) return memo[key];
    if(n==0 || m==0) return 0;
    if(n==1 && m==1) return 1;

    memo[key] = gridTraveler(n-1,m, memo) + gridTraveler(n,m-1, memo);
    return memo[key];
}

console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));
console.log(gridTraveler(18,18));