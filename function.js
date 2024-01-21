function frist(){
    console.log('bus');
    console.log('track');
    console.log('bicycle');
}  //frist function
frist();
console.log('..............');
frist();
console.log('..............');
frist();

function food(tk){
     console.log('burger dam 100 tk');
}
food(100);

function food(tk, marjanNumber, name){
    var totalPrice = tk*marjanNumber;
    console.log('product name =', name);
    console.log('1 Burger Price =', tk);
    console.log('Pics Needed =',marjanNumber);
    console.log('Total Burger Price =', totalPrice,'TK');
}

var backendData = [
    {
        'name':'Product 1 test',
        'price': 500,
        'quantity': 2,
    },
    {
        'name':'Product 2 Test',
        'price': 200,
        'quantity': 5,
    },
    {
        'name':'Product 3 marjan',
        'price': 2500,
        'quantity': 3,
    }
]
backendData.forEach(function (value, index) {
food(value.price, value.quantity, value.name)
 });
