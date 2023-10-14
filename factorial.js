function factor(n){
    if(n === 1){
        return 1;
    }else{
     return fact = n * factor(n-1);
    }
}
console.log(factor(90));