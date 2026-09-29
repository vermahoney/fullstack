class solution{
    largestoddnumber(s){
        let index= -1;
        // right se odd dight find karo
        for (let i=s.length-1; i>=0; i--){
            let digit =Number(s[i]);

            if(digit %2!==0){
                index = i ;
                break;
            }
        }

        // if no digit is find 
        if(index===-1){
            return "";

        }

        // start se odd tk ki string 

        let answer = s.substring(0, index+1);
        // leading zeros ko remove karo 
        answer = answer.replace(/^0+/, "");

        return answer;
    }
}

const sol= new solution();

const s="0032579"

const answer = sol.largestoddnumber(s);

console.log(answer);
