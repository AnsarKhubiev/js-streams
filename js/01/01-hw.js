// const a = {};
// const b = {};
// const c = a;
// const d = c;
//
// console.log(a === b); // false
// console.log(a === c); // true
// console.log(c === d); // true
// console.log(a === c); // true


// const a = {};
// const b = a;
// b['test'] = 'test value';
//
// console.log(b === a);
// console.log(a);
// // смутирурет ли объект a?


// const user = {
//     name: 'John',
//     address: {
//         city: 'New York',
//         country: 'USA',
//     },
// };
//
// const updatedUser = {...user, address: { ... user.address, city: "Toronto"}}
// console.log(updatedUser);


// const originalArray = [1, 2, 3, 4, 5];
// const addElementToArray = (arr, newEl) => [...arr, newEl]
// const newArray = addElementToArray(originalArray, 6);
//
// console.log(newArray); // Ожидаемый вывод: [1, 2, 3, 4, 5, 6]


// const user = { name: 'John', age: 25, city: 'New York' };
//
// const {name, age, city} = user
// console.log("name: ", name)
// console.log("age: ", age)
// console.log("city: ", city)


// const fruits = ['apple', 'banana', 'orange'];
// const [, secondFruit, thirdFruit] = fruits
// console.log(secondFruit);  // 'banana'
// console.log(thirdFruit);   // 'orange'


// const person = {name: 'Alice', age: 30};
//
// // Деструктуризация в параметрах функции
// function printPersonDetails({name, age} = person) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }
//
// printPersonDetails(person);  // Вывод: Name: Alice, Age: 30


// const car = { brand: 'Toyota', model: 'Camry' };
// const {brand, model, year = 2022} = car
//
// console.log(brand);  // 'Toyota'
// console.log(model);  // 'Camry'
// console.log(year);   // 2022 (значение по умолчанию)


// const students = [
//     { name: 'Alex', grade: 'A' },
//     { name: 'Emma', grade: 'B' },
//     { name: 'Chris', grade: 'C' },
// ];
// const [{name: student1},,{name: student3}] = students
//
// console.log(student1);  // 'Alex'
// console.log(student3);  // 'Chris'


// const person = { firstName: 'Max', lastName: 'Johnson' };
// const {firstName: FirstName2, lastName: lastName2, age = 25} = person
//
// const firstName = 'first Name: Nina';
// const lastName = 'last Name: Ivanov';
//
// console.log(FirstName2); // 'Max'
// console.log(lastName2); // 'Johnson'
// console.log(age); // 25 (значение по умолчанию)


