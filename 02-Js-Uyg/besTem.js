// 1- myObject isimli boş bir nesne oluşturun.

const myObject = {};
const myObject2 = {};

// 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin

myObject.ad = "asdasd";
myObject.yas = 25;
myObject.cinsiyet = "erkek";

myObject2.ad = "erdem";
myObject2.yas = 25;
myObject2.cinsiyet = "erkek";
myObject2.abc = "abc";


console.log(myObject);

// 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.

delete myObject.cinsiyet;
console.log(myObject);

// 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.

const kopyaMyobject2 = {...myObject}
console.log(kopyaMyobject2);
const kopyaMyobject = Object.assign({},myObject,myObject2);
console.log(kopyaMyobject);

// 5- nesnenizin anahtarlarını konsola yazdırın.

console.log(Object.keys(kopyaMyobject));

// 6- nesnenizin değerlerini konsola yazdırın.

console.log(Object.values(kopyaMyobject));

// 7- nesnenizin tüm anahtar-değer çiftlerini konsola yazdırın.

 console.log(Object.entries(kopyaMyobject));

// Object.entries(kopyaMyobject).forEach(([anahtar, deger]) => {
//     console.log(`${anahtar}: ${deger}`);
//   });


// 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin

// if (kopyaMyobject.hasOwnProperty('isim')) {
//     console.log("isim anahtarı var.");
//   } else {
//     console.log("isim anahtarı yok.");
//   }

  
  console.log(kopyaMyobject.hasOwnProperty('isim'));

  console.log("");

// 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.

Object.freeze(kopyaMyobject);

// 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.

Object.seal(kopyaMyobject); //guncellenmesi gerekiyorsa


// aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.
/*(örn çıktı: 
05.01.2020 balata değişimi - 1700 TL
05.01.2020 yağ değişimi - 700 TL
05.01.2020 boya koruma - 700 TL
...
...
...
28.08.2022 seramik kaplama - 4500 TL
)
*/

const aracBilgileri = {
    id: "audiA6_123",
    model: "audiA6",
    yil: 2019,
    renk: "kırmızı",
    servisKayitlari: [
      {
        id: "audiA6_123_1",
        tarih: "05.01.2020",
        km: 2500,
        ucret: 3000,
        detay: [
          {
            id: "audiA6_123_1_1",
            aciklama: "balata değişimi",
            ucret: 1700,
          },
          {
            id: "audiA6_123_1_2",
            aciklama: "yağ değişimi",
            ucret: 700,
          },
          {
            id: "audiA6_123_1_3",
            aciklama: "boya koruma",
            ucret: 600,
          },
        ],
      },
      {
        id: "audiA6_123_2",
        tarih: "25.06.2021",
        km: 10500,
        ucret: 5000,
        detay: [
          {
            id: "audiA6_123_2_1",
            aciklama: "balata değişimi",
            ucret: 2700,
          },
          {
            id: "audiA6_123_2_2",
            aciklama: "yağ değişimi",
            ucret: 1700,
          },
          {
            id: "audiA6_123_2_3",
            aciklama: "boya koruma",
            ucret: 600,
          },
        ],
      },
      {
        id: "audiA6_123_3",
        tarih: "28.08.2022",
        km: 25400,
        ucret: 10000,
        detay: [
          {
            id: "audiA6_123_3_1",
            aciklama: "balata değişimi",
            ucret: 3500,
          },
          {
            id: "audiA6_123_3_2",
            aciklama: "yağ değişimi",
            ucret: 2000,
          },
          {
            id: "audiA6_123_3_3",
            aciklama: "seramik kaplama",
            ucret: 4500,
          },
        ],
      },
    ],
  };

  aracBilgileri.servisKayitlari.forEach(servis => {
    console.log(`Tarih => ${servis.tarih}`);
    servis.detay.forEach(detay => {
    console.log(`  Yapilan Islem => ( ${detay.aciklama}, Ücret= ${detay.ucret})`);
    });
  });

  console.log("");

  // student isimli bir nesne oluşturun ve içerisine 3 adet özellik ekleyin. Nesnenin özelliklerini `for...in` döngüsüyle dolaşan ve konsola yazdıran bir fonksiyon yazın.

    const student = {
        ad: "kerem",
        yas: 25,
        burc: "Balik"
    };

    function ogrenciOzellikleriniYazdir(object) {
        for (let obj in object) {
        if (object.hasOwnProperty(obj)) {
            console.log(`${obj} => ${object[obj]}`);
        }
        }
    }

    ogrenciOzellikleriniYazdir(student);
    console.log("");

  // İçerisinde 3 adet öğrenci nesnesi bulunan bir dizi oluşturun. her nesnenin kendisine ait isim ve not özellikleri bulunsun.(örn. {name: "Cem", grades: [80, 90, 50]}) Öğrencilerin ortalama notlarını `for...of` döngüsü kullanarak hesaplayın ve dersten geçip geçmedikleri bilgisini isimleriyle birlikte konsola yazdırın. (Geçer not 60)

const students = [
    { isim: "kerem", notlar: [20, 90, 40] },
    { isim: "ece", notlar: [70, 60, 90] },
    { isim: "erdem", notlar: [45, 55, 85] }
  ];

  const students2 = [
    { isim: "erdal", notlar: [15, 90, 55] },
    { isim: "banu", notlar: [100, 60, 90] },
    { isim: "selim", notlar: [60, 55, 30] }
  ];

  function ortalamaHesaplamaVeKontrol(students) {
    for (const student of students) {
      const notlar = student.notlar;
      const toplamNot = notlar.reduce((toplam, not) => toplam + not, 0);
      const ortalama = toplamNot / notlar.length;
      const gectiKaldi = ortalama >= 60 ? "dersten geçti" : "dersten kaldi";
      console.log(`${student.isim} adli öğrencinin ort. notu = ${ortalama.toFixed(1)} => ${gectiKaldi}`);
    }
  }
  ortalamaHesaplamaVeKontrol(students2);
  