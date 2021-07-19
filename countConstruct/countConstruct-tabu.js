function countConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for(let i = 0; i <= target.length; i++){
        if(table[i] > 0){
            for(let word of wordBank) {
                if(target.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i];
                }
            }
        }
    }
    return table[target.length]
};

console.log(countConstruct("abcdef", ["ab","abc", "cd", "def", "abcd"])); // true 1
console.log(countConstruct("purple", ["purp","p", "le", "purple"])); // true 2
console.log(countConstruct("skateboard", ["bo", "rd" ,"ate", "t", "ska", "sk", "boar"]));//false 0
console.log(countConstruct("enterapotentpot", ['a','p','ent','enter','ot','o','t'])); //true 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"])); //false 0