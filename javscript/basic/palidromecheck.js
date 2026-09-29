class solution{
    ispalindrome(str){
        // two pointer 
        let left =0;
        let right =str.length-1;

        // comapre from botht side

        while(left<right){
            // if character are differnt 
            if(str[left]!== str[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}

// driver code 
const sol = new solution();

const str ="madam";

const answer = sol.ispalindrome(str);

if(answer){
    console.log("palindrome");

}
else{
    console.log("not aplindrome ")
}