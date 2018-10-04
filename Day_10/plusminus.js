'use strict';
const fs = require('fs');
 const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
   var positive=0,negative=0,zero=0;
    for( var i in arr) {
        if(arr[i]>0)
            positive++;
        else if(arr[i]<0) {
            negative++;
        }
        else {
            zero++;
        }
    }
     ws.write((positive/arr.length).toPrecision(6)+"\n");  
    ws.write((negative/arr.length).toPrecision(6)+"\n");  
    ws.write((zero/arr.length).toPrecision(6)+"\n");  
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
