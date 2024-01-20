var items = ['bottle', 'pen', 'book', 'mango', 'mouse', 'note'];
for(var i = 0; i <= items.length; i++){
    var item = items[i];
    console.log(item);
}

for(var i = 1; i <=15; i++){
    console.log(i);
    if(i > 8){
        break;
    }
}
var numbers =[45, 50, 30, 56, 20, 10, 26, 35, 22, 65, 19];
for(var i = 0; i <= numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}

var numbers =[45, 50, 30, 56, 20, 10, 26, 35, 22, 65, 19];
for(var i = 0; i <= numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        break;
    }
    console.log(number);
}
