'use strict';

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
    var n = arr.length;
    var p=0, g=0, z=0;
    for (var i = 0; i < n; i++){
        if (arr[i] > 0)
            ++p;
        else if (arr[i] < 0)
            ++g;
        else if (arr[i] == 0)
            ++z;
           
    }
    
    process.stdout.write(""+ p/n+ "\n" +g/n+ "\n"+ z/n );
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
