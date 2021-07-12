const N = 23;

var isPrime = (n) => {
    for(let i=2; i<n; i++) {
        if(n % i == 0) {
            return "NO ES PRIMO";
        }
    }
    return "ES PRIMO";
}

console.log(N, isPrime(N));