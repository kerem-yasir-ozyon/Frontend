import React, { useEffect, useState } from 'react'

const App = () => {

  const[sayac,setSayac] = useState(0);
  const[deger,setDeger] = useState(true);


  //1.Durum = sayfa yüklendiğinde 1 defa çalısır. Sayfada gerceklesen her değişiklikte tekrar tekrar tetiklenir.(default durum yani effect kullanılmadan yapılan işlemlerdee boyle calısırdı.)
  // useEffect(()=>{
  //   console.log("1.durum useEffect calişti.");
  // })

  //2.durum = sayfa yüklendiğinde 1 defa çalısır. Ancak bagımlılık dizisine hiçbir eleman tanımlanmadıgı icin değişiliğe baglı olarak tekrar tetiklenmez. Yani sayfa yüklendiğinde sadece bir defa calısır ve bir daha çalışmaz!
  // useEffect(()=>{
  //   console.log("2.durum useEffect calişti.");
  // },[])

  //3.durum = sayfa yüklendiğinde 1 defa çalısır. Bağımlılık dizisi içerisine verilen elemanlar her değiştigiinde tekarrlanır
  // useEffect(()=>{
  //   console.log("3.durum useEffect calişti.");
  // },[sayac])

  // useEffect(()=>{
  //   console.log("3.1.durum useEffect calişti.");
  // },[sayac,deger])

   //4.durum = sayfa yüklendiğinde 1 defa çalısır. clean up metpdu olarak ör : debouncing yapılarında kullanılır. 
  useEffect(()=>{
    console.log("4.durum useEffect calişti.");
    return()=>{
      console.log("Clean- up methodu calıştırldı.");
    }
  },[sayac])

  return (
    <>
      <button onClick={()=>setSayac(sayac+1)}>arttır</button>
      <span>{sayac}</span>
      <button onClick={()=>setSayac(sayac-1)}>azalt</button>
      <br /><br />
      <button onClick={()=>setDeger(!deger)}>{deger?"True":"False"}</button>
    </>
  )
}

export default App