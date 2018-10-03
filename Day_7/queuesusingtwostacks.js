'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
let currentLine = 0;
function readLine() {
    return _input[currentLine++];
}

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", _ => {
    _input = _input.trim().split('\n').map(str => str.trim());
   processData(_input);
});
function processData(input) {
    //Enter your code here
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    var n=parseInt(readLine(), 10);
    var arr=[];
    for(let i=0;i<n;i++) {
        var a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
        if(a[0]==1) {
            arr.push(a[1]);
        }
        else if(a[0]==2) {
            arr.shift();
        }
        else {  
                ws.write(arr[0]+"\n");
            }
        
}
} 