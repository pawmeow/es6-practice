function add(n, p = 21) {
    // old way - p = p || 20;
    return n + p;
}

const q = add(4);
console.log(q);