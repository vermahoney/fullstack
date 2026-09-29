class Solution{
    rotateString(s, goal){
        // roateaion se kength change nahi hoti
        if(s.length !== goal.length){
            return false;

        }

        // all rotation exist inside  s+s 
        let combined = s+s;
        // check if gaol is a rotation of s 
        return combined.includes(goal);
        
    }
}



// driver code 
const sol = new solution();

const s="abcde";
const goal ="abcde";

const answer = sol.rotateString(s, goal);

console.log(answer);