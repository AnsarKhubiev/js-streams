// 02 - Методы массивов. "Полифилы"
//push, pop, shift, unshift - мутабельные === изменяют(мутруют) исходный массив


/*// push()
const names = ["Alex", "Bob", "Ivan", "Sasha"];
const result = names.push("Monika");

console.log("Names: ", names); // ['Alex', 'Bob', 'Ivan', 'Sasha', 'Monika']
console.log("New length: ", result); // 5*/


/*// pop()
const names = ["Alex", "Bob", "Ivan", "Sasha"];
const result = names.pop();

console.log("names: ", names); // ['Alex', 'Bob', 'Ivan']
console.log("Deleted item: ", result); // Sasha*/


/*// shift()
const names = ["Alex", "Bob", "Ivan", "Sasha"];
const result = names.shift();

console.log("names: ", names); // ['Bob', 'Ivan', 'Sasha']
console.log("Deleted item: ", result); // 4*/


/*// unshift()
const names = ["Alex", "Bob", "Ivan", "Sasha"];
const result = names.unshift("Aslan");

console.log("names: ", names); // ['Aslan', 'Alex', 'Bob', 'Ivan', 'Sasha']
console.log("result length: ", result); // 5*/


/*// reverse()
const names = ["Alex", "Bob", "Ivan", "Sasha"];
const result = names.reverse();

console.log("names: ", names); // ["Sasha", "Ivan", "Bob", "Alex"]
console.log("result: ", result); // ["Sasha", "Ivan", "Bob", "Alex"]*/


/*// split()
// 1) разделение строки по разделителю:
const str = "ab-cd-ef";
const res = str.split("-");

console.log("str: ", str); // ab-cd-ef
console.log("res: ", res); // ["ab", "cd", "ef"]

// 2) второй параметр split:
const res2 = str.split("-", 2);
console.log("res2: ", res2); // ["ab", "cd"]

// 3) split(""):
const res3 = str.split("");
console.log("res3: ", res3); // ["a", "b", "-", "c", "d", "-", "e", "f"]

// 4) split():
const res4 = str.split();
console.log("res4: ", res4); // ["ab-cd-ef"]*/


/*//join()
// 1) разделитель передаем в join:
const names = ["Alex", "Bob", "Ivan", "Sasha"];
const joinResult = names.join("-");

console.log("names: ", names); // ["Alex", "Bob", "Ivan", "Sasha"]
console.log("joinResult: ", joinResult); // Alex-Bob-Ivan-Sasha

// 2) join без разделителя:
const joinResult2 = names.join();
console.log("joinResult2: ", joinResult2); // Alex,Bob,Ivan,Sasha

// 3) разделитель - пустая строка:
const joinResult3 = names.join("");
console.log("joinResult3: ", joinResult3); // AlexBobIvanSasha*/


/*// concat
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

let res = arr1.concat(arr2, arr3);
console.log("res: ", res); // [1, 2, 3, 4, 5, 6]

// передача элементов в качестве параметров:
const res2 = arr1.concat(arr2, arr3, 7, 8, 9);
console.log("res2: ", res2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// передача массива с вложенными массивами в качестве параметров:
const nestedArr = [
    [5, 6],
    [7, 8]
];
const res3 = arr1.concat(arr2, arr3, nestedArr);
// concat сохраняет вложенность:
console.log("res3: ", res3); // [1, 2, 3, 4, 5, 6, Array(2), Array(2)]*/


/*// flat()
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const nestedArr = [[7, 8],[9, 10, [11, 12]]];

const res1 = arr1.concat(arr2, arr3, nestedArr);
const res2 = res1.flat();
const res3 = res1.flat(2);

console.log("res1: ", res1); // [1, 2, 3, 4, 5, 6, [7, 8],[9, 10]]
console.log("res2: ", res2); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]
console.log("res3: ", res3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]*/


/*// indexOf()

const numbers = [1, 2, 3, 4, 5, 6, 2];

// найдем позицию тройки:
const res1 = numbers.indexOf(3);
console.log("position res1: ", res1); // 2

// найдем позицию отсутствующего элемента:
const res2 = numbers.indexOf(7);
console.log("position res2: ", res2); // -1

// найдем позицию элемента c указанием стартовой позиции (индекса):
const numbers2 = [1, 2, 3, 4, 3, 5, 6, 3, 2];
const res3 = numbers2.indexOf(3, 3);
console.log("position res3: ", res3); // 4*/


/*// find()
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const res = words.find((el)=> el.length > 6);
console.log("res: ", res); // exuberant*/


/*// findIndex()
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const res = words.findIndex((el)=> el.length > 6);
console.log("res: ", res); // 2*/


/*// findLastIndex()
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const res = words.findLastIndex(el => el.length > 6);
console.log("res: ", res); // 4*/


/*//sort
const names = ["Alex", "alex", "Donald", "Виктор"];
const res = names.sort();
console.log(res); // ["Alex", "Donald", "alex", "Виктор"]


const numbers = [1000, 4, 5000, 6000, -50];
function compareFunction(a, b) {
    // по возрастанию
    if (a > b) {
        return 1 // меняем порядок
    } else {
        return -1 // не меняем порядок
    }
}

console.log(numbers.sort(compareFunction)) // [-50, 4, 1000, 5000, 6000]
console.log(numbers.sort((a, b) => a - b)); // [-50, 4, 1000, 5000, 6000]
console.log(numbers.sort((a, b) => b - a)); // [6000, 5000, 1000, 4, -50]

const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
    },
    {
        id: 3,
        name: "alex",
        isStudent: true,
    },
];

console.log(users.sort((a, b)=> a.name.localeCompare(b.name))); // с нижнего в верхний регистр
console.log(users.sort((a, b)=> b.name.localeCompare(a.name))); // с нижнего в верхний регистр*/


/*// toSorted()
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedArray = months.toSorted();

console.log("months: ", months); // ['Mar', 'Jan', 'Feb', 'Dec']
console.log("sortedArr: ", sortedArray); // ['Dec', 'Feb', 'Jan', 'Mar']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b)=> a - b );

console.log("values: ", values); // [1, 10, 21, 2]
console.log("sortedValues: ", sortedValues); // [1, 2, 10, 21]*/


/*// Полифилы
const users1 = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
    },
    {
        id: 4,
        name: "Donald",
        isStudent: false,
    },
];

const usersNames = users1.map(user => user.name);
console.log(usersNames);

function newMap(arr) {
   const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].name);
    }
    return result;
}

const userNamesArr = newMap(users1);
console.log("map polifill: ", userNamesArr);*/
