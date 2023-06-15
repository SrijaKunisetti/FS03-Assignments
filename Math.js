var num=9;
console.log(Math.sqrt(num));
var random= Math.random();
console.log(random);
var result= random*10;
console.log(Math.round(result));
var today= new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
today.setFullYear(2022);
var month=today.setMonth(12);
var date=today.setDate(31);
console.log(month);
console.log(date);
var birthday= new Date();
birthday.setFullYear(2000,2,20);
console.log(today.getTime()-birthday.getTime());


