
class solution{
            calfactorial(N){
                let fac=1;
              

              if(N===1) return 1;
              
              return N*this.calfactorial(N-1);
            }
            
}

const sol=new solution();
const N=5;
const factorial=sol.calfactorial(N);
console.log(factorial);