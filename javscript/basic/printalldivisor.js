function primenumber(n){
    let cnt =0;
    for(let i=1; i<n; i++){
        if(n%i===0){
            cnt++;
        }

    }
    return cnt===2;

    
}

let n=36;

let divisor= primenumber(n);

console.log(divisor);   
