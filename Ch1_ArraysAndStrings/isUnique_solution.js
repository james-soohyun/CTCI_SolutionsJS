// 1.1 Is Unique
// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

    var trueStr="abcde";
    var falseStr="aabccdeee";

    // Solution that implements a hash table (object) to solve
    function isUnique_obj(str){
        var charObj={};
        for (let i=0; i<str.length; i++){
            if (charObj[str[i]]){
                return false;
            } else {
                charObj[str[i]]=true;
            }
        }
        return true;
    }
    // Test hash table solution
    console.log(`True string ${trueStr} evalutes to ${isUnique_obj(trueStr)}`);
    console.log(`False string ${falseStr} evalutes to ${isUnique_obj(falseStr)}`);


    // Solution that doesn't use any other data structures to solve
    function isUnique_noObj(str){
        for (let i=0; i<str.length; i++){
            for (let j=i+1; j<str.length; j++){
                if (str[i]==str[j]){
                    return false;
                }
            }
        }
        return true;
    }
    // Test no extra data structures solution
    console.log(`True string ${trueStr} evalutes to ${isUnique_noObj(trueStr)}`);
    console.log(`False string ${falseStr} evalutes to ${isUnique_noObj(falseStr)}`);

// Hint #44: Try a hash table
// Hint #117: Could a bit vector be useful?
// Hint #132: Can you solve in O(N log N) time? What might a solution look like?