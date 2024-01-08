import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from 'react'


const Formulario =(props) => {


  const [nome, setNome] = useState('')
  const [origem, setOrigem] = useState('')
  const [idade, setIdade] = useState('')
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [luta, setLuta] = useState('')
  const [imagem, setImagem] = useState('')
  const [arena, setArenas] = useState('')




const aoSalvar = (evento) =>{
  evento.preventDefault()
  props.aoLutadorCadastrado({
    nome,
    origem,
    idade,
    altura,
    peso,
    luta,
    imagem,
    arena
  })
  setNome('')
  setOrigem('')
  setIdade('')
  setAltura('')
  setPeso('')
  setLuta('')
  setImagem('')
  setArenas('')
}

  return (
    <section className="formulario">
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para cadastrar o Lutador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o Competidor:" valor={nome} aoAlterado={valor => setNome(valor)} />
            <CampoTexto obrigatorio={true} label="Origem" placeholder="Digite seu país de origem:" valor={origem} aoAlterado={valor => setOrigem(valor)} />
            <CampoTexto obrigatorio={true} label="Idade" placeholder="Digite a sua idade: " valor={idade} aoAlterado={valor =>setIdade(valor)} />
            <CampoTexto obrigatorio={true} label="Altura" placeholder="Digite a sua altura: " valor={altura} aoAlterado={valor => setAltura(valor)}/>
            <CampoTexto obrigatorio={true} label="Peso" placeholder="Digite o seu peso: " valor={peso} aoAlterado={valor => setPeso(valor)} />
            <CampoTexto
                 obrigatorio={true}
                 label="Estilo de Luta"
                 placeholder="Digite o seu estilo de luta: "
                 valor={luta} 
                 aoAlterado={valor => setLuta(valor)}
             />
            <CampoTexto
                obrigatorio={true}
                label="Foto"
                placeholder="Carregue uma foto de identificação: "
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa obrigatorio={true} label='Arena' itens={props.arenas} valor={arena} aoAlterado={valor =>setArenas(valor)}/>
            <Botao>
              Cadastrar Novo Competidor
            </Botao>
      </form>
    </section>
  )
}

export default Formulario;
