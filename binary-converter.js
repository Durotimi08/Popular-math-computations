var array = [];
function convert(num, base){
    do{
        var digit = num % base;
        var me = num-digit;
        num = me/base;
        array.push(digit);
      }while(num > 0);
}
convert(5, 2);
array.reverse();
let sent = array.join("");
console.log(sent);
