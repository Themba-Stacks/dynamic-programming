function allConstruct(target, wordBank, memo={}) {
    if(target in memo) return memo[target];
    if (target  === '') return 1;

    let totalCount = 0;
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const prefix = target.slice(word.length);
            const numWaysCont = allConstruct(prefix, wordBank, memo)
            totalCount += numWaysCont
        }
    }

    memo[target] = totalCount;
    return totalCount;
}

console.log(allConstruct("abcdef", ["ab","abc", "cd", "def", "abcd"])); // 1
console.log(allConstruct("skateboard", ["bo", "rd" ,"ate", "t", "ska", "sk", "boar"]));//0
console.log(allConstruct("enterapotentpot", ['a','p','ent','enter','ot','o','t'])); //4
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"])); //0
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2