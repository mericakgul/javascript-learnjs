export const rectPerimeter = (x, y) => 2*(x + y);

export const rectArea = (x, y) => x * y;

export const triArea = (x, y) => (x * y)/2;

export const ringArea = (x, y) => Math.PI*(Math.pow(y, 2) - Math.pow(x, 2));

export const f2c = (x) => (5/9)*(x-32);

export const c2f = (x) => (9*x)/5 + 32;

export const makeName = (x, y) => y.concat(', ', x);

export const ellide = (S, N) => S.substring(0,N).concat('...');

export const longer = (s1, s2) => {
    if(s1.length >= s2.length){
        return s1;
    }
    else return s2;
};

export const mid3 = (a, b, c) => {
    if (a > b){
        if (b > c){
            return b;
        }
        else if (a > c){
            return c;
        }
        else
            return a;
    }
    else {
        if (c > b){
            return b;
        }
        else if (c > a){
            return c;
        }
        else
            return a;
    }
};

export const lastFirst = (obj) => {
    if ( obj.first !== undefined){
        if( obj.last !== undefined){
            return obj.last.concat(', ', obj.first);
        }
        else
            return obj.first;
    }
    else if ( obj.last !== undefined){
        return obj.last;
    }
    else
        return '';
};

export const subArray = (mainArray, subArray) => subArray.map(element => mainArray[element]);

    // Can we find another solution with filter method?


export const over21 = persons => persons.filter(object => object.age >= 21);

export const product = numbers => numbers.reduce((firstEl,secondEl) => firstEl * secondEl);

// [1, 2, 2, 4, 2, 1, 3, 4]
export const getRepeats = (randomNumbers) => {
    // {'1': 2, '2': 3....}
    const groupedByNumbers = randomNumbers.reduce((groupByNumbersTimesUsed, randomNo) => {
        // groupByNumbersTimesUsed[randomNo] = (groupByNumbersTimesUsed[randomNo])
        //     ? groupByNumbersTimesUsed[randomNo] + 1
        //     : 1;
        const key = `key-${randomNo}`;
        groupByNumbersTimesUsed[key] = (groupByNumbersTimesUsed[key] || 0) + 1;
        return groupByNumbersTimesUsed;
    }, {});

    return Object.entries(groupedByNumbers) /// [[key-1, 2], [key-2, 3]]
        .filter(([_, value]) => value > 1) // [[key-1, 2]]
        .map(([key, _]) => Number(key.replace('key-', '')));

        // Second solution
        // Object.entries [[1, 2], [2, 3]]
        // return Object.keys(groupedByNumbers) /// [key-1, key-2]
        //     .filter(key => groupedByNumbers[key] > 1) // [key-1]
        //     .map(value => Number(value.replace('key-', '')));
}

// export const getRepeats = (arry) => {
//     const newArray = [...arry];
// //  const newArray = arry.slice(); // or we could use this
//     const sortedArray = newArray.sort((firstEl, secondEl) => firstEl - secondEl);
//     let repeatedElements = [];
//     for (let i = 0; i < sortedArray.length; i++) {
//         // if(sortedArray[i] != sortedArray[i+1] && sortedArray[i] != sortedArray[i-1]){  This condition returns non-repeated elements
//         // if(sortedArray[i] != sortedArray[i+1]){  This condition returns each element only once
//         if(sortedArray[i] === sortedArray[i+1] && repeatedElements.includes(sortedArray[i]) === false){ //This condition returns the repeated elements as asked
//             repeatedElements.push(sortedArray[i]);
//         }
//     }
//     return repeatedElements;
// }


// export const getRepeats = arry => Array.from(arry).filter((v, i, a) => a.indexOf(v) !== i);
// This didn't work properly but this is still a nice approach. Because  indexOf returns the first element run into, we can check if there is more than one of the same element.


export const aboveAverage = (examList) => {
    const lengthOfList = examList.length;
    if (lengthOfList > 0) {
        const sumOfScores = examList.map(item => item.score).reduce((firstItem, secondItem) => firstItem + secondItem);
        const averageScore = sumOfScores / lengthOfList;
        return examList.filter(item => item.score > averageScore);
    }
    else return [];
}

export const reverseNumber = (num) => parseInt(num.toString().split('').reverse().join(''));
// export const reverseNumber = (num) => Number(num.toString().split('').reverse().join('')); This is second way. Number() is used instead of parseInt().
// export const reverseNumber = (num) => ~~num.toString().split('').reverse().join(''); //This is third way. ~~ is used instead of parseInt().
// export const reverseNumber = (num) => +num.toString().split('').reverse().join(''); This is fourth way. + is used instead of parseInt().
// export const reverseNumber = (num) => parseInt(`${num}`.split('').reverse().join('')); This is another way to convert number to string. `${num}` is used instead of num.toString()

export const isWordAnagram = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('');

export const isPhraseAnagram = (str1, str2) => str1.replaceAll(/\s/g, '').toLowerCase()
    .split('')
    .sort().join('') === str2.replaceAll(/\s/g, '').toLowerCase().split('').sort().join('');

export const longestWords = (sentence) => sentence !== '' ? sentence
    .split(' ')
    .sort((firstEl, secondEl) => secondEl.length - firstEl.length)
    .filter((x,i,a) => x.length === a[0].length) : [];


export const moduleTitles = () => Array.from(document.querySelectorAll('.module-title')).map(h => h.innerText);

export const goPurple = () => 'Go Purple';

export const copycat = (n) => {
    if(n===1) return 100;
    else if (n===2) return 'hello!';
    else if (n===3) return [1, 2, 3];
}




// [{name: 'Henk', age: 34}, {'name': 'Meric', age: 34}].map(obj => obj.name) // ['Henk', 'Meric']
// .map2
// map2(array, callback){ // ['Henk', 'Meric']


// }

function map2(myArray, myCallback) {
    let result = [];
    for (let i = 0; i < myArray.length; i++) {
        result.push(myCallback(myArray[i], i, myArray))
    }
    return result;
}

// { foo: { dsadsa: '123' } }

const myCallback = (obj, index, current) => obj.name;

const myCallback2 = (property) => (obj, index, current) => obj[property]
// console.log('map', [{name: 'Henk', age: 34}, {'name': 'Meric', age: 34}].map(myCallback));
console.log('map2', map2([{name: 'Henk', age: 34}, {'name': 'Meric', age: 32}], myCallback));


const filterOnMeric1 = (name) => name === 'Meric';

function filterOnMeric2 (name){
    return name === 'Meric';
}
const filterOnMeric1Advanced = givenName => name => name === givenName;

function filterOnMeric2Advanced (givenName) {
    return function (name) {
        return name === givenName;
    };
}

const lala = [{name: 'Henk', age: 34}, {'name': 'Meric', age: 34}]
        .map(myCallback)
        .filter(filterOnMeric2Advanced('Meric'));
console.log('lala', lala)













