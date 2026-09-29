class solution{
    pattern2(N){
        
        for(let i=1; i<=N; i++ ){
            let row="";

            for(let j=1; j<=i; j++){
                row+=i;
            }
            console.log(row);
        }

    }
}

//driver code 

const sol =new solution();
const N=5;
sol.pattern2(N);