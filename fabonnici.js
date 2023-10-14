function fabo(num, nu){
console.log(0);
do{
var me = num;
 num += nu;
 console.log(num);
 nu = me;
}while(num >= 0 && num < 100);
}

fabo(0, 1)