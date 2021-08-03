import React, {useEffect, useState} from 'react';
import './style.css';

function App(){

  const [nutri, setNutri] = useState([]); 

  useEffect(() =>{
    function loadApi (){

      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        setNutri(json);
      })

    }

    loadApi()

  },[])

  return(
    <div className="container">
      <strong className="topo">React Nutri</strong>
      {nutri.map((item) => {
        return(
          <article className="area-post" key={item.id}>
            <p className="titulo">{item.titulo}</p>
            <img src={item.capa} alt={item.titulo}/>
            <p>{item.subtitulo}</p>
            <a className="acesso" href="*">
              Acessar
            </a>
          </article>
        )
      })}
    </div>
  )
}

export default App;