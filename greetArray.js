const namesArr = [
    "Jimmy", "Lisa", "Fred", "Bort", "Mary"
];
const namesArr2 = [
    "Heather", "John", "Alan", "Danny"
];

// for (let i = 0; i < namesArr.length - 1; i++) {
//     console.log(`Hello, ${namesArr[i]}`);
// }

//wrap this forEach in a function
function greetNames(arr) {
    arr.forEach((name) => {
        console.log(`Hello, ${name}`);
    });
}

// greetNames(namesArr);
// greetNames(namesArr2);
global.namesArr = namesArr;
global.namesArr2 = namesArr2;
global.greetNames = greetNames;