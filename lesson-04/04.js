/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        result = result + str[i] + str[i];
        // или: result += str[i] + str[i];
    }
    
    return result;
}

// Проверка
console.log(doubleEachCharacter('hello'));      // 'hheelllloo'
console.log(doubleEachCharacter('abc'));        // 'aabbcc'
console.log(doubleEachCharacter('123'));        // '112233'
console.log(doubleEachCharacter(''));           // ''
console.log(doubleEachCharacter('a'));          // 'aa'
console.log(doubleEachCharacter('Hi!'));        // 'HHii!!'

