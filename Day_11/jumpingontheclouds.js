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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    var e=100;
   /* var thunderheadscount=0;
    for(var i in c) {
        if(c[i]==1)
            thunderheadscount++;
    }
    var cumulus=c.length-thunderheadscount;
    var result=e-(thunderheadscount*k);
    return result;*/
    for(var i=0;i<c.length;) {
        var j=0;
        while(j<k){
            
            if((j==k-1)&&(c[i]==1)) 
                e=e-2;
            j++;
        }
        e=e-1;
        i=i+k;
    }
return e;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c, k);

    ws.write(result + "\n");

    ws.end();
}
