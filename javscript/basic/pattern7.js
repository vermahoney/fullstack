class Solution {
    // Function to print Pattern 7
    pattern7(N) {
        for (let i = 0; i < N; i++) {
            let row = "";

            // Print leading spaces
            for (let j = 0; j < N - i - 1; j++) {
                row += " ";
            }

            // Print stars
            for (let j = 0; j < 2 * i + 1; j++) {
                row += "*";
            }

            // Print trailing spaces
            for (let j = 0; j < N - i - 1; j++) {
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
    sol.pattern7(N);
})();
