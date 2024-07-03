// 1- Bir sayı oluşturun ve bu sayının pozitif, negatif veya sıfır olduğunu kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.

// let sayi = 5;
// if (sayi>0) {
//     console.log("Sayı pozitiftir.")
// }else if(sayi<0){
//     console.log("Sayi negatiftir.")
// }else{
//     console.log("Sayi sıfırdır.");
// }


// 2- İki farklı sayı oluşturun ve bu sayıların büyüklük ilişkisini kontrol eden bir if-else yapısı oluşturun. Her durumu console.log() ile yazdırın.

// let sayi1 = 4;
// let sayi2 = 4;

// if(sayi1<sayi2){
//     console.log("Sayi2 büyüktür.")
// }else if(sayi1>sayi2){
//     console.log("Sayi1 büyüktür");
// }else{
//     console.log("Sayilar eşittir.");
// }

// 3- Bir kelimeyi tersine çevirerek farklı bir değişkene atayın. Orijinal kelimenin palindrom (tersine de aynı olan) olup olmadığını kontrol eden bir if else yapısı oluşturun. Örneğin, "kayak" kelimesi palindromdur, ancak "merhaba" palindrom değildir.
// let kelime = "kerem";
// let tersKelime = kelime.split('').reverse().join('');
// if (kelime === tersKelime) {
//     console.log("Kelime palindrom kelimedir.");
// }else{
//     console.log("Kelime palindrom kelime değildir.");
// }




// 4- VKI Hesabı
//Kullanıcıdan boy,kilo,yaş,cinsiyet
//VKI = kilo/(boy/100)**2
//18,5 düşükse zayıf
//18,5 ile 24,9 arası normal
//25 ile 29,9 arası kilolu
//30 ile 34,9 arası obez
//35 üstü ise aşırı obez
//Konsol Çıktısı = VKI değeriniz = ??? ve bu değerlere göre kilolusunuz/zayıfsınız.

//50yaşın üstü ve erkekse bolbol yürüyüs yapmalısınız!
//60yaş üstü ve kadınsa sebze tüketimini arttırmalısınız!

// let boy = prompt("boy giriniz.")
// let kilo = prompt("kilo giriniz.")
// let yas = prompt("yas giriniz.")
// let cinsiyet = prompt("cinsiyet giriniz. (e/k)")

// let VKI = kilo/(boy/100)**2

// if (VKI < 18.5) {
//     console.log("VKI değeriniz: "+ VKI+" Zayıf");
// }else if(18.5<VKI<24.9) {
//     console.log("VKI değeriniz: "+ VKI+" normal");
// }else if(25<VKI<29.9) {
//     console.log("VKI değeriniz: "+ VKI+" kilolu");
// }else if(30<VKI<34.9) {
//     console.log("VKI değeriniz: "+ VKI+" obez");
// }else if(35<VKI) {
//     console.log("VKI değeriniz: "+ VKI+" asırı obez");
// }

// if (cinsiyet === "e" && yas >50) {
//     console.log("Bol Bol yürümelisiniz.");
// }else if (cinsiyet === "k" && yas >60) {
//     console.log("Bol Bol sebze yemelisiniz.");
// }





// 5- Hesap Makinesi
// Kullanıcıdan iki sayı ve bir işlem türü (+, -, *, /) girmesini isteyin. Girilen işlem türüne göre iki sayı üzerinde matematiksel işlem gerçekleştirin ve sonucu gösterin. Eğer kullanıcı geçersiz bir işlem türü girerse, hata mesajı verin.

// let girilenSayi1 = Number(prompt("Birinci sayıyı giriniz:"));
// let girilenSayi2 = Number(prompt("İkinci sayıyı giriniz:"));

// let islemTuru = prompt("Islem turu gırınız. (+,-,*,/)");

// if (islemTuru ==="+") {
//     console.log("Toplama sonucu: "+(girilenSayi1+girilenSayi2))
// }else if (islemTuru ==="-") {
//     console.log("Cıkarma sonucu: "+girilenSayi1-girilenSayi2);
// }else if (islemTuru ==="*") {
//     console.log("Carpma sonucu: "+girilenSayi1*girilenSayi2);
// }else if (islemTuru ==="/") {
//     console.log("Bolme sonucu: "+girilenSayi1/girilenSayi2);
// }else{
//     alert("Hatalı bir işlem turu sectiniz.")
// }





// Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)

// let ay = prompt("Ay giriniz:")

// switch(ay)
//    {
//       case "ocak":
//          document.write("31 gün");
//       break;
//       case "subat":
//          document.write("29 gün");
//       break;
//       case "mart":
//          document.write("31 gün");
//       break;
//       case "nisan":
//          document.write("30 gün");
//       break;
//       case "mayıs":
//          document.write("31 gün");
//       break;
//       case "haziran":
//          document.write("30 gün");
//       break;
//       case "temmuz":
//          document.write("31 gün");
//       break;
//       case "ağustos":
//          document.write("31 gün");
//       break;
//       case "eylül":
//          document.write("30 gün");
//       break;
//       case "ekim":
//          document.write("31 gün");
//       break;
//       case "kasım":
//          document.write("30 gün");
//       break;
//       case "aralık":
//          document.write("31 gün");
//       break;
//       default:
//          document.write("Lütfen ay giriniz: ocak,subat,mart,nisan,mayıs,haziran,temmuz,ağustos,eylül,ekim,kasım,aralık");
//       break;
//    }





// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. Marka ismini ve renk bilgisini gereken zamanlarda kullanıcıdan prompt olarak isteyin. Kullanıcı, ilgili marka ve renk bilgisini girdikten sonra konsolda Stokta Var veya Yok şeklinde bir mesaj yayınlayın. Stok durumunu elde edebilmek için yaratacağınız bir stokDurumu değişkenini stokta "Var" veya "Yok" olarak caselerin içerisinde güncelleyin. 

// let marka = prompt("Markan seciniz: (audi,bmw,mercedes)");
// let renk = prompt("Renk seciniz: (siyah,kırmızı,beyaz)");

// switch(marka.toLocaleLowerCase().trim())
//    {
        
//             case "audi":
//                 switch(renk){
//                     case "siyah":
//                     console.log("Stokta var");
//                 break;
//                 case "kırmızı":
//                     console.log("Stokta yok");
//                 break;
//                 case "beyaz":
//                     console.log("Stokta var");
//                 break;
//                 default:
//                     console.log("Lütfen doğru renk giriniz.");
//                 break;
//                 }
//             break;

//             case "bmw":
//                 switch(renk.toLocaleLowerCase().trim()){
//                     case "siyah":
//                     console.log("Stokta yok");
//                 break;
//                 case "kırmızı":
//                     console.log("Stokta yok");
//                 break;
//                 case "beyaz":
//                     console.log("Stokta var");
//                 break;
//                 default:
//                     console.log("Lütfen doğru renk giriniz.");
//                 break;
//                 }
//             break;

//             case "mercedes":
//                 switch(renk){
//                     case "siyah":
//                     console.log("Stokta var");
//                  break;
//                  case "kırmızı":
//                     console.log("Stokta yok");
//                  break;
//                  case "beyaz":
//                     console.log("Stokta var");
//                  break;
//                  default:
//                     console.log("Lütfen doğru renk giriniz.");
//                  break;
//                 }
//             break;
        
//       default:
//         console.log("Lütfen dogru marka giriniz");
//       break;
//    }




// 1- myArray isimli bir dizi tanımlayın. 10 elemandan oluşsun ad soyad yaş true sevdiğiniz meyveler, sevdiğiniz yemekler

let myArray = ["kerem", "ozyon",25,true,"karpuz","erik","elma","kebap","sulu köfte","salata"];

// 2- adınızı değiştirin => Cem => Mert. Diziyi konsola yazdırın.
myArray[0] = "Erdal";
console.log(myArray);

// 3- dizinin uzunluğunu konsola yazdırın.
console.log(myArray.length);

// 4- dizinin sonuna bir hayvan ismi ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
let sonaEklemeUzunlukArray = myArray.push("Aslan");
console.log(sonaEklemeUzunlukArray); 

// 5- dizinin başına bir hayvan ekleyin. yeni uzunluk bilgisini bir değişkene atayın(.length kullanmadan), konsola yazdırın.
let basaEklemeUzunlukArray = (myArray.unshift("Kaplan"));
console.log(basaEklemeUzunlukArray);

// 6- dizinin sonundaki elemanı silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let sondanSilmeUzunlukArray = (myArray.pop());
console.log(sondanSilmeUzunlukArray);

// 7- dizinin ilk elemanını silin. silinen elemanı bir değişkene atayın, konsola yazdırın.
let ilkSilmeUzunlukArray = (myArray.shift());
console.log(ilkSilmeUzunlukArray);

// 8- silmiş olduğunuz elemanları ve uzunluk bilgilerini newArray isimli yeni bir dizide toplayın.(sakladığınız değişkenleri kullanın)
let newArray = [sonaEklemeUzunlukArray,basaEklemeUzunlukArray,sondanSilmeUzunlukArray,ilkSilmeUzunlukArray]
console.log(newArray);

// 9- myArray ve newArray dizilerini birleştirin ve yeni değişkenlere atayın. 2 yöntem.
let birlestirilenArray = myArray.concat(newArray);
console.log(birlestirilenArray);

let birlestirilenArray2 = [...myArray,...newArray];
console.log(birlestirilenArray2);//bu daha cok kullanlıyor

// 10- myArray içerisinde eleman olarak "Veli" var mı ?
if (myArray.indexOf("Erdal",0) === -1) {
    console.log("Yoktur.");
}else{
    console.log("Vardır.");
}
// 11- myArray içersinide 4.elemandan itibaren patates var mı?
if (myArray.indexOf("patates",3) === -1) {
    console.log("Yoktur.");
}else{
    console.log("Vardır.");
}

// 12- sevdiğiniz meyvelerden ilkinin indexi nedir?
console.log(myArray.indexOf("karpuz"));

// 13- newArray dizisinin ilk 3 elemanını bir değişkene atayın, konsola yazdırın.
let newArray2 = myArray.slice(0,3);
console.log(newArray2);

// 14- son oluşturduğunuz 3 elemanlı dizinin 2. elemanını silip yerine 2 farklı eleman ekleyin.

newArray2.splice(1,1,"kavun","uzum");
console.log(newArray2);

// 15- son diziniz 4 elemanlı olmuş olmalı. Bu dizi üzerinde 1 eleman silin 1 eleman değiştirin ve bir eleman ekleyin ÖRN: [1, 2, 3, 4] => [1, 'x', 4, 'y']

newArray2.splice(3,1);
console.log(newArray2);
newArray2.splice(3,1,"Avakado");
console.log(newArray2);
newArray2.splice(3,0,"portakal");
console.log(newArray2);

// 16- son dizinizin elemanlarını aralarına "+" koyarak bir stringe çevirin ve konsola yazdırın.

console.log(newArray2.toString());
console.log(newArray2.join(" + "));



