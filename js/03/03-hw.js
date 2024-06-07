// slice

// 1) Напишите функцию, которая получает подстроку из строки, начиная с определенного индекса
// let str = 'Hello, world!';
// let startIndex = 7;
// const getSubStr = (str, startIndex) => str.slice(startIndex)
// console.log(getSubStr(str, startIndex)); // Выведет: "world!"

// 2) Напишите функцию, которая возвращает последние n элементов массива.
// const getLastElements = (arr, countOfLastNumbers) => arr.slice(-countOfLastNumbers)
// console.log(getLastElements([1, 2, 3, 4, 5], 3)); // Выведет: [3, 4, 5]

// 3) Создайте функцию, которая извлекает часть пути URL-адреса, начиная с указанного индекса.
// const extractPath = (str, num) => str.slice(num+1)
// console.log(extractPath('https://example.com/blog/article', 18)); // Выведет: "/blog/article"

// splice

// 1) Напишите функцию, которая принимает массив и индекс элемента для удаления, а затем удаляет этот элемент из массива, модифицируя его
// let numbers = [1, 2, 3, 4, 5];
// const removeElement = (arr, index) => {
//     arr.splice(index, 1)
//     return arr
// }
// console.log(removeElement(numbers, 2)); // Выведет: [1, 2, 4, 5]

// 2) Создайте функцию, которая принимает массив, индекс и новый элемент, а затем вставляет новый элемент в указанную позицию массива
// let numbers = [1, 2, 4, 5];
// const insertElement = (arr, index, newNumber) => {
//     arr.splice(index, 0, newNumber)
//     return arr
// }
// console.log(insertElement(numbers, 2, 3)); // Выведет: [1, 2, 3, 4, 5]

//reduce

// 1)	Напишите функцию, которая принимает массив чисел и использует метод reduce, чтобы вернуть сумму всех элементов в массиве
// let numbers = [1, 2, 3, 4, 5];
// const sumArray = (arr) => arr.reduce((acc, item)=> acc + item)
// console.log(sumArray(numbers)); // Выведет: 15

//2)	Создайте функцию, которая принимает массив строк и возвращает сумму их длин, используя метод reduce
// const sumStringLengths = (arr) => arr.reduce((acc, word)=> acc + word.length,0)
// console.log(sumStringLengths(['apple', 'banana', 'cherry'])); // Выведет: 17

//3)	Напишите функцию, которая принимает массив, содержащий вложенные массивы чисел, и возвращает сумму всех чисел в этих массивах
// const sumNestedArrays = (arr) => arr.flat().reduce((acc, number) => acc + number)
// const sumNestedArrays2 = (arr) => {
//     return arr.reduce((total, nestedArr) => total + nestedArr.reduce((acc, number) => acc + number),0)
// }
//
// console.log(
//     sumNestedArrays([
//         [1, 2],
//         [3, 4, 5],
//         [6, 7, 8, 9],
//     ])
// ); // Выведет: 45
//
// console.log(
//     sumNestedArrays2([
//         [1, 2],
//         [3, 4, 5],
//         [6, 7, 8, 9],
//     ])
// ); // Выведет: 45

//4)	Создайте функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы, используя метод reduce.
// const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
// const removeDuplicates = (arr) => {
//     return arr.reduce((acc, number) => {
//         !acc.includes(number) && acc.push(number)
//         return acc
//     }, [])
// }
// console.log(removeDuplicates(numbers)); // Выведет: [1, 2, 3, 4, 5, 6]

//5)	Найдите дубликаты в массиве с помощью метода reduce и верните массив дублированных элементов
// const array = [1, 2, 3, 2, 4, 5, 4, 5];
// const findDuplicates = (arr) => {
//   return arr.reduce((acc, number, index)=>{
//       (arr.indexOf(number, index+1) !== -1 && acc.indexOf(number) === -1) && acc.push(number)
//        return acc
//     },[])
// }
// const duplicatesArray = findDuplicates(array);
// console.log(duplicatesArray); // Output: [2, 4, 5]

//6)	Напишите функцию, которая принимает массив строк и возвращает объект, в котором ключи - это уникальные строки, а значения - количество их вхождений в массив
// const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
// const wordCount = (arr) => {
//     return arr.reduce((obj, word) => {
//         obj[word] = (obj[word] || 0) + 1
//         return obj
//     }, [])
// }
// console.log(wordCount(words)); // Output: { apple: 3, banana: 2, cherry: 1 }

// 7)	Создайте функцию, которая принимает массив объектов и возвращает массив значений определенного свойства объектов
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 22 },
// ];
// const getPropertyValues = (arr, key) => {
//     return arr.reduce((acc, person)=> {
//         acc.push(person[key])
//         return acc
//     }, [])
// }
// const names = getPropertyValues(people, 'name');
// console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
