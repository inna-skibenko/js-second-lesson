// Присваивание задачи
// задание 1 - записать в коротком виде арифм.действия
let a = 10,
    b = 2,
    c = 12;
let value;

value = a += 10;
value = b *= 18;
value = c -= 10;

let x = 3,
    y = 5,
    z = 2,
    i = 8;

value = a += x;
value = y *= z;
value = i *= 5 * y;
// задание два - переменная в квадрате
let n = 4;
value = n *= n;
// или другой вариант
value = n ** 2;

console. log(value);

// Арифметические задачи
let k = 5; 
console. log( k++ ); // в консоле 5 
console. log( ++k ); // в консоле 7

// Задание 2 - Чтоб узнать четное ли число с помощью оператора % нужно взять остаток от деления на 2. если остаток 0 - число четное

// Логические операторы 
// задание 1
let r = 'hidden';
let str;
if (r === 'hidden') {
    str = 'visible';
} else {
    str = 'hidden';
}

str = r === 'hidden' ? 'visible' : 'hidden';

console. log(str);

// задание 2
let l = 3;
if (l === 0) {
    console. log(1);
} else if (l < 0) {
    console. log('less then a zero');
} else {
    console. log(l *= 10);
}

l === 0 ? console. log(1) : l < 0 ? console. log('less then a zero') :  console. log(l *= 10);

// Switch case
let ab = 'inline';
switch (ab) {
    case 'block':
        console .log('block');
        break;
    case 'none':
        console .log('none');
        break;
    case 'inline':
        console .log('inline');
        break;
    default:
        console .log('other');
 }

//  Преобразование типов

let aa = 0 || 'string';
// 'string'.|| Запинается на правде, а 0 = false, а строка это true
let aa1 = '1' && 'string' ;
// 'string'.&& - запинается на лжи, обе строки являются правдой, поэтому при отсутствии лжи возващается последняя правда
let aa2 = null || 25;
// 25. null - false, число - правда. || - ищет правду
let aa3 = null && 25;
// null. null - false. && - остановился на лжи
let aa4 = null || 0 || 35;
// 35. null, 0 - false, число - правда
let aa5 = null && 0 && 35;
// null. null и 0 - ложь, но && остановился на первой лжи
console .log(aa5);

let t;
t = 12 + 14 +'12';
// 2612 - первые операнды складываются, дальше при сложении со строкой конкатенируются в одну строку
t = 3 + 2 - '1';
// 4. при вычислении строка преобразуется в число. была проведена арифметическая операция
t = '3' + 2 - 1;
// 31. первые два операнда сконкатенировались, так как присутсвует строка и +, дальше идет вычесление и строка '32' преобразовалась в число
t = true + 2;
// 3. true = 1
t = + '10' + 1;
// 11. первый плюс превратил строку в число, и дальше сложение двух чисел
t = undefined + 2;
// NaN. undefined неопреденна 
t = null + 5;
// 5. null прировнялся к нулю и сложился с другим числом
t = true + undefined;
// NaN. undefined неопределена, и при арифметических операциях с чем либо приводит к ответу NaN
console .log(t);