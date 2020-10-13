// * PART.1 ======== IF ELSE
// let hour = 3;
// if (hour > 6 && hour < 12) {
//   console.log("Good morning!");
// } else if (hour >= 12 && hour < 18) {
//   console.log("Good afternoon!");
// } else {
//   console.log("Good evening!");
// }

// * PART.2 ======== LOOPS
// ? FOR
// for (let i = 0; i <= 5; i++) {
//   if (i % 2 === 0) {
//     console.log("even", i);
//   } else console.log("odd", i);
// }
// ? WHILE
// let i = 0;
// while (i <= 5) {
//   i++;
//   if (i % 2 === 0) {
//     console.log("even", i);
//   } else console.log("odd", i);
// }
// ? DO WHILE
// let i = 0;
// do {
//   i++;
//   if (i % 2 === 0) {
//     console.log("even", i);
//   } else console.log("odd", i);
// } while (i < 5);
// ? FOR IN
// let obj = { a: 1, b: 2, c: 3 };
// for (let el in obj) {
//   console.log(`obj.${el} = value.${obj[el]}`);
// }
// ? FOR OF
// let arr = ["a", "b", "c"];
// for (let value of arr) {
//   console.log("value", value);
// }

// * PART.3 ======== STRING
// const message = " Hi  ! ' \n heeeeyyyy";
// const another = new String("hello  j");
// console.log(
//   message.length,
//   message[1],
//   another,
//   another.includes("l"),
//   message.startsWith("i"),
//   message.endsWith("i"),
//   message.toUpperCase(),
//   another.indexOf("o"),
//   message.replace("!", "   !no one!"),
//   message.trim(),
//   message.split(" ")
// );

// * PART.4 ======== FUNCTION
// function greet(firstName, lastName) {
//   console.log("Hello " + firstName + " " + lastName);
// }
// greet("Estelle", "O");

// * PART.5 ======== ARRAY
// let selectedColor = ["silver", "pink"];
// selectedColor[2] = "blue";
// console.log(selectedColor.length);

// ? ARRAY.filter()
// const numbers = [1, -1, 2, 6];
// const filtered = numbers.filter((n) => n >= 0);
// console.log(filtered);
// const restaurants = [
//   { id: 1, category: "seafood" },
//   { id: 2, category: "italian" },
//   { id: 3, category: "korean" },
//   { id: 4, category: "mexican" },
//   { id: 5, category: "italian" },
//   { id: 6, category: "korean" },
// ];
// const filtered = restaurants.filter((n) => n["category"] === "korean");
// console.log(filtered);

// ? ARRAY.map()
// const numbers = [1, -1, 2, 6];
// const filtered = numbers.filter((n) => n >= 0);
//  const items = filtered.map((n) => "<li>" + n + "</li>");
//  const html = "<ul>" + items.join("") + "</ul>";
//  console.log(html);
// const itemks = filtered.map((n) => ({
//   value: n,
// }));
// console.log(itemks);
// const numb = [1, -1, 2, 6];
// const elem = numb
//   .filter((n) => n >= 0)
//   .map((n) => ({
//     value: n,
//   }))
//   .filter((obj) => obj.value > 1)
//   .map((obj) => obj.value);
// console.log(elem);

// ? ARRAY.reduce()
// const numb = [1, -1, 2, 6];
// let sum = 0;
// for (let n of numb) {
//   sum += n;
// }
// console.log(sum);
// const h = numb.reduce(
//   (accumulator, currentValue) => (accumulator += currentValue)
// );
// console.log(h);

// * PART.6 ======== VAR vs LET
// let x = 0;
// var y = 0;
// function start() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
//start(); //1 2 3 4 5
// function start() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// start(); //1 2 3 4 error (i not defined)
// ! var => function-scoped
// ! let, const => block-scoped
// function start() {
//   for (var i = 0; i < 5; i++) {
//     if (true) {
//       var color = "red";
//     }
//     console.log(color);
//   }
// }
// start(); // red
// var color = "blue";
// let age = 30;
// function sayHi() {
//   console.log("hi");
// }

// * PART.7 ======== VALUE vs REFERENCE
// let x = 10;
// let y = x;
// x = 20;
// console.log(x, y); // 20, 10
// let x = { value: 10 };
// let y = x;
// x.value = 20;
// y.value = 3;
// console.log(x, y); //{value: 3} {value: 3}
// ! Primitives are copied by their value
// ! Objects are copied by their reference
// let number = 10;
// function increase(number) {
//   return number++;
// }
// increase(number);
// console.log(increase(number)); //10
// let obj = { value: 10 };
// function increase(obj) {
//   return obj.value++;
// }
// increase(obj);
// console.log(obj); // { value: 11 }

// * PART.8 ======== TEMPLATE LITERALS
// const message1 = "This is my\nfirst message";
// const message2 = "This is my\n" + '"first" message';
// console.log(message2);
// let name = "Estelle";
// let number = 22;
// let nn = "";
// let lastDigit = +number.toString().split("").pop();
// function findTheNN(lastDigit) {
//   if (lastDigit == 1) {
//     nn = "st";
//   } else if (lastDigit === 2) {
//     nn = "nd";
//   } else if (lastDigit === 3) {
//     nn = "rd";
//   } else nn = "th";
// }
// findTheNN(lastDigit);
// const another = `Hello ${name}
// I am the ${number}${nn} message`;
// console.log(another);

// * PART.9 ======== THIS
// ! Object executing the current function
// ! method => obj
// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };
// video.stop = function () {
//   console.log(this);
// };
// video.play();
// ! function => global (window, global)
// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
// };
// function Video(title) {
//   this.title = title;
// }

//const v = new Video("b"); // {}
// const video = {
//   title: "bblablaba",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach((tag) => {
//       console.log("title:", this.title, "tag:", tag);
//     });
//   },
// };
// video.showTags(); //title: bblablaba tag: a //title: bblablaba tag: b //title: bblablaba tag: c

// * PART.10 ======== LOCAL vs GLOBAL SCOPE
// const message = "hello";
// function start() {
//   const hy = "hi";
//   const message = "byebye";

//   if (true) {
//     const another = "bye";
//   }

//   for (i = 0; i < 5; i++) {
//     console.log(i, message);
//   }
// }
// function stop() {
//   const message = "bye";
// }
// console.log(message);
// start();
// stop();

// * PART.11 ======== GETTERS SETTERS
// const person = {
//   firstName: "Estelle",
//   lastName: "O",
//   get fullName() {
//     return `${person.firstName} ${person["lastName"]}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };
// person.fullName = "John Smith"; //firstName: "John" //fullName: "John Smith" //lastName: "Smith"
// console.log(person);
// ! getters => access properties
// ! setters => change (mutate) them

// * PART.12 ======== CLONING AN OBJECT
// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };
// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// }
// another["radius"] = circle["radius"];
// console.log(another.draw()); // draw
// const another = Object.assign({ color: "green" }, circle);
// const another = { ...circle };
// console.log(another);

// * PART.13 ======== FACTORIES
// const circle2 = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw() {
//     console.log("draw");
//   },
// };
// Factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle1, circle2);
