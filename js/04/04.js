// let fruit = {
//     color: 'apple', // статическое свойство
//     size: 'small', // статическое свойство
// }
//
// let obj = {
//     value: 'key', // статическое свойство
// }

// без использования динамических (вычисляемых) свойств
// function createObj(key, value) {
//     let newObj = {}
//     newObj[key] = value
//     return newObj
// }
//
// console.log(createObj('fruit', 'test_value'))


// с использованием динамических (вычисляемых) свойств
// function createObj2(key, value){
//     return {
//         [key]: value
//     }
// }

// console.log(createObj2('vegetable', 'tomato'))


// let propertyName = 'age'
// let person = {
//     name: 'John', // статическое свойство
//     [propertyName]: 26 // динамическое свойство
// }
//
// console.log(person)


// let prefix = 'status'
//
// const user = {
//     [prefix + '_id']: '1231231-dfewses-fsdfsdfsd',
//     [prefix + '_name']: 'pending'
// }
//
// console.log('user: ', user) // user:  { status_id: '1231231-dfewses-fsdfsdfsd', status_name: 'pending' }


// case 4
// let index = 5
//
// let obj = {
//     [index + 4]: 'nine'
// }
//
// console.log(obj)

//case 5

// let testObj = {
//     ['age' + 2]: '32',
//     [2 + 2]: 'four'
// }
//
// console.log('testObj: ', testObj)


//case 6

// const createObj = (key, value) => {
//     return {
//         [key.toUpperCase()]: value
//     }
// }
//
// console.log(createObj('age', '32'))


//case 7
// const STATUS_BUSY = 'busy'
// const STATUS_READY = 'ready'
//
// const STATUS_LABELS = {
//     [STATUS_BUSY]: 'ожидает',
//     [STATUS_READY]: 'готово',
// }
//
// const drivers = [
//     {name: 'Igor', status: 'busy'},
//     {name: 'Misha', status: 'ready'},
//     {name: 'Sasha', status: 'busy'},
//     {name: 'Petr', status: 'ready'},
// ]
//
// const driversStatuses = drivers.map(driver => {
//     const {status} = driver
//         return STATUS_LABELS[status]
//     }
// )
//
// console.log(driversStatuses)


//Object.keys() - возвращает массив ключей у объекта
// const user = {
//     name: 'Ivan',
//     age: 32,
//     isMarried: true
// }
//
// console.log(Object.keys(user)) // [ 'name', 'age', 'isMarried' ]


//Object.values() - возвращает значения свойств объекта

// const user = {
//     name: 'Ivan',
//     age: 32,
//     isMarried: true,
//     address: {
//         street: 'Lomonosova',
//         house: 10
//     }
// }
//
// console.log(Object.values(user)) // [ 'Ivan', 32, true, { street: 'Lomonosova', house: 10 } ]


//Object.entries() - возвращает массив пар у объекта
// const user = {
//     name: 'Ivan',
//     age: 32,
//     isMarried: true,
//     address: {
//         street: 'Lomonosova',
//         house: 10
//     }
// }
//
// console.log(Object.entries(user))
// [[ 'name', 'Ivan' ],[ 'age', 32 ],[ 'isMarried', true ],[ 'address', { street: 'Lomonosova', house: 10 } ]]


// function getAllValues(obj) {
//     let values = []
//
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             values = values.concat(getAllValues(obj[key]));
//         } else {
//             values.push(obj[key]);
//         }
//     }
//     return values;
// }
//
// const nestedObj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: 4,
//             g: 5,
//         }
//     }
// }
// const keys = getAllValues(nestedObj);
// console.log(keys); // [ 1, 2, 3, 4, 5 ]


// let map  = new Map()
// map.set('1', 'one')
// map.set(1, 'number')
// map.set(true, 'boolean value')
// console.log(map) // { '1' => 'one', 1 => 'number', true => 'boolean value' }
//
// map.delete(true)
//
// console.log(map) // { '1' => 'one', 1 => 'number' }


// let mapNew = new Map([
//         ['name', 'Ivan'],
//         ['age', 32],
//         ['isMarried', true]
//     ]
// )
//
// console.log(mapNew) // { 'name' => 'Ivan', 'age' => 32, 'isMarried' => true }



// const newSet = new Set(['a', 'b', 'c'])
// console.log(newSet) // { 'a', 'b', 'c' }

// let numbers = [1, 1, 1, 2, 3, 5, 6, 7, 8, 8, 9, 10]
//
// const uniqueNumbers = new Set(numbers)
// console.log(uniqueNumbers) // { 1, 2, 3, 5, 6, 7, 8, 9, 10 }
//
// console.log(uniqueNumbers.size) // 9

