class solution {
    pattern3(N){
        for(let i=1; i<=N; i++){
            let row = "";
            for(let j=N; j>i; j--){
                row+=(N-j+1) + "";
            }
            console.log(row);
        }
    }
}

// driver code 
const sol =new solution();
const N=5;
sol.pattern3(N);
