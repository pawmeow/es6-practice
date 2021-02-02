const ages = [20, 7, 8];
const ages2 = [2, 1, 22];
const name1= ['stralla', 'ester'];
const allages = ages.concat(ages2).concat([3649180]).concat(name1);
const allages2 = [ages, name1, ages2, 5];
const allages3 = [...ages, ...name1, ...ages2, 5];


console.log(allages);
console.log(allages2);
console.log(allages3);

const a = 3;
const b = -1;
const c = 54;

const lo = [3, -1, 54];
const max = Math.max(lo);
const max2 = Math.max(...lo);

console.log(max);
console.log(max2);