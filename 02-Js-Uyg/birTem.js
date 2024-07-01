// // -- Birkaç cümleden oluşan bir hikaye yazıp myStory isimli bir değişkene atayalım. İçerisinde tekrar eden birkaç kelime bulunsun.
// let myStory = "Yalnızca iyi değil, mükemmel iyi günler dilerim."
// console.log(myStory);
// // 1- Yazdığınız hikayenin uzunluğunu yazdırın.
// console.log(myStory.length);
// // 2- Hikayenin index sayısının uzunluğunu bulun.
// console.log(myStory.length - 1);
// // 3- string içerisinde bir kelimenin indexini ve son indexini sorgulayın.
// console.log(myStory.indexOf("iyi"));
// console.log(myStory.lastIndexOf("iyi"));
// // 4- İlk 15 karakterini yazdırın. ( 2 farklı yöntem kullanarak)
// console.log(myStory.substring(0,15));
// console.log(myStory.slice(0,15));
// // 5- 15. karakterden sonrasını yazdırın. ( 2 farklı yöntem kullanarak)
// console.log(myStory.slice(14));
// console.log(myStory.substring(14));
// // console.log(myStory.substr(5,5));

// // 6- Son 5 karakteri yazdırın. ( 2 farklı yöntem kullanarak)
// console.log(myStory.substring(myStory.length - 5));
// console.log(myStory.slice(-5));
// console.log(myStory.substring(myStory.length - 5, myStory.length));

// // 7- 11. karakterden sonra gelen 10 karakteri yazdırın.
// console.log(myStory.substring(11,21));
// console.log(myStory.substring(11,(11+10)));
// console.log(myStory.substr(11,10));
// // 8- Son 5 karakter haric hikayenizi yazdırın.
// console.log(myStory.substring(0,myStory.length - 5 ));
// console.log(myStory.slice(0,-5));
// // 9- Hikayeniz, seçeceğiniz bir kelimeyi içeriyor mu diye kontrol edin.
// console.log(myStory.includes("iyi"));
// console.log(myStory.includes("kötü"));

// // 10- Hikayenizdeki tüm "i" karakterlerini "ı" ya çevirin.
// console.log(myStory.replaceAll("i","ı"));
// // 11- Hikayenizdeki ilk "a" karakterini "e" ye çevirin.
// console.log(myStory.replace("a", "e"));
// // 12- Bütün metni büyük harfe çevirin.
// console.log(myStory.toUpperCase());
// // 13- Bütün metni küçük harfe çevirin.
// console.log(myStory.toLowerCase());

// // -----------------------------------------------
// // 14- prompt üzerinden kullancıdan bir isim isteyin ve bir değişkene atayın.
// let userName = prompt("İsminizi giriniz.")
// //   a- Ardından bu değişkeni kullanarak console'a "Hoşgeldin, isim" şeklinde yazdırın.
// console.log("Hoşgeldin, " + userName);
// //   b- Yukarıdaki çıktının aynısını template litteral kullanarak konsola yazdırın. Örn: console.log(degisken) => "benim adım: Cem"  
// let degisken = `Benim adım: ${userName.trim()}`
// console.log(degisken);
// // 15- Kullanıcıdan gelen stringin başına ve sonuna boşluk koyun. 
// //   a- Başındaki boşlukları kaldırın.
// console.log(userName.trimStart());
// //   b- Sonundaki boşlukları kaldırın.
// console.log(userName.trimEnd());
// //   c- Boşluksuz halini yeni bir değişkene atayarak konsola yazdırın.
// let trimedDegisken = degisken
// console.log(trimedDegisken);
// // 16- 14. sorudaki çıktıyı uygun metotları kullanarak "BENİM Adım: İsim" yazacak hale getirin.
// console.log(trimedDegisken.substring(0,7).toUpperCase() + trimedDegisken.substring(7,11)+ " " + userName.trim());
// // 17- Ekrana tırnak içindeki mesajı ya da değişkendeki değeri yazdıran bir pop-up oluşturun. "Ara vakti. İyi dinlenmeler"


// 1-) negatif bir sayının mutlak değerini bulun ve yeni bir değişkene atayın. Değişkeni konsola yazdırın.
let sayi = -3;
let mutlakSayi = Math.abs(sayi);
console.log(mutlakSayi);
// 2-) ondalıklı bir sayıyı yukarıya yuvarlayın.
let sayi2 = 3.234;
let yukariSayi = Math.ceil(sayi2);
console.log(yukariSayi);
// 3-) ondalıklı bir sayıyı aşağıya yuvarlayın.
let sayi3 = 3.234;
let asagiSayi = Math.floor(sayi3);
console.log(asagiSayi);
// 4-) 6 15 -7 0 80 -35 sayıları arasındaki en büyük sayıyı bulun.
let enBuyukSayi = Math.max(6,15,-7,0,80,-35);
console.log(enBuyukSayi);
// 5-) 6 15 -7 0 80 -35 sayıları arasındaki en küçük sayıyı bulun.
let enKucukSayi = Math.min(6,15,-7,0,80,-35);
console.log(enKucukSayi);
// 6-) ondalıklı bir sayıyı, virgülden sonra 3 hanesi görünecek şekilde yuvarlayın.
let virgulluSayi = 6.12312;
console.log(virgulluSayi.toFixed(3));
// 7-) bir sayının karekökünü bulun.
let karekokluSayi = Math.sqrt( 36 );
console.log(karekokluSayi);    
// 8-) bir sayının üstel fonksiyonunu bulun. (x üzeri y)
let x =3;
let y = 4
let ustelSayi =x**y;
console.log(ustelSayi); 
// 9-) 123.456789 sayısını toplamda 6 hanesi görünecek hale getirin.
let virgulluSayi2 = 6.12312;
console.log(virgulluSayi2.toPrecision(6));
// 10-) 123.456789 sayısının ondalıklı kısmını kaldıracak şekilde tam sayı haline getirin.
console.log(Math.trunc(virgulluSayi2));
// 11-) Rastgele bir sayı üretin. (0 ile 100 arasında)
console.log(Math.round(Math.random()*100));
 