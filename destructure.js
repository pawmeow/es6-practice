const person = { name: 'Aren Wright', age: 17, job: 'Neurobiologist', hobby: 'archery', favoriteDrink: 'coffee', hair: 'curly brown', eyes: 'hazel', friends: ['Evan Waston', 'Timothy Turrel', 'Joanna Dawson']};

console.log(person.hobby);
console.log(person.friends);

const hair = person.hair;
console.log(hair);

const {job, name} = person;
console.log(job, name);


const lorry = ['curly', 'straight', 'wavy', 'frizzy', 'bushy'];
const [one, two, ...restofthem] = lorry;
console.log(one, two);
console.log(restofthem);


const complex = {
    address: 'the cottage by the seaside',
    info: {
        phone: 012,
        level: 'black belt'
    }
}

const {level} = complex.info;
console.log(level);