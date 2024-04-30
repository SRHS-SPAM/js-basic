function lcm(a, b) {
    let gcd = gcd(a, b);
    return (a * b) / gcd;
}
