/*
// 1)	Добавление и удаление элементов:
//
//     -Создайте массив с именами пользователей.
// -Используйте push для добавления нового пользователя.
// -Используйте pop для удаления последнего пользователя.
// -Используйте shift и unshift для добавления и удаления пользователя в начале массива.

const usersNames = ["Ansar", "Karim", "Ayna"];
usersNames.push("Fatima");
console.log("push: ", usersNames);

usersNames.pop();
console.log("pop: ", usersNames);

usersNames.shift();
console.log("shift: ", usersNames);

usersNames.unshift("Malik");
console.log("unshift: ", usersNames);
*/


/*
// 2)	Работа с порядком элементов: Критерий для сортировки - возраст. Надо отсортировать по возрастанию.

let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 22 },
];

const sortedUsersNames = users.toSorted((a, b)=>b.age - a.age);
console.log("toSorted: ", sortedUsersNames)

users.sort((a, b)=>a.age - b.age);
console.log("sort: ", users)

// Дополнительная задача реализовать сортировку по дате, дата по возрастанию
let events = [
    { name: 'Event 1', date: new Date('2024-03-08T10:30:00') },
    { name: 'Event 2', date: new Date('2024-03-09T14:00:00') },
    { name: 'Event 3', date: new Date('2024-03-07T09:00:00') },
];
const sortedEvents = events.toSorted((a, b)=> a.date - b.date);
console.log("sortedEvents: ", sortedEvents)

events.sort((a, b) => a.date - b.date);
console.log("sort: ", events)
*/


/*
// 3)Работа со строками:
// Предположим, у вас есть приложение для управления списком задач, где пользователи могут вводить несколько задач в одну строку, разделяя их запятыми. Вам нужно разбить эту строку на отдельные задачи для обработки и отображения на интерфейсе.

let tasksString = 'Помыть посуду, Погулять с собакой, Сделать покупки';
const tasksArr = tasksString.split(', ');
console.log(tasksArr)
*/


/*
// 4)Объединение используя concat:
//Предположим, у вас есть приложение для управления списками задач, и вы хотите объединить два списка задач в один для удобного отображения на странице.
let todoList1 = ['Покормить кота', 'Помыть посуду', 'Сделать уроки'];
let todoList2 = ['Погулять с собакой', 'Сходить в магазин', 'Позвонить маме'];

const allTasks = todoList1.concat(todoList2);
console.log("Общий список задач:");
allTasks.forEach((item, index)=> console.log(`${index+1}. ${item}`));
*/


/*
// 5) filter:Отфильтровать активных пользователей (isActive === true)
let users = [
    { id: 1, name: 'Alice', age: 28, isActive: true },
    { id: 2, name: 'Bob', age: 35, isActive: false },
    { id: 3, name: 'Charlie', age: 22, isActive: true },
    { id: 4, name: 'David', age: 40, isActive: true },
    { id: 5, name: 'Eva', age: 32, isActive: false },
];
const activeUsers = users.filter((user)=>user.isActive);
console.log(activeUsers);
*/


/*
// 6) find:Поиск юзера по имени Charlie:
let users = [
    {id: 1, name: 'Alice', age: 28, isActive: true},
    {id: 2, name: 'Bob', age: 35, isActive: false},
    {id: 3, name: 'Charlie', age: 22, isActive: true},
    {id: 4, name: 'David', age: 40, isActive: true},
    {id: 5, name: 'Eva', age: 32, isActive: false},
];
const Charlie = users.find((user) => user.name === "Charlie");
console.log(Charlie);
*/


/*
//7) includes: Предположим, у вас есть приложение для учета товаров в магазине, и вам нужно проверить, есть ли определенный товар в наличии с использованием метода includes().
let inventory = ['Футболка', 'Джинсы', 'Кроссовки', 'Рюкзак', 'Часы'];
let itemToCheck = 'Кроссовки';

inventory.includes(itemToCheck) ?
    console.log(`${itemToCheck} есть в наличии`) :
    console.log("Товара нет на складе");

if (inventory.indexOf(itemToCheck) !== -1){
    console.log(`${itemToCheck} есть в наличии`)
} else {
    console.log("Товара нет на складе");
}
*/

