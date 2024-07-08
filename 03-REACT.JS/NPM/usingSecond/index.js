import slugify from "slugify";
import randomColorRgb from "random-color-rgb";

console.log("Using Second");
//es6 öelliği olan import kullanımı ıcın package.json dosyasına type eklemek gerekir.
console.log(slugify("erdem tahir ozyon"));
console.log(slugify("erdem tahir ozyon","*"));
console.log(slugify("erdem tahir ozyon","_"));
console.log(slugify("erdem tahir ozyon","/"));

console.log(randomColorRgb());
console.log(randomColorRgb());