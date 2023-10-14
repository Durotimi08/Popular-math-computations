const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`> first term: `, a => {
     second(a);
});


function second(a){
    readline.question(`> common ratio: `, d => {
    third(a, d);
});
}

function third(a, d){
    readline.question(`> which term is being called for: `, e => {
    solve(a, d, e)
    readline.close();
});
}

function solve(a, d, e){
    let firs = parseInt(a);
    let fir = parseInt(d);
    let fi = parseInt(e);
    let ans = firs*(fir**(fi-1));
    console.log(ans);
}

