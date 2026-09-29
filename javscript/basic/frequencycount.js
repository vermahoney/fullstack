// 

class Solution {

    sumHighestAndLowestFrequency(arr) {

        // Step 1: Count frequency
        let frequency = new Map();

        for (let num of arr) {

            if (!frequency.has(num)) {
                frequency.set(num, 1);
            } 
            else {
                frequency.set(num, frequency.get(num) + 1);
            }
        }


        // Step 2: Find highest and lowest frequency
        let highest = 0;
        let lowest = Infinity;

        for (let [num, count] of frequency) {

            if (count > highest) {
                highest = count;
            }

            if (count < lowest) {
                lowest = count;
            }
        }


        // Step 3: Return their sum
        return highest + lowest;
    }
}


// Driver Code

const sol = new Solution();

const arr = [1, 2, 2, 3, 3, 3, 4];

const answer = sol.sumHighestAndLowestFrequency(arr);

console.log(answer);