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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    var hour = s.slice(0,-2);
    var period = s.slice(-2);
    var arr = hour.split(':');
    var b = 0;
    if (period == 'AM') {
        if (arr[0] == '12') {
            arr[0] = '00';
        }
        
    }
    else if (period == 'PM') {
        if (arr[0] != '12') {
            arr[0] = Number(arr[0]) + 12;
        }
       
    }

    return arr.join(':');

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
