import Lutadores from '../Lutadores'
import './Arena.css'


const Arena = (props) =>{
        return(

           (props.lutadores.length >0) && <section className='arenas' style={{backgroundColor: props.corSecundaria}}>
                <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='lutadores'>
                {props.lutadores.map(lutadores => <Lutadores corDeFundo={props.corPrimaria}key={lutadores.nome} nome={lutadores.nome} luta={lutadores.luta} imagem={lutadores.imagem} />)}
                </div>
            </section>
        )
}


export default Arena