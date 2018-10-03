'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the andXorOr function below.
 */
function andXorOr(a) {
    /*
     * Write your code here.
     */
    var size=2;
  
    var max=0;
    //a.sort();
    //console.log(a);
    while(size<=a.length){
        
        for(let i=0;i<=a.length-size;i++) {
            var arr=new Array();
            for(let j=0;j<size;j++) {
                arr.push(a[j+i]);
            }
            var value=smallest(arr);
            if(value>max) {
                max=value;
            }
        }
        size++;
    }
    return max;
}
function smallest(arr) {
    var second;
    var first=Number.MAX_SAFE_INTEGER;
    second=Number.MAX_SAFE_INTEGER;
  
    for(let i=0;i<arr.length;i++) {
        if(arr[i]<first) {
            second = first;
            first = arr[i];
        }
        else if(arr[i] < second && arr[i]!=first)
        second = arr[i];
    }

    var value=(((first&second)^(first|second))&(first^second));
    
    return value;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const aCount = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = andXorOr(a);

    ws.write(result + "\n");

    ws.end();
}
