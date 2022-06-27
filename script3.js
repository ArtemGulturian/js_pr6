"use strict";

// let a = 5, b = a;
// b = b + a;
// console.log(b);
// console.log(a);

//------------------

// const obj = {
//     a: 5,
//     b: 1
// };
// console.log(obj);
// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);

//------------------

// function copy(mainObj){
//     let objCopy = {}

//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c:{
//         x: 7,
//         y: 4
//     }
// }

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// //-------------------

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);
// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = '345y6thgfde';
// console.log(newArray);
// console.log(oldArray);

//-------------------------

// const video = ['youtube', 'vimoe', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);
// //-------------
// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);
// //------------
// const arr = ["a", "b"];
// const newAar = [...arr];
// console.log(newAar);
// //-------------
// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};
// console.log(newObj);

//-------

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}