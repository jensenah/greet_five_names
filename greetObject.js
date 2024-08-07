const greet = require('./greet.js');
const goodbye = require('./goodbye.js');

const nameObj = {
    name1: "Jimmy",
    name2: "Lisa",
    name3: "Fred",
    name4: "Bort",
    name5: "Mary"
}

const nameObj2 = {
    name7: "Jon",
    name8: "Ray",
    name9: "Molly",
}


// for (let name in nameObj) {
//     greet(nameObj[name]);
// }
function saluteNames(obj) {
    for (let name in nameObj) {
        greet(obj[name]);
        goodbye(obj[name]);
    }
}
saluteNames(nameObj);
saluteNames(nameObj2);