export function createObject() {
  let animal = {
    eat() {
        console.log("eating");
    }
  }

  let rabbit = {
    jump() {
        console.log("jumping")
    },
    // Прототипное наследование
    __proto__: animal
  }

  rabbit.eat();
  rabbit.jump();

  function longEarRabbit(name) {
    this.name = name;
  }

  // F.prototype
  longEarRabbit.prototype = rabbit;

  let myRabbit = new longEarRabbit();
  console.log(myRabbit.length);
  myRabbit.jump();

  console.log([1, 2, 3]);

  class User {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(this.name);
    }
  }

  class Admin extends User {
    _age = 0;

    constructor(name, age) {
      super(name);
      this._age = age;
    }

    get age() {
      return this._age;
    }

    sayHi() {
      console.log(`This is Admin ${this.age}!`);
    }
  }

  let admin = new Admin("Ivan", 10);
  admin.sayHi();
  console.log(admin.age);

  let a = 10;

  try {
    if (a === 10) {
      throw new Error("Got it!");
    }
    console.log("Fuck you man!");
  } catch (err) {
    console.log(err);
  }
}