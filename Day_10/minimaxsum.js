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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    var sum=0;
    for(var i in arr) {
        sum=sum+arr[i];
    }
    var sumof4array=[];
    for(var i in arr) {
        var sumof4=sum-arr[i];
        sumof4array.push(sumof4);
    }
    ws.write(Math.min.apply(null,sumof4array)+" ");
    ws.write(Math.max.apply(null,sumof4array)+"\n");
    
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
