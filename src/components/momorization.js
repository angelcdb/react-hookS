import React from 'react';

const memo = [10];

function memoFactorial(n){
    if(n === 1){
        console.log(`return 1;`);
        return 1;
    }else if(memo[n]){
        console.log(`memoFactorial(${n+1} -1) esta memorizado en memo[${n}] (${memo[n]})`);
    }else if(!memo[n]){
        console.log(`memo[${n}] = ${n} * memoFactorial(${n} -1)`);
        memo[n] = n * memoFactorial(n -1);
    }
    return memo[n];
}
