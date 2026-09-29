class solution{
    is Anagram(s,t){
        //length differint cnat be anagram 
        if(s.length!==t.length){
            return false;

        }

        let frequency = new Map();

        // count charctwers of s

        for(let char of s ){
            if(frequency.has(char)){
                frequency.set(char , frequency.get(char)+1);

            }
            else{
                frequency.set(char,1);
            }
        }

        // remove character using t

        for(let char of t){
            if(!frequency.has(char)){
                return false;

            }

            frequency.set(char, frequency.get(char)-1);
        }

        // Check whether all frequencies became 0
        for (let [char, count] of frequency) {
            if (count !== 0) {
                return false;
            }
        }

        return true;
    }
    
}



const sol = new solution();

const s ="anagram";

const t ="nagaram";

const answer = sol.isAnagram(s,t);

console.log(answer);