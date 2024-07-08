import React from 'react'

const Main = () => {
  return (
    <div>
        <ol>
        <li>Componentin returnu içerisinde jsx mutlaka fragment (yani kapsayici) içerisine yazilmalidir.</li>

        <li>JSX yapisi içerisinde süslü parantez içerisine js kodlari yazilmasina olanak tanir. 2+4={2+4}</li>

        <li style={{color:"red",background:"black"}}>JSX içerisinde inline css yazmak için çift süslü parantez kullanilir.{`style={{Js olarak Css kodu}}`}</li>
      </ol>
    </div>
  )
}

export default Main