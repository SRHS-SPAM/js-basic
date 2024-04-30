function gcd(n, m) {
    while (n !== 0) {
        let temp = n;
        n = m % n;
        m = temp;
    }
    return temp;
}
