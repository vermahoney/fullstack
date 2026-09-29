

class solution{
    issorted(arr){
        let n = arr.length;
        
        for(let i=1; i<=n; i++){
            if(arr[i]>arr[i-1]){
                return true;
            }
            return false;

        }
        

    }
}
const sol=new solution();

const arr=[1,2,3,5,9];

const ans=sol.issorted(arr);

if(ans){
    console.log("array is sorted");
}
else{
    console.log("array is not sorted");
}

