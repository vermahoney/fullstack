class solution{
    isIsomorphic(s,t){
        // two maps for one to one mapping 
        let mapST = new Map();
        let mapTs = new Map();

        // chefck character index by index 
        for(let i=0; i<s.length; i++){
            let charS = s[i];
            let charT = t[i];

            // check s-.t mapping 
            if(mapST.has(charS)){
                if(mapST.get(charS) !== charT){
                    return false;
                }
            }
            else{
                mapST.set(charS, charT);

            }

            //check t->s mapping 
            if(mapTs.has(charT)){
                if(mapTs.get(charT) !==charS){
                    return false;
                }
            }
            else{
                mapST.set(charT, charS);
            }
        }

        return true;


    }
}

// driver code 
const sol = new solution();

const s="egg";

const t="add";

const answer = sol.isIsomorphic(s, t);

console.log(answer);
