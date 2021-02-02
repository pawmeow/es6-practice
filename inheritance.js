class Parent {
    constructor() {
        this.Parent = 'Vendarwal';
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    fullname() {
        return this.name + " " + this.Parent;
    }
}

const baby = new Child('maria');
const baby2 = new Child('malory');
console.log(baby);
console.log(baby2.fullname());