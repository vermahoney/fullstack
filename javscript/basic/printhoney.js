class solution{
    printname( count, N){
        
        // base condition
        if(count===0) return;

        console.log(count);

        // recursive  call 
        this.printname(count-1, N);
    }
}

// driver code 
const sol= new solution();

const N=5;


sol.printname( 5,5);
