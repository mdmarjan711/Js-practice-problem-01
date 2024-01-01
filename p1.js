//to fixed used to float number
var num1 =0.1;
var num2 = 0.2;
var num3 = num1+num2;
console.log(num3.toFixed(4));

var num1 = 25.16156;
var num2 = 1.6650;
var totalNumber = num1 + num2;
totalNumber = totalNumber.toFixed(3);
totalNumber = parseInt(totalNumber);
console.log(totalNumber);

var app1 = 20;
var app2 = 30;
console.log(app1 + app2);

var app3 = 25;
var app4 = 15;
var app5 = app3 - app4;
console.log(app5);

var app6 = 25;
var app7 = 20;
var app8 = app6 / app7;
app8 = app8.toFixed(1);
app8 = parseFloat(app8);

//practice problem 1
var momPrice = 1000;
var orange_applesPrice = 700;
var saveMoney = momPrice-orange_applesPrice;
console.log(saveMoney); //300

//practice problem 2
var a1=75.25;
var a2=65;
var a3=80;
var a4=35.45;
var a5=99.50;
var sum=a1+a2+a3+a4+a5;
sum=sum/5;
sum=sum.toFixed(2)
sum=parseFloat(sum);
console.log(sum); //71.04

// practice Problem 3
var fstLine="I am going to be";
var secondLine="an awesome web developer";
var fullName= fstLine+" "+secondLine;
console.log(fullName); //I am going to be an awesome web developer

//practice problem 4
var num1=119;
console.log(num1%5); //4

//practice problem 5
var num1=313;
console.log(typeof num1); //number
var word="Bangladesh";
console.log(typeof word); //string
var answer=true;
console.log(typeof answer); //boolean
var point=3.70;
console.log(typeof point); //number
