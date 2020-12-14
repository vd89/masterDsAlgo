// reference type 

let obj1= {value:10}
let obj2 = object1
let obj3 = {value:10}

// context vs scope

const obj4 = {
  a: function(){
      console.log(this)
  }
}

// instantiation

class Player {
  constructor(name,type) {
    this.name = name
    this.type = type
  }
  intr(){
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player{
  constructor(name,type) {
    super(name,type)
  }
  paly(){
    console.log(`WEEEEEE I'm a ${this.type}`);
  }
}

const wiz1 = new Wizard('James', 'Healer')
const wiz2 = new Wizard('Joe','Dark Magic')