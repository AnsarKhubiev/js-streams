// 01 Типы данных. Объекты. Деструктуризация

/*
// примитивные данные: string, number, boolean, undefined, symbol, bigInt, null
// ссылочные данные: objects, array, function

//typeof

const a = ['test'];
console.log(typeof (a))

// особенности ссылочных типов данных:
// 1. Более сложная структура
// 2. Есть свойства и методы
// 3. Передаются по ссылке
*/

//------------------------------------------------------------------

// React, Node.js - работыем с данными иммутабельно, нельзя менять исходные данные
/*
const a = [1, 2, 3, 4, 5];
// делаем копию
const b = [1, 2, 3, 4, 5];
// работаем с копией и вносим необходимые изменения
b.push(1)
console.log(b)
console.log(a)
*/

//------------------------------------------------------------------
/*
// мутабельно
const users1 = {
    id: 1,
    name: 'Bob',
    isStudent: true,
}

const users2 = users1;
users2.name = "Nika";

console.log(users1 === users2);
console.log('user1: ', users1);
console.log('user2: ', users2);

// имутабельно
const users3 = {
    id: 1,
    name: 'Bob',
    isStudent: true,
}

// до появления spread оператора
const users4 = {
    id: users3.id,
    name: users3.name,
    isStudent: users3.isStudent,
}
console.log('isEqual ', users3 === users4); // false, т.к. сравниваются ссылки на объекты.

// spread оператор
const users5 = {
    id: 1,
    name: 'Bob',
    isStudent: true,
}

const users6 = {...users5}
console.log('isEqual: ', users6 === users5)

// spread оператор работает с первым уровнем вложенности, остальные копирует как ссылки
const superUser = {
    id: 10,
    name: 'Clementina Dubuque',
    username: 'Moriah.Stanton',
    email: 'rey.padber@gmail.com',
    address: {
        street: 'Lomonosova',
        suite: "Suite 198",
        city: "Kislovosdk",
        zipcode: '3213131321',
        geo: {
            lat: '-38.542',
            lng: '57.423'
        },
    },
    phone: '433-312-23-12',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: ' Centralized empoering',
        bs: 'target end-to end models',
    },
};

const newSuperUserCopy = {...superUser}
superUser.address.city = 'Warsaw';
console.log(newSuperUserCopy.address.city); // Warsaw
console.log(superUser.address.city); // Warsaw

// пути решения проблемы spread оператора
const newSuperUserCopy2 = {
    ...superUser,
    address: {
        ...superUser.address,
        geo: {
            ...superUser.address.geo
        }
    },
    company: {
        ...superUser.company
    }
}

superUser.address.geo.lat = '11.111';
console.log('superUser: ', superUser.address.geo.lat); // superUser:  11.111
console.log('newSuperUserCopy2: ', newSuperUserCopy2.address.geo.lat); // newSuperUserCopy2:  -38.542

// structuredClone() - новая функция, не всеми браузерами поддерживается
const newSuperUserCopy3 = structuredClone(superUser);
newSuperUserCopy3.company.name = 'Google';
console.log('newSuperUserCopy3: ', newSuperUserCopy3.company.name) // newSuperUserCopy3:  Google
console.log('superUser: ', superUser.company.name) // superUser:  Hoeger LLC*/


//----------------------------Деструктуризация--------------------------------------

/*
// Деструктуризация у объектов
const employee = {
    firstname: 'Ivan',
    lastname: 'Ivanov',
    middlename: 'Ivanovich',
    message: 'Hello, world!',
};

// создались 2 переменные со значениями из объекта employee. Используется для уменьшения кода.
const {firstname, message} = employee;


// дефолтные значения
const {role = 'admin'} = employee;
// Если в employee нет свойства role, то будет дефолтное - admin
console.log(role) // admin


// Если название переменной зарезервированно
const middlename = 'Petrovich';
const {middlename: name,  lastname} = employee;
console.log(name) // Ivanovich


// деструктуризация вложенных структур
const employee2 = {
    firstname1: 'Ivan',
    lastname1: 'Ivanov',
    middlename1: 'Ivanovich',
    message1: 'Hello, world!',
    permission1: {
        canEdit: true,
        canDelete: false,
        role: 'user'
    }
    };

const {firstname1, permission1: {canEdit, canDelete}} = employee2;
console.log('canEdit: ', canEdit); // canEdit: true
console.log('canDelete: ', canDelete); // canDelete: false
*/


/*
// Деструктуризация у массивов
const colors = ['red', 'blue', 'green', 'white', ];

// важен порядок, применяются по индексу элементов в массиве:
const [redColor, blueColor] = colors;
console.log(redColor);
console.log(blueColor);

// пропуск элементов массива (оставляем пустое место)
const  [redColor1, , greenColor1] = colors;
console.log('greenColor1: ', greenColor1); // greenColor1:  green

// Дефолтные значения
const [redColor3, blueColor3, greenColor3, whiteColor3, noValue = 'no value'] = colors;
console.log('noValue: ', noValue); // noValue:  no value

// Вложенные массивы
const colors2 = ['red', ['blue', 'purple'], 'green', 'white', ];
const [redColor4, [blueColor4, purpleColor4], greenColor4] = colors2;
console.log('blueColor4: ', blueColor4); // blueColor4:  blue
console.log('purpleColor4: ', purpleColor4); // purpleColor4:  purple
*/


// --------------------homeworks----------------------------------

/*// 1) Извлечь значения свойств объекта в переменные name, age, city
const user = { name: 'John', age: 25, city: 'New York' };
const {name, age, city} = user;
user.name = 'Ansar';
user.age  = 35;
user.city = 'Istanbul';

console.log(name);
console.log(age);
console.log(city);*/


/*// 2) Извлечь значения из массива в переменные secondFruit, thirdFruit, а первую переменную пропустить
const fruits = ['apple', 'banana', 'orange'];
const [, secondFruit, thirdFruit] = fruits;

console.log(secondFruit);  // 'banana'
console.log(thirdFruit);   // 'orange'*/


/*// 3) Использовать деструктуризацию в параметрах функции

const person = { name: 'Alice', age: 30 };
function printPersonDetails({name, age} = person) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printPersonDetails(person);  // Вывод: Name: Alice, Age: 30*/


/*// 4) Установите значение по умолчанию для свойства year которого нет в объекте car
const car = { brand: 'Toyota', model: 'Camry' };
const {brand, model, year = 2022} = car;

console.log(brand);  // 'Toyota'
console.log(model);  // 'Camry'
console.log(year);   // 2022 (значение по умолчанию)*/


/*// 5) Извлечь значения из массива объектов
const students = [
    { name: 'Alex', grade: 'A' },
    { name: 'Emma', grade: 'B' },
    { name: 'Chris', grade: 'C' },
];
const [{name: student1},,{name: student3}] = students;

console.log(student1);  // 'Alex'
console.log(student3);  // 'Chris'*/


/*// 6) Установите значение по умолчанию для свойства age которого нет в объекте person
// и переименовать переменные, чтобы достать значение с свойства firstName
const person = { firstName: 'Max', lastName: 'Johnson' };
const firstName = 'first Name: Nina';
const lastName = 'last Name: Ivanov';
const {firstName: name, lastName: sureName, age = 25} = person;

console.log(name); // 'Max'
console.log(sureName); // 'Johnson'
console.log(age); // 25 (значение по умолчанию)*/


