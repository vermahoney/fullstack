class solution{
    reversearray(arr){
        const n = arr.length;

        const ans = new Array(n);

        for(let i=0; i<n; i++){
            ans[i]=arr[n-i-1];
        }
        return ans;
    }
}

// driver code 
const obj = new solution();
// input array
const arr=[1,2,4,5,6];
// call the function 
const ans=obj.reversearray(arr);
// print the result 

console.log("reveersearray:", ans);

