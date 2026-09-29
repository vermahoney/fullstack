function countDigits(n) {
    let cnt = 0;

    while (n > 0) {
        cnt++;
        n = Math.floor(n / 10);
    }

    return cnt;
}

let N = 329823;

let digits = countDigits(N);

console.log(digits);
