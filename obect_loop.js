var shopingChart = {
    book: 5,
    pan: 8,
    burger: 25,
    name: 'marjan',
    class: 16,
    roll: 250,
}
console.log(shopingChart);

var books = shopingChart['burger'];
console.log(books);

var propertyname = 'class';
var prpertyvalu = shopingChart[propertyname];
console.log(prpertyvalu, propertyname);

var keys = Object.keys(shopingChart);
console.log(keys);
//looping object
// for(var i = 0; i <= keys.length; i++){
//     var propertyName = keys[i];
//     var propertyValue = shopingChart[propertyName];
//     console.log(propertyName, propertyValue);
// }
//for in loop
for (var propertyName in shopingChart) {
  var propertyValue = shopingChart[propertyName];
  console.log(propertyName, propertyValue);
}

// switch case
var color = 'purple';
switch(color){
   case 'blue':
    console.log('your blue');
    break;
    case 'red':
    console.log("your red");
    break;
    case 'green':
    console.log('your green');
     break;
    case 'orange':
    console.log('your orange');
     break;
    case 'purple':
    console.log('your purple');
     break;
     default:
    console.log('No color');

}
