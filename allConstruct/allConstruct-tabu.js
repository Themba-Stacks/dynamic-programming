function countConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];

    for(let i = 0; i <= target.length; i++){
        if(table[i].length > 0){
            for(let word of wordBank) {
                if(target.slice(i, i + word.length) === word) {
                    const newCombination = table[i].map(subArray => [...subArray, word]);
                    table[i + word.length].push(...newCombination);
                }
            }
        }
    }
    return table[target.length]
};

console.log(countConstruct("abcdef", ["ab","abc", "cd", "def", "abcd","ef", "c"])); // true 1
console.log(countConstruct("purple", ["purp","p", "le", "purple"])); // true 2
console.log(countConstruct("skateboard", ["bo", "rd" ,"ate", "t", "ska", "sk", "boar"]));//false 0
console.log(countConstruct("enterapotentpot", ['a','p','ent','enter','ot','o','t'])); //true 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"])); //false 0