class solution{
    countdistinct(arr){
        const distinctvalue= new Set();

        for(const value of arr){
            distinctvalue.add(value);

        }

        return distinctvalue.size;

    }
}


const sol=new solution();
const arr = [10, 20, 20, 10, 30, 10];

const ans=sol.countdistinct(arr);
console.log(ans);
