const parser = new DOMParser();

const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;
// console.log(xmlString)

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const student = xmlDOM.querySelector("student");
const name = student.querySelector("name");
const firstName = student.querySelector("first");
const secondName = student.querySelector("second");
const age = student.querySelector("age");
const prof = student.querySelector("prof");
const nameAttr = name.getAttribute("lang");
// console.log(student)
// console.log(firstName)
// console.log(secondName)
// console.log(age)
// console.log(prof)
// console.log(nameAttr)
const list = xmlDOM.querySelector("list");
const studentNext = list.lastElementChild;
const nameNext = studentNext.querySelector("name");
const firstNameNext = studentNext.querySelector("first");
const secondNameNext = studentNext.querySelector("second");
const ageNext = studentNext.querySelector("age");
const profNext = studentNext.querySelector("prof");
const nameAttrNext = nameNext.getAttribute("lang");
// console.log(studentNext)
// console.log(firstNameNext)
// console.log(secondNameNext)
// console.log(ageNext)
// console.log(profNext)
// console.log(nameAttrNext)

const result = {
    name: firstName.textContent + " " + secondName.textContent,
    age: age.textContent,
    prof: prof.textContent,
    lang: nameAttr
}
const resultNext = {
    name: firstNameNext.textContent + " " + secondNameNext.textContent,
    age: ageNext.textContent,
    prof: profNext.textContent,
    lang: nameAttrNext
}
const arr = [result, resultNext]
// console.log(arr[0].name)
// console.log(arr[0].age)
// console.log(arr[0].prof)
// console.log(arr[0].lang)

// console.log(arr[1].name)
// console.log(arr[1].age)
// console.log(arr[1].prof)
// console.log(arr[1].lang)