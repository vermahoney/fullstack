
class solution{
    reversestr(str){
        let left = 0;
        let right = str.length - 1;

        while(left<right){
            [str[left], str[right]]=[str[right], str[left]];
            left++;
            right--;
            
        }
        return str;
    }
}
const str =['h', 'o', 'n', 'e', 'y'];
const sol = new solution();

const reversed= sol.reversestr(str);

console.log(reversed);



