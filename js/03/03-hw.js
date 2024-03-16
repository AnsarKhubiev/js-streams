/*// 1)	Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.
const isPrime = (num => {
    for (let i = 2; i < num; i++) {
       if (num % i === 0) return console.log(false);
    }
    return console.log(num !== 1);

})
isPrime(0); // false
isPrime(1); // false
isPrime(17); // true
isPrime(10000000000000); // false*/


// // 2)Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.
// const factorial = (num) => {
//     let firstNum = 1;
//     for (let i = 1; i <= num; i++){
//         firstNum *= i;
//     }
//     return console.log(firstNum);
// }
//
// factorial(0); // 1
// factorial(1); // 1
// factorial(6); // 720


/*//3)Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.
const fib = (number) => {
    if (number <= 1) return console.log(number);
    let num1 = 0;
    let num2 = 1;
    let num;
    for (let i = 2; i <= number; i++) {
        num = num1 + num2;
        num1 = num2;
        num2 = num;
    }
    return console.log(num);
}
fib(0); // 0
fib(1); // 1
fib(10); // 55
fib(20); // 6765*/


/*// 4)Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
const isSorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) return console.log(false);
    }
    return console.log(true)
}

isSorted([])                        // true
isSorted([-Infinity, -5, 0, 3, 9])  // true
isSorted([3, 9, -3, 10])            // false*/


/*// 5)Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки. Не пользуйтесь встроенной функцией reverse().
const reverse = (arr) => {
    let reversedArr = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArr.unshift(arr[i]);
    }
    console.log(reversedArr.join(""));
}

reverse('')                         // ''
reverse('abcdef')                   // 'fedcba'*/



/*//6)Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того, является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию в строке пробелов).
const isPalindrome = (text) => {
    const str = text.toLowerCase().replace(/\s/g, "");
    const reversedStr = str.split("").toReversed().join("");
    console.log(str === reversedStr)

};
isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
isPalindrome('abcd')                            // false
isPalindrome('A man a plan a canal Panama')     // true*/



/*//7)Реализуйте функцию isBalanced() которая принимает строку и возвращает true или false, указывая на то, сбалансированы ли фигурные скобки, находящиеся в строке.
const isBalanced = (str) => {
    const arr = str.split("");
    const filteredArr = arr.filter(item=> item === "{" || item === "}");
    const arrWithOpenBraces = filteredArr.filter(el => el === "{");
    const arrWithCloseBraces = filteredArr.filter(el => el === "}");

    if (filteredArr[0] === "}" || filteredArr[-1] === "{") return console.log(false);
    return console.log(arrWithOpenBraces.length === arrWithCloseBraces.length);
}


isBalanced('}{')                      // false
isBalanced('{{}')                     // false
isBalanced('{}{}')                    // true
isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }')       // false
isBalanced('foo { bar } }')           // false*/






