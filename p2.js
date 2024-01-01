//practice problem 1
var fruits =["Apple", "Banana", "Orange", "Mango"];
var indexPosition = fruits.indexOf("Orange");
console.log(indexPosition); // 2

//practice problem 2
var fruits = ["Apple", "Banana", "Orange", "Mango", "Lemon", "Papaya"];
fruits[1] = "Kiwi";
fruits[3] = "Grapes";
 console.log(fruits); //'Apple', 'Kiwi', 'Orange', 'Grapes', 'Lemon', 'Papaya'

//practice problem 3
var fruits = ["Apple", "Banana", "Orange", "Mango", "Lemon", "Papaya"];
console.log(fruits.length); //6

//practice problem 4
var fruits = ["Apple", "Banana","Mango", "Papaya", "Orange"];
fruits.pop();
console.log(fruits); //Orange

//practice problem 5
var fruits = ["Apple", "Banana","Mango", "Papaya"];
fruits.push("Watermelon");
console.log(fruits);//watermelon

//practice problem 5
var fruits = ["Apple", "Banana","Mango", "Papaya"];
fruits.unshift("paineapple");
console.log(fruits);


//practice problem 6
var fruits = ["Apple", "Banana","Mango", "Papaya"];
fruits.shift("");
console.log(fruits);


// practice problem 7
var num1 = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;
if(jane >= 80){
    console.log("Jane A garde");
}
else{
    console.log("fail");
}
if(tom >= 60){
    console.log("Tom B garde");
}
else{
    console.log("fail");
}
if(peter >= 50){
    console.log("Peter C grade");
}
else{
    console.log("fail");
}
if(john >= 40){
    console.log("John D grade");
}
else{
    console.log("fail");
}

//practice problem 8
var a1 = 9;
var a2 = 8;
var a3 = 9;
if(a1 == a2){
    console.log("Not Triangle");
}
else if(a1 == a3){
    console.log("Triangle"); // 9==9
}

// practice problem 9
var h1 = 13;
var h2 = 79;
var h3 = 45;
if(h1 > h2 && h1 > h3){
    console.log(h1);
}
else if(h2 > h1 && h2 >h3){
    console.log(h2);
}
else{
    console.log(h3);
} // output largs number