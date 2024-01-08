import { useState } from 'react'
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario';
import Arena from './Componentes/Arenas';
import VideoFooter from './Componentes/Footer';






function App() {


const arenas = [
{
    nome: 'Arena Vulcância',
    corPrimaria: '#750E21',
    corSecundaria: '#A9A9A9'

},
{
  nome: 'Arena Oceânica',
  corPrimaria: '#5FBDFF',
  corSecundaria: '#C5FFF8'

},
{
    nome: 'Arena Terrestre',
    corPrimaria: '#C69774',
    corSecundaria: '#637E76'

},
{
    nome: 'Arena Aérea',
    corPrimaria: '#EEF5FF',
    corSecundaria: '#7C93C3'

},
{
    nome: 'Arena Espacial',
    corPrimaria: '#B6BBC4',
    corSecundaria: '#31304D'

},
]

  const [lutadores, setLutadores] = useState([])

  const aoNovoLutadorCadastrado =(lutador) =>{
    debugger
    console.log(lutador)
    setLutadores([...lutadores, lutador])
  }

  return (
    <div className="App">
      <Banner/>
     <Formulario  arenas={arenas.map(arena => arena.nome)}  aoLutadorCadastrado={ lutador =>aoNovoLutadorCadastrado(lutador)} />
     
     {arenas.map(arenas => <Arena 
     key={arenas.nome} 
     nome={arenas.nome}  
     corPrimaria={arenas.corPrimaria} 
     corSecundaria={arenas.corSecundaria} 
     lutadores={lutadores.filter(lutador => lutador.arena === arenas.nome)}/> )}
     <VideoFooter/>
    </div>
    
  );
}

export default App;
 