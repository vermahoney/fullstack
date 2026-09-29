class solution{
    reversewords(s){
        // sentence k words mein covert karo
        let words = s.split(" ");

        // har word ko reverse karo 

        for(let i=0; i<words.length; i++){
            // word ko character array mein covert karo 

            let word =words[i].split("");

            let left = 0;
            let right = word.length-1;

            // two pointer 
            while(left <right){
                word[[left], word[right]]=[word[right], word[left]];


                left++;
                right--;

            }

            // reverse word ko waps string baano
            word[i]=word.join("");

        }

         // words kospsce ke sath join karo 
        return words.join("");
    }
}

const sol = new solution();

const s = 'let take leetcode contest';

const answer = sol.reversewords(s);

console.log(answer);

