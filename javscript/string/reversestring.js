class solution {
    reverseStr(s, k){
        // everry 2k characters, reverse first k character 
        for(let i=0; i<s.length; i+=2*k){
            let left =i;

            // dont let right go outside the string 

            let right =Math.min(i +k -1, s.length -1);

            //reverse foist k character 
            while(left <right){
                [s[left], s[right]] = [s[right], s[left]];

                left++;
                right--;

            }
        }
        return s;
    }
}


// drvieer code 
const sol= new solution();

const s =["a", "b", "c", "d", "e", "f", "g" ];

const k=2;

const answer = sol.reverseStr(s,k);

console.log(answer);