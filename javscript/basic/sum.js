// class solution{
//      sumofnumber(N){
//     let sum=0;
//     for(let i=1; i<=N; i++){
//         sum+=i;

//     }
//     return sum;
// }
// }

// // driver code
// const sol = new solution();

// const N = 5;

// const sum=sol.sumofnumber(N);
// console.log(sum);



// recursive approach 


class solution{
    printsum(n){

       if(n==1) return 1;
        return n+this.printsum(n-1);
    }
}
// driver code 


const sol= new solution();

const n=5;

const sum=sol.printsum(n);


console.log(sum);