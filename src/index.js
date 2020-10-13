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

// * PART. ======== VAR vs LET
let x = 0;
var y = 0;
// function start() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
//start(); //1 2 3 4 5
function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
start(); //1 2 3 4 error (i not defined)
// var => function-scoped
// let, const => block-scoped

// * PART. ======== FACTORIES
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },

//   isVisible: true,
//   draw: function () {
//   console.log('draw')
//   }
// },
// const circle2 = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },

//   isVisible: true,
//   draw: function () {
//   console.log('draw')
//   }
// },
