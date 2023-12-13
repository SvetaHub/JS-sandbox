console.log("\n\n");

// Типы данных

// int      целое число: 123
// float    число с точкой: 1.23
// bool     целое число: true false
// string   целое число: "123" '123'
// null     пустота
// undefined нет значения
// NaN      не число (например, при делении на ноль)

// ==  !=    - не строгое сравнение, без проверки типа: 1 == '1' даст true
// === !==   - строгое, с проверкой типа: 1 == '1' даст false

// ctrl+space - подсказка

// const неизменная переменная
// let изменяемая переменная
// console.log - вывод в консоль

const data = {
    number: 123,
    float: 1.23,
    string: 'apple',
    boolean: 30 == '3' + '0',
    list: [10,20,10,40,50],
    map: [{ten: 10}, {twenty: 20}, {thirty: 30}],
}

console.log('#1', data.boolean, typeof(data.boolean));

// Условия и if

// Преобразование типов в boolean
// Числа: 0 => false, всё остальное true
// Строки: '' => false, всё остальное true
// Объекты и массивы всегда true 

let value = [];
console.log('\n#2', value.length, typeof(value.length));
if (value.length) {   // эквивалентно: if (Boolean(value) == true)
    console.log('то (условие истина)');
} else {
    console.log('иначе (условие ложь)');
}

value = ''
console.log('\n#3', value, typeof(value));
if (value == 0) {   // if ('' == 0)
    console.log('то (условие истина)');
} else {
    console.log('иначе (условие ложь)');
}

value = '' + 0
console.log('\n#4', value, typeof(value));
if (value == 0) {   // if ('0' == 0)
    console.log('то (условие истина)');
} else {
    console.log('иначе (условие ложь)');
}

value = 11;
value2 = 'x';
console.log('\n#5', value, value2);
if (value == 10 && value2 == 'x') {     // оба выражения должны быть true
    console.log('&& то (условие истина)');
} else {
    console.log('&& иначе (условие ложь)');
}
if (value == 10 || value2 == 'x') {     // одно из выражений должно быть true
    console.log('|| то (условие истина)');
} else {
    console.log('|| иначе (условие ложь)');
}
if (!(value == 10 || value2 == 'x')) {     // оператор НЕ (!) меняет то что в скобках на противоположное
    console.log('! то (условие истина)');
} else {
    console.log('! иначе (условие ложь)');
}
if (value != 10 && value2 != 'x') {     // равноценно предыдущему выражению
    console.log('!2 то (условие истина)');
} else {
    console.log('!2 иначе (условие ложь)');
}

value = false;
value2 = true;
if (value) {
    console.log('asdasd');
    if (value2) {
        console.log('--1');
    } else {
        console.log('--2');
    }
} else {
    if (value2) {
        console.log('--3');
    }
    console.log('---');
}

return;

for(element of data.array) {
    console.log(element);
}
if (data.something == 2) {
    console.log("something равно 2");
} 

let x = 3;
console.log(typeof(x));
if (x === Number('3')) {
    console.log("x равно");
} else {
    console.log("x не равно");
}
Number('3');
String(3);

