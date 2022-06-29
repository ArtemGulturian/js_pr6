"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    if (arr.length === 0){
        str = 'Семья пуста';
    } else if (arr.length !== 0){str = 'Семья состоит из: '}

    arr.forEach (member => {
        str +=  `${member} `;
    });

    return str;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

console.log(standardizeStrings(favoriteCities));