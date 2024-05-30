//push() Добавьте один или несколько элементов в конец массива
// let fruits = ['apple', 'banana', 'orange'];
// fruits.push('Lemon', 'Strawberry')
// console.log(fruits); // Output: ['apple', 'banana', 'orange', твои добавленные элементы в конец]

// pop() Удалите последний элемент в массиве и верните этот элемент
// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const lastUser = users.pop();
// console.log(lastUser); // { id: 4, name: 'Donald', isStudent: false }
// console.log(users); // [ { id: 1, name: 'Bob', isStudent: true },  { id: 2, name: 'Alex', isStudent: true },{ id: 3, name: 'Ann', isStudent: true }]

//shift(): Удалите первого юзера и верните его
// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const firstUser = users.shift()
// console.log(firstUser); // { id: 1, name: 'Bob', isStudent: true }
// console.log(users); // [{ id: 2, name: 'Alex', isStudent: true },  { id: 3, name: 'Ann', isStudent: true },  { id: 4, name: 'Donald', isStudent: false }]

// // unshift(): Добавьте один и более элементов в начало массива
// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
// users.unshift({ id: 0, name: 'TestName', isStudent: false })
// console.log(users); //[
// //     { id: 0, name: 'TestName', isStudent: false },
// //     { id: 1, name: 'Bob', isStudent: true },
// //     { id: 2, name: 'Alex', isStudent: true },
// //     { id: 3, name: 'Ann', isStudent: true },
// //     { id: 4, name: 'Donald', isStudent: false }
// //

//reverse(), join(), split(): Сделать reverse слова
// const str = 'JavaScript is awesome';
// const res = str.split(" ").reverse().join(" ")
// console.log(res); // awesome is JavaScript

// concat(): Напишите функцию mergeArrays, которая принимает на вход два массива и возвращает новый массив, содержащий все элементы из обоих массивов.
// const mergeArrays = (arr1, arr2) => arr1.concat(arr2)
// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi'])); // Output: ["apple", "banana", "orange", "kiwi"]

//flat(): Напишите функцию JavaScript, которая сглаживает вложенный массив любой глубины
// const flattenArray = (arr) => arr.flat(Infinity)
// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]

// find(): Напишите функцию JavaScript, которая находит первый элемент в массиве, удовлетворяющий заданному условию.
// const numbers = [10, 20, 30, 40, 50]
// // Условие: Найти первый элемент больше 25
// const findFirstElement = (arr, callBack) => arr.find(callBack)
// let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25); // Output: 30
//
// const fruits = ["яблоко", "банан", "апельсин", "киви"]
// // Условие: Найти первый элемент, начинающийся на "o".
// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('а'));
// console.log(firstFruitStartingWithO); // Output: "апельсин"

// //includes(): Напишите функцию JavaScript, которая проверяет, присутствует ли заданный элемент в массиве.
// const fruits = ['apple', 'banana', 'orange', 'kiwi'];
// let numbers = [1, 2, 3, 4, 5];
//
// const checkElement = (arr, elem) => arr.includes(elem)
//
// //Элемент для проверки: 3 Выход: true
// console.log(checkElement(numbers, 3)); // Output: true
// //Элемент для проверки: "виноград" Выход: false
// console.log(checkElement(fruits, 'grape')); // Output: false

//filter(): Напишите функцию JavaScript, которая фильтрует массив чисел и возвращает только те элементы, которые больше заданного значения.
// let numbers1 = [10, 20, 30, 40, 50];
// let numbers2 = [5, 15, 25, 35, 45];
//
// const filterGreaterThan = (arr, num) => arr.filter(el => el > num)
//
// console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
// console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]

//sort(): Напишите функцию JavaScript, которая сортирует массив объектов в алфавитном порядке на основе заданного свойства.
// let people = [
//     {name: 'John', age: 30},
//     {name: 'Alice', age: 25},
//     {name: 'Bob', age: 35},
// ];
// let numbers = [5, 2, 8, 1, 4];
//
// const sortAlphabeticallyByProperty = (arr, property) => {
//     return arr.sort((a, b) => a[property].localeCompare(b[property]))
// }
//
// const sortDescending = (arr) => {
//    return arr.sort((a, b) => b - a)
// }
// console.log(sortAlphabeticallyByProperty(people, 'name')); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]
// console.log(sortDescending(numbers)); // Output: [8, 5, 4, 2, 1]

// map():
// 1)	Отформатируйте data в массив объектов с такими вот св-ми
// let data = [
//     {value: 1, name: 'Option 1'},
//     {value: 2, name: 'Option 2'},
//     {value: 3, name: 'Option 3'},
// ];
//
// const formattedData = data.map(el => {
//     return {value: el.value, label: el.name}
// })
// console.log(formattedData); // [
// //   { value: 1, label: 'Option 1' },
// // { value: 2, label: 'Option 2' },
// // { value: 3, label: 'Option 3' }
// // ]
//
//
// 2)	У вас есть массив объектов, и вы хотите добавить к каждому объекту новое свойство на основе существующих данных. Этим свойством будет discountPrice, где значение будет вычисляться таким образом price * 0.9
// let products = [
//     {id: 1, name: 'Apple', price: 1.99},
//     {id: 2, name: 'Banana', price: 0.99},
//     {id: 3, name: 'Orange', price: 2.49},
// ];
//
// const productsWithDiscount = products.map(item => {
//     return {...item, discountPrice: item.price * 0.9}
// })
//
// console.log(productsWithDiscount); // [
// //   { id: 1, name: 'Apple', price: 1.99, с: 1.791 },
// //   { id: 2, name: 'Banana', price: 0.99, discountedPrice: 0.891 },
// //   { id: 3, name: 'Orange', price: 2.49, discountedPrice: 2.241 }
// // ]

// Дополнительные задачи

// 1)	Напишите функцию, которая определяет, является ли переданная строка палиндромом. Палиндромом считается строка, которая читается одинаково как слева направо, так и справа налево(split, reverse, join)
//
// const isPalindrome = (str) => {
//     const reversedStr = str.split('').reverse().join("")
//     return str === reversedStr
// }
// console.log(isPalindrome('level')); // Вернет true
// console.log(isPalindrome('racecar')); // Вернет true
// console.log(isPalindrome('hello')); // Вернет false

//2) Выведите все дублирующиеся элементы массива(filter, indexOf)
//
// let arr = [1, 1, 5, 6, 7, 8, 9, 9, 3, 4, 0, 19];
//
// const removeDublicates = (arr) => {
//    return arr.filter((item, index) => index !== arr.indexOf(item))
// }
//
// console.log(removeDublicates(arr));//[ 1, 9 ]

// 3)	Напишите функцию JavaScript для сортировки массива объектов по определенному свойству в порядке возрастания, используя метод Array.prototype.sort()(тут кастомная сортировка придется чуть-чуть поискать и подумать)
// const persons = [
//     {name: 'Alice', age: 30},
//     {name: 'Bob', age: 25},
//     {name: 'Charlie', age: 35},
// ];
//
// const sortByProperty = (arr, property) => {
//     return arr.sort((a, b) => a[property] - b[property])
// }
//
// console.log(sortByProperty(persons, 'age'));
// // [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]

