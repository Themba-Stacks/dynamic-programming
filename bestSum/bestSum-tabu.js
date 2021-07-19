function bestSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetSum; i++){
        if(table[i] !== null){
            for(let num of numbers){
                let combination = [...table[i], num];
                if(!table[i + num] || combination.length < table[i + num].length){
                    table[i + num] = [...table[i], num];
                }
            }
        }
    }
    
    
    return table[targetSum];
}

console.log(bestSum(7, [5,3,4,7])); // [ 7 ]
console.log(bestSum(7,[2,4])); // null
console.log(bestSum(300,[7,14])); // null
console.log(bestSum(8,[2,3,5])); // [ 3, 5 ]
console.log(bestSum(100,[25,1,2,5])); // [ 25, 25, 25, 25 ]