let name = "Est";
console.log(name);

const interestRate = 0.3;
console.log(interestRate);

let age = 29;
let person = {
  name: "Est",
  age: 29,
};

person.name = "Estelle";
person.day = "sunday";

person["name"] = "Max";
person["number"] = 7;

console.log(person);

let selectedNumbers = [6, 2, 5];

selectedNumbers.push(8);
selectedNumbers[2] = 6;

let m = [];
for (let number of selectedNumbers) {
  console.log(number);
  m.push(number + "missisipi");
}

console.log("length :", selectedNumbers.length);
console.log(m);

function greet(name, lastName) {
  if (lastName != undefined) {
    console.log("Hello " + name + " & " + lastName);
  } else {
    console.log("Bye " + name);
  }
}

greet("Estelle", "Yann");
greet("Maxi");

function square(number) {
  return number * number;
}

console.log(square(2));
