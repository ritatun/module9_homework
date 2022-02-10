/* Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль. */

/* const jsonStr = `{
"list": [
{
"name": "Petr",
"age": "20",
"prof": "mechanic"
},
{
"name": "Vova",
"age": "60",
"prof": "pilot"
}
]
}`;
const jsonObj = JSON.parse(jsonStr);
// console.log(jsonObj)
const list = jsonObj.list

const result = {
name: jsonObj.list[0].name,
age: Number(list[0].age),
prof: list[0].prof,
}
const resultNew = {
name: jsonObj.list[1].name,
age: Number(list[1].age),
prof: list[1].prof,
}
const arr = [result, resultNew]
const obj = {
list: arr
}
console.log(obj) */

/* вариант 2 */

const jsonStr = `{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}`;
const jsonObj = JSON.parse(jsonStr);
// console.log(jsonObj)
const list = jsonObj.list;

const arr = [];
for (i in jsonObj.list) {
    result = {
    name: jsonObj.list[i].name,
    age: Number(list[i].age),
    prof: list[i].prof,
}

arr.push(result)

}

const obj = {
    list: arr
}
console.log(obj)