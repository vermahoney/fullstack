class Solution {
    // Function to print Pattern 8
    pattern8(N) {
        for (let i = 0; i < N; i++) {
            let row = "";

            // Print leading spaces
            for (let j = 0; j < i; j++) {
                row += " ";
            }

            // Print stars
            for (let j = 0; j < 2 * N - (2 * i + 1); j++) {
                row += "*";
            }

            // Print trailing spaces
            for (let j = 0; j < i; j++) {
                row += " ";
            }

            console.log(row);
        }
    }
}

// Driver code
(function () {
    const sol = new Solution();
    const N = 5;
    sol.pattern8(N);
})();
