// use inheritance when something "is a" something else
class Animal {
    constructor (type) {
        this.type = type;
    }
    poop () {
        console.log(this.name + ' (' + this.type + ') pooped');
    }
}
class Dog extends Animal {
    constructor (name) {
        super('doggy');
        this.name = name;
    }
    bark () {
        console.log(this.name + ' (' + this.type + ') says woof')
    };
}
class Cat extends Animal {
    constructor (name) {
        super('kitty');
        this.name = name;
    }
    meow () {
        console.log(this.name + ' (' + this.type + ') says meow')
    };
}
class Robot {
    constructor(type) {
        this.type = type;
    }
    drive() {
        console.log(this.name + ' (' + this.type + ') is driving')
    }
}
class CleaningRobot extends Robot {
    constructor(name) {
        super('cleaner')
        this.name = name
    }
    clean() {
        console.log(this.name + ' (' + this.type + ') is cleaning poop')
    }
}
class KillerRobot extends Robot {
    constructor(name) {
        super('killer')
        this.name = name
    }
    kill() {
        console.log(this.name + ' (' + this.type + ') is making mayhem')
    }
}
Rufus = new Dog('Rufus');
Rufus.bark();
Rufus.poop();

Fluffy = new Cat('Fluffy');
Fluffy.meow();
Fluffy.poop();

Robbie = new CleaningRobot('Robbie')
Robbie.drive()
Robbie.clean()

OptimusPrime = new KillerRobot('Optimus Prime')
OptimusPrime.drive()
OptimusPrime.kill()

// needs drive, bark and kill but not poop - what to do ???
class KillerRobotDog {

}