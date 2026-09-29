// function reversedigit(N){
//     let revnum=0;
//     while(N>0){
//        let lastdigit=N%10;

//        revnum=revnum*10+lastdigit;

//         N= Math.floor(N/ 10);
//     }
//     return reversedigit;
// }


// // driver code
// let N=12345678;

// let reversed= reversedigit(N);

// console.log(reversed);

function reversedigit(N) { 
    let revnum = 0; 
    let dup=N;

    while (N > 0) { 
        let lastdigit = N % 10; 

        revnum = revnum * 10 + lastdigit; 

        N = Math.floor(N / 10); 
    } 

    return revnum==dup; 
} 

// Driver code
let N = 33333; 

let reversed = reversedigit(N); 

console.log(reversed);