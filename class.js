class Student {
    constructor(sd, name) {
        this.id = sd;
        this.name = name;
        this.school = 'cara care';
    }
}

const student1 = new Student(2, 'mapel');
const student2 = new Student(67, 'iranel');
console.log(student1, student2);
console.log(student2.id, student1.name);