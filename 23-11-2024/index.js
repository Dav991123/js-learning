// const arr = ['Hello', 3, '2', NaN, {},  false, true, 99, 'JS', [], null];

// const str = [];
// const numb = [];
// const boo = [];
// const objects = [];

// for(let i = 0;  i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         str.push(arr[i]);
//     } else if (typeof arr[i] === 'boolean') {
//         boo.push(arr[i]);
//     } else if (typeof arr[i] === 'object'&& arr[i] !== null){
//         objects.push(arr[i])
//     } else if(typeof arr[i] === 'number' && !isNaN(arr[i])) {
//         numb.push(arr[i]);
//     }
// }
// console.log(str);
// console.log(boo);
// console.log(objects);
// console.log(numb);

// console.log(NaN === NaN)


// const arr = [3, 99, 1, 4,];
// let min = arr[0];
// let max = arr[0];

// let count = 0
// for(let i = 1; i < arr.length; i++) {
//     count++
//     if (arr[i] > max) {
//         max = arr[i];
//     } 

//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log(count);
// console.log(min, 'min value');
// console.log(max, 'max value');


// const arr = [1, 2, 3, 4];
// const str = 'javascript';

// const strArr = []

// for(let i = 0; i < str.length; i++) {
//     strArr.push(str[i])
// }

// console.log(strArr)


// const palindromeName = 'Anna';
// const rv = palindromeName.split('').reverse().join('').toLowerCase() === palindromeName.toLowerCase();


// const splitData = palindromeName.split('');
// const reverseData = splitData.reverse();
// const joinData = reverseData.join('');
// console.log(joinData.toLowerCase() === palindromeName.toLowerCase())

const arr = []; //4783
// push
// pop
// unshift
// shift
// reverse
// split
// join

const obj1 = {
    x: 10,
    y: 20,
    z: 30,
}

const obj2 = {
    
};

for(let i in obj1) {
    obj2[i] = obj1[i];
}
obj2.x = 10000000;
console.log(obj2)