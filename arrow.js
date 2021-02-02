function doubleit(num) {
    return num*2;
}

const double2 = function(num) {
    return num*2;
}

const doubleES6 = num => num*2;
const add = (x, y) => x + y;
const get5 = () => 5;
const large = (a, b, c) => {
    const sum = a + b;
    const diff = b - c;
    return sum * diff;
}

console.log(doubleit(2));
console.log(double2(16));
console.log(doubleES6(35));
console.log(add(1,2));
console.log(get5());
console.log(large(1, 2, 3));