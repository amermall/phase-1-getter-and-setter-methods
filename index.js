// class Bird {
//   #phrase;

//   constructor(name) {
//     this.name = name;
//   }

//   set phrase(phrase) {
//     this.#phrase = phrase;
//   }

//   get speak() {
//     return `${this.name} says ${this.#phrase || "squawk"}`;
//   }
// }

// const daffy = new Bird("Daffy");
// console.log(daffy.speak); //=> 'Daffy says squawk'
// daffy.phrase = "it's rabbit season!";
// console.log(daffy.speak);

// Example explanied: 
// Our Bird class accepts the parameter of name, which is set each time a new instance of Bird is created. When phrase is set, our new Bird instance can speak a phrase. If it is not set, it will squawk.

// So, a instance of Bird...
// const buddy = new Bird("Buddy");
// console.log(buddy.speak);
// buddy.phrase = "What'cha doin'?";
// console.log(buddy.speak);


// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Define getter methods for 
  // a. diameter, 
  // b. circumference, and 
  // c. area 
  // ===> which will calculate each value using this.radius and pi

  // a. diameter
  get diameter() {
    return this.radius * 2;
  }

  // b. circumference
  get circumference() {
    return Math.PI * this.diameter;
  }

  // c. area
  get area() {
    return (Math.PI) * (this.radius ** 2);
  }

  // d. set method for diameter
  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  // e. set method for circumference
  set circumference(newCircumference) {
    this.radius = (newCircumference) / (Math.PI * 2);
  }

  // f. set method for area
  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI);
  }



}

const eg1 = new Circle(2);