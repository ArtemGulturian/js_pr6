"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programminLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan){
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} лет и я владею языками: `;

        languages.forEach(function(lang){
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperiens(plan){
    const {exp} = plan.skills;
    return exp;
}
console.log(showExperiens(personalPlanPeter));

function showProgrammingLangs(plan){
    let str = '';
    const {programminLangs} = plan.skills;
    for (let key in programminLangs){
        str += `Язык ${key} изучен на ${programminLangs[key]}\n`
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

function whoIAm(plan){
    let str = '';
    const {name} = plan;
    const sstr = 'я знаю такие языки: ';
    const {programminLangs} = plan.skills;

    for(let key in programminLangs){
        str += `${key} на ${programminLangs[key]}, `
    }
    return sstr + str;
}
console.log(whoIAm(personalPlanPeter));