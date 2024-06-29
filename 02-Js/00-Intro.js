// console.log("External Js Çalıştı!");
/*
Çok satırlık yorum
*/

//veri Çıkış yapıları
console.log("BilgeAdam-1");
// alert("...");
// console.log("BilgeAdam-2");
console.warn("Uyarı Mesajı");
console.error("Error Mesajı");
console.info("Bilgilendirme Mesajı");
console.table(["bilgeAdam","Akademi","Boost","ANK16"]);
console.table({id:1,fullName:"Erdem Sabri Beşik",birth:1992});
console.clear();

//veri giriş
// prompt("Adınız:...");
//html input


//variables
console.log(isim);//undefined
var isim = "Erdem Sabri";
console.log(isim);
var isim = "Eren";
console.log(isim);
isim = "Yağmur";
console.log(isim);

// var database = "12345"
// console.log(database);
// //10000satır kod
// var database = "asdqwert"
// console.log(database);

//ES6 var yerine let, const değişken tanımlamaları geldi.

// console.log(surname);
let surname = "Beşik";
console.log(surname);
// let surname = "Beşiroğlu";
surname = "Beşiroğlu";
console.log(surname);

// console.log(PASSWORD);
const PASSWORD = "qwerty"
console.log(PASSWORD);
// const PASSWORD = "123";
// PASSWORD = "123"
console.clear();

//YazımMetotları
//camelCasingMethot -> js,swift userName,userJobInfos
//kebab-case -> css mb-3, card-body
//snake_case -> python user_name
//PascalCase -> UserName...

//Data Types
//1)Primitive Data Types
//2)Referance Data Types

//String
let string = "BilgeAdam Akademi";
console.log(string, typeof string);
//!! propmt ve inputlardan herzaman string veri gelir.

// let userName = prompt("Adınızı giriniz:");
// console.log(userName,typeof userName);

let course = "Ank-16 Boost";

console.log("Bu eğitim "+string+" 'de dir ve bu sınıf "+course+" sınıfıdır.");
console.log("Bu eğitim",string,"'de dir ve bu sınıf",course,"sınıfıdır.");
//ES6 Template Literals(backtips ``)
console.log(`Bu eğitim ${string} 'de dir ve bu sınıf ${course} sınıfıdır.`);

//Number
let number = 1992;
number = 19.92
console.log(number, typeof number);
console.log(5+5);
console.log("5"+5);
console.log(5+"5");
console.log("5"+"5");
console.log("5"*"5");
console.log("5"/"5");
console.log("5"-"5");
console.log("5"-"5a");
console.clear();
let first = 10;
let second = 2;

console.log(first+second);
console.log(first-second);
console.log(first*second);
console.log(first**second);
console.log(first%second);




