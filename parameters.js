function add (num1, num2){
   // console.log('Two parametes',num1, num2);
    var sum = num1 + num2;
   // console.log(sum);
}
add (50, 100);

function add2 (a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
    var sums = a+b+c+d+e+f;
    console.log(sums);
}
add2 (5, 6, 7, 8, 9, 2);


function add3(num1, num2){
    return (num1 + num2);
}
var results = add3(5,6);
console.log(results);

function sinGara(money) {
    var sinegaraPrice = 10;
    var result = money / sinegaraPrice;
    return result;
}
var food = sinGara(200);
console.log(food);

function getAverage (as1, as2, as3){
    var gets = as1+as2+as3;
    var reminder = gets / 3;
    return reminder;
}
var result = getAverage(20, 25, 30);
console.log(result);