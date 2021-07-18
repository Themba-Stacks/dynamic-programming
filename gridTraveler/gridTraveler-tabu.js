function gridTraveler(m,n) {
    const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0))

    table[1][1] = 1;
// console.log(table);
    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            let current = table[i][j];
            if(j + 1 <= n) table[i][j + 1] += current;
            if(i + 1 <= m) table[i + 1][j] += current;
        }
    }
    // console.log(table);
    return table[m][n];
}

console.log(gridTraveler(3,2)); //3
console.log(gridTraveler(3,3)); //6
console.log(gridTraveler(18,18)) //23333606220
console.log(gridTraveler(50,50)) // 2.5477612258980867e+28