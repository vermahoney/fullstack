class Solution{
    longestCommonPrefix(str){

        // First string ko initial prefix maan lo
        let prefix=str[0];

        // Baaki strings ke saath compare karo
        for(let i=1; i<str.length; i++){
            let word=str[i];

            let j=0; 
            // Jab tak characters same hain
            while(j<prefix.length && j<word.length  &&  prefix[j]===word[j]){
                j++;
               
            }
 // Common part ko prefix bana do
            prefix=prefix.substring(0, j);

             // Agar kuch common nahi mila
            if(prefix===""){
                return "";
            }
        }
        return prefix;
    }
}

// Driver Code

const sol = new Solution();

const str = ["lady", "lazy"];

const answer = sol.longestCommonPrefix(str);

console.log(answer);