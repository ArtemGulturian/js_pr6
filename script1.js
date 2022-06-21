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
//console.log(options.name);
//delete options.name;
//console.log(options);

for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}