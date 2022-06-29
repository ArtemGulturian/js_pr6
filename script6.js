"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string'){return 'Ошибка';}
    return str.split('').reverse().join('');
    
    //let reversed = '';

    // for (let i = str.length -1; i >= 0; i--){
    //     reversed += str[i];
    // }
    //return reversed;
}
console.log(reverse(someString));

//---

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i){
        if (curr !== missingCurr){
            str += `${curr}\n`;
        }
    });
    return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));