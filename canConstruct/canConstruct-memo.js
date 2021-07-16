function allConstruct(target, wordBank, memo={}) {
    if (target in memo ) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if(target.indexOf(word) === 0){
            const prefix = target.slice(word.length);
            if(allConstruct(prefix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    
    memo[target] = false;
    return false;
};

console.log(allConstruct("abcdef", ["ab","abc", "cd", "def", "abcd"])); // true
console.log(allConstruct("skateboard", ["bo", "rd" ,"ate", "t", "ska", "sk", "boar"]));//false
console.log(allConstruct("enterapotentpot", ['a','p','ent','enter','ot','o','t'])); //true
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e","ee","eee","eeee","eeeee","eeeeee"])); //false