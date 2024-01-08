import './Lutadores.css'


const Lutadores = ({nome, imagem, luta, corDeFundo}) =>{
    
    
    return(<div className='lutador'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src= {imagem} alt={nome}/>
        </div>

        <div className='rodape'>
            <h4> {nome}</h4>
            <h5> {luta}</h5>
        </div>

        </div>
    )
}





export default Lutadores