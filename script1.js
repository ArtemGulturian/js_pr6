"use strict";

const options = {
    name: 'test',
    width: 1024,
    hight: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
//console.log(Object.keys(options).length);

//console.log(options["colors"]["border"]);
//delete options.name;
//console.log(options);
//---

let counter = 0;
/*
for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }    
}
console.log(counter);*/

for (let key in options){
    counter++;
    console.log(key);
}
console.log(counter);
