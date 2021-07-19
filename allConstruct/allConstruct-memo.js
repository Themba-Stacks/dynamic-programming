function allConstruct(target, wordBank, memo={}) {
    if(target in memo) return memo[target];
    if(target === '') return [[]];

    let wordArray = [];

    for (let word of wordBank) {
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            const wordResultArray = allConstruct(suffix, wordBank,memo);
            const targetWays = wordResultArray.map(way => [word, ...way])
            wordArray.push(...targetWays);
        }
    }

    memo[target] = wordArray;
    return wordArray;
}



console.log(allConstruct("abcdef", ["ab","abc", "cd", "def", "abcd"])); // 1
console.log(allConstruct("skateboard", ["bo", "rd" ,"ate", "t", "ska", "sk", "boar"]));//0
console.log(allConstruct("enterapotentpot", ['a','p','ent','enter','ot','o','t'])); //4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"])); //0
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2