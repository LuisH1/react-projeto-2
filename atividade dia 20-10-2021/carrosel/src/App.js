import {useState} from "react"
import './App.css';

function App() {
  const [id,setId]=useState (0 )
  return (
    <div className="App"  >
      <button onClick ={()=>setId(id+1)}  >
        Ida
        </button>
     <img src={img.url[id]}alt=""/>
     <button onClick ={()=>setId(id-1)} >
       volta 
       </button>
    </div>
  );
}
const img = {
  url:[
    "https://t.ctcdn.com.br/8FplhVkDQdAatiUcehCimgkGJlI=/512x288/smart/i257652.jpeg",
    "https://static6.depositphotos.com/1030334/671/i/600/depositphotos_6710151-stock-photo-eyes.jpg",
    "https://cdn4.oqueeoquee.com/wp-content/uploads/2012/05/imagem-em-movimento-1.jpg",
    "https://lupadigital.info/wp-content/uploads/2018/05/imagens-gratis.jpg",
    "https://www.idealmarketing.com.br/blog/wp-content/uploads/2018/06/editar-imagens.jpg",
    "https://staticr1.blastingcdn.com/media/photogallery/2017/10/10/660x290/b_502x220/tripofobia-o-transtorno-de-quem-tem-medo-de-buracos_1623679.jpg",
    "https://www.2net.com.br//Repositorio/251/Publicacoes/23883/c45ee5c4-c.jpg",
    "https://tm.ibxk.com.br/2021/09/21/21160911077283.jpg?ims=352x208"
  ]
}
export default App;
