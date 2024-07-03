// -------------------For - Başlangıç Bitiş Arası Sayıların Toplamı-----------------------

// let toplam = 0;
// for (let index = 3; index <= 7; index++) {
//     toplam += index;
// }
// console.log(toplam);

// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)

// let baslangicSayi = Number(prompt("Başlangıc sayısı giriniz."));
// let bitisSayi = Number(prompt("Bitiş sayısı giriniz."));
// let toplam1 = 0;

// for (let index = baslangicSayi; index <= bitisSayi; index++) {
//     toplam1 += index;
// }
// console.log(toplam1);

// -------------------For - Dersi Geçen Öğrenci Sayısı-----------------------
// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

    // let ogrenci1Not = Number(prompt("1. ogrencinin notunu giriniz."));
    // let ogrenci2Not = Number(prompt("2. ogrencinin notunu giriniz."));
    // let ogrenci3Not = Number(prompt("3. ogrencinin notunu giriniz."));
    // let ogrenci4Not = Number(prompt("4. ogrencinin notunu giriniz."));
    // let ogrenci5Not = Number(prompt("5. ogrencinin notunu giriniz."));

    // let ogrenciIsimArray = ["ogrenci1","ogrenci2","ogrenci3","ogrenci4","ogrenci5"];

    // let ogrenciArray = [ogrenci1Not,ogrenci2Not,ogrenci3Not,ogrenci4Not,ogrenci5Not];
    // let toplamNot = 0;

    // for (let i = 0; i < ogrenciArray.length; i++) {
    //     toplamNot += ogrenciArray[i];
    // }
    // let ortalamaNot = toplamNot/5;
    // console.log("Toplam Not: "+toplamNot);
    // console.log("Ortalama Not: "+ortalamaNot);

    // for (let index = 0; index < ogrenciArray.length; index++) {
    //     if (ogrenciArray[index]<60) {
    //         console.log(ogrenciIsimArray[index]+" "+ogrenciArray[index]+" not almış ve " + "dersten kalmistir.");
    //     }
    //     else{
    //         console.log(ogrenciIsimArray[index]+" "+ogrenciArray[index]+" not almış ve " + "dersten gecmistir.");
    //     }
    // }


// -------------------While - Sayı Tahmin uygulaması-----------------------
// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

// let tahminEdilecekSayi = Math.round(Math.random()*10);
// console.log("Tahmin Sayisi: "+tahminEdilecekSayi);
// let tahmin = 1;

// while (tahmin <= 3) {
//     let sayi = Number(prompt(tahmin + ". tahmin ?"));
    

//     if (tahminEdilecekSayi == sayi) 
// 		{
// 		    console.log("tebrikler "+ tahmin + ".tahminde buldunuz");
// 		    break;
// 		}else if(sayi<tahminEdilecekSayi){
//             console.log("Daha büyük bir sayı giriniz.");
//         }
//         else{
//             console.log ("Daha küçük bir sayı giriniz.");
// 	}
//         tahmin++;
// }

// console.log("Oyunumuz bitmiştir.");


// -------------------While - Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Yazacağınız fonksiyonlar içerisinde console.log ifadesi yer almayacak. Çıktıyı görmek için değişkenleri kullanabilir veya fonksiyonları console.log içerisinde çağırabilirsiniz.

// const welcome = function(isim,soyisim){
//     return "merhaba "+isim+" "+soyisim
// }

// console.log(welcome("kerem","ozyon"));

// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile)

// function carpma(a,b){
//     return a*b;
// }
// console.log(carpma(3,4)); 

// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.




// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile)
// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile)
// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
// 7-Yukarıdaki son iki fonksiyonu arrow function olarak yeniden yazın.
// Buradan itibaren yalnızca arrow function kullanıyoruz.
// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.
// 9- Verilen bir dizinin elemanlarını rastgele karıştıran bir fonksiyon yazın.
// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)
// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.
// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.


