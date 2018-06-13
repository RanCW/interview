function Animal() {
    this.type='animals';
}
function Dog() {
    this.name='dog';
}
Dog.prototype=new Animal();
Dog.prototype.constructor=Dog;
var dogs=new Dog();
console.log(Dog.prototype.constructor===Dog)
console.log(dogs.constructor===Dog);
console.log(dogs.__proto__===Dog.prototype);
console.log(Dog.prototype.__proto__==Animal.prototype)

/**es6**/;
class Fruits{
    p() {
        return 2;
    }
}

class Apple extends Fruits {
    constructor() {
        super();
        console.log(super.p()); // 2
    }
}

console.log(Apple.__proto__ === Fruits);