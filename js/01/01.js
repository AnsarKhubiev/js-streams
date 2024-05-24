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
console.log('superUser: ', superUser.company.name) // superUser:  Hoeger LLC
*/


//----------------------------Деструктуризация--------------------------------------

// Деструктуризация у объектов
const employee = {
    firstname: 'Ivan',
    lastname: 'Ivanov',
    middlename: 'Ivanovich',
    message: 'Hello, world!',
};

// // создались 2 переменные со значениями из объекта employee. Используется для уменьшения кода.
// const {firstname, message} = employee;



// дефолтные значения
// const {role = 'admin'} = employee;
// Если в employee нет свойства role, то будет дефолтное - admin
// console.log(role) // admin


// // Если название переменной зарезервированно
// const middlename = 'Petrovich';
// const {middlename: name,  lastname} = employee;
// console.log(name) // Ivanovich

// деструктуризация вложенных структур
// const employee2 = {
//     firstname1: 'Ivan',
//     lastname1: 'Ivanov',
//     middlename1: 'Ivanovich',
//     message1: 'Hello, world!',
//     permission1: {
//         canEdit: true,
//         canDelete: false,
//         role: 'user'
//     }
//     };

// const {firstname1, permission1: {canEdit, canDelete}} = employee2;
// console.log('canEdit: ', canEdit); // canEdit: true
// console.log('canDelete: ', canDelete); // canDelete: false



// Деструктуризация у массивов
const colors = ['red', 'blue', 'green', 'white'];

// важен порядок, применяются по индексу элементов в массиве:
// const [redColor, blueColor] = colors;
// console.log(redColor);
// console.log(blueColor);

// пропуск элементов массива (оставляем пустое место)
// const  [redColor1, , greenColor1] = colors;
// console.log('greenColor1: ', greenColor1); // greenColor1:  green

// Дефолтные значения
// const [redColor3, blueColor3, greenColor3, whiteColor3, noValue = 'no value'] = colors;
// console.log('noValue: ', noValue); // noValue:  no value

// Вложенные массивы
// const colors2 = ['red', ['blue', 'purple'], 'green', 'white', ];
// const [redColor4, [blueColor4, purpleColor4], greenColor4] = colors2;
// console.log('blueColor4: ', blueColor4); // blueColor4:  blue
// console.log('purpleColor4: ', purpleColor4); // purpleColor4:  purple
