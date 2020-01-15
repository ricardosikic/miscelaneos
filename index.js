// Recordamos que existe expresiones de clase anonimas y nombradas
/* let Su = class {

}

let Su = class Su {

} */


class SuperHuman {
  constructor(height, power, gender) {
    this.height = height;
    this.power = power;
    this.gender = gender || 'male';
  }

  fly(){
    console.log(`puede volar!`);
  }
}


class SuperMan extends SuperHuman {
  constructor(name, ...args) {
    super(...args);
    this.name = name;
  }
  
  vision(){
    console.log(`${this.name} a usado vision de laser!`);
  }
 }

 let superman = new SuperMan('ricardo', 178, 'laser');
 console.log(superman.vision());