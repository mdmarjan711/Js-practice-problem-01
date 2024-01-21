//display mango use loop 39 times
var i = 58;
while( i <= 98 ){
    console.log(i,"Mango lover");
    i++;
}


//display numbers between 58 to 98
for (var i = 58; i<=98; i++){
    console.log(i);
}

//dispaly 1 to 100 all even numbers
for (var i = 0; i<=100; i+=2){
    console.log(i);
}


//dispaly 1 to 100 all odd numbers
for(var i = 1; i<=100; i+=2){
    console.log(i);
}

//create an array for all the mobile phone
var phone = ['nokia', 'samsung', 'oppo', 'lenovo', 'xiomi', 'blackbery'];
console.log(phone);

//display all elements of the by using a while loop
var phone = ['nokia', 'samsung', 'oppo', 'lenovo', 'xiomi', 'blackbery'];
var i = 0;
while(i < phone.length){
    var phones = phone[i];
    console.log(phones);
    i++;
}

//break problem
for(var i = 36; i<=86; i++){
    console.log(i);
    if(i > 59){
        break;
    }
}