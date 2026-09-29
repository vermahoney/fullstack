class solution{
    secondlargest(nums){
        let largest = -Infinity;
        let secondlargest= -Infinity;

        for(let num of nums){
            // new largest found 
            if(num>largest){
                secondlargest =largest;
                largest = num;

            }

            else if(num>secondlargest &&  num<largest){
                secondlargest = num;

            }
        }
   //no second distinct largest element
        if(secondlargest === -Infinity){
            return -1;

        }

        return secondlargest;
    }
}

const sol = new solution();

const num = [7,7,2,2,10,10,10];

const answer = sol.secondlargest(num);

console.log(answer);
