// Методы массивов, slice, splice, toSpliced, reduce

//-------------------------------slice()-----------------------------------------------------

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

const result = arr.slice(0, 2);
console.log("slice: ", result); // ['a', 'b']

const result2 = arr.slice(1);
console.log("slice: ", result2); // ['b', 'c', 'd', 'e']

const result3 = arr.slice(1, -1);
console.log("slice: ", result3); // ['b', 'c', 'd', 'e']
*/

//-------------------------------splice()-----------------------------------------------------

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// удаление элементов
arr.splice(1, 3);
console.log("splice - delete items: ", arr); // ['a', 'e']

// добавление элементов
arr.splice(1, 0, '2', '3', '4')
console.log("splice - add items: ", arr); // ['a', '2', '3', '4', 'e']

// добавление и удаление элементов
let arr2 = ['a', 'b', 'c', 'd', 'e']
arr2.splice(1, 3, '2', '3', 'test')
console.log("splice - add & delete items: ", arr2); // ['a', '2', '3', 'test', 'e']
*/

//-------------------------------toSpliced()-----------------------------------------------------

/*
const months = ['Jan', 'Mar', 'Apr', 'May'];
const months2 = months.toSpliced(1, 0, "Feb");
const months3 = months.toSpliced(1, 3, "Feb");

console.log("months: ", months);
console.log("months2: ", months2); // ['Jan', 'Feb', 'Mar', 'Apr', 'May']
console.log("months3: ", months3); //['Jan', 'Feb']
*/

//-------------------------------reduce()-----------------------------------------------------

// суммирование элементов массива циклом for
/*let a = [1, 2, 3, 4, 5];
let sum = 0;
for (i = 0; i < a.length; i++) {
    sum = sum + a[i];
}
console.log("sum by for: ", sum);*/

// суммирование элементов массива с помощью reduce

/*// 1) пример
const sum2 = a.reduce((sum, item) => sum + item);
console.log("sum by reduce: ", sum2);*/

/*// 2) пример
const fruits = [
    {name: 'apple', quantity: 2},
    {name: 'banana', quantity: 3},
    {name: 'orange', quantity: 1},
];

const result = fruits.reduce((acc, fruit) => {
    return acc + fruit.quantity;
}, 0);
console.log("sum of quantity: ", result);*/

/*// 3) пример
const numbers = [5, 2, 8, 1, 6];
const res = numbers.reduce((acc, currentNum) => {
    return currentNum > acc ? currentNum : acc;
})
console.log("res: ", res)*/

/*// 4) пример
const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 22}
]

const res2 = people.reduce((acc, person) => {
        console.log(person);
        acc.names.push(person.name);
        acc.totalAge += person.age;
        return acc
    }, {names: [], totalAge: 0}
)
console.log("obj with total ages & arr of names: ", res2);*/

/*// 5) пример
const peoples = [
    { name: 'Vika', age: 25, budget: 4500 },
    { name: 'Nikita', age: 45, budget: 35000 },
    { name: 'Igor', age: 55, budget: 340 },
    { name: 'Insaf', age: 65, budget: 50000 },
    { name: 'Alyona', age: 75, budget: 20 },
]; // {totalAge: 0, totalBudget: 0}

const res3 = peoples.reduce((acc, person)=>{
    acc.totalAge += person.age;
    acc.totalBudget += person.budget;
    return acc
}, {totalAge: 0, totalBudget: 0});
console.log("obj with total age & budget: ", res3);*/

/*// 6) пример
const words = ['Hello', ' ', 'world', '!']; //"Hello world!"
const str = words.join('')
const str2 = words.reduce((acc, word) => acc += word);
console.log("string: ", str2)*/