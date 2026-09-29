class solution{
    pattern1(N){
        for(let i=0; i<N; i++){
            let row="";
            for(let j=0; j<N; j++){
                row+="*";
            }
            console.log(row);
        }
        
    }
}

// drvier code 
const sol =new solution();

const N=5;
sol.pattern1(N);