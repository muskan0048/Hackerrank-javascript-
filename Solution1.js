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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var app = 0, orr = 0;
    for (var i = 0; i < apples.length; i++) {
        var ba = (Number(apples[i]) + a);
       // process.stdout.write("" + ba);
        if (ba >= s && ba <= t)
            ++app;
    }
    //process.stdout.write("\n " + s);
   // process.stdout.write("\n" + t);
    for (var j = 0; j < oranges.length; j++) {
        var ab = (Number(oranges[j]) + b);
        // process.stdout.write("" + ba);
        if (ab >= s && ab <= t)
            ++orr;
    }

    process.stdout.write("" + app+ "\n"+ orr);
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
