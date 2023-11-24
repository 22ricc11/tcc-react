import './endereco.scss'
import CabUser from '../../../components/cabecalho/cabUser/cabUser'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../components/rodapé/rodape'


export default function Endereco(){
    const[cep, setCep] = useState()
    const[estado, setEstado] = useState('')
    const[cidade, setCidade] = useState('')
    const[ruavenida, setRuavenida] = useState('')
    const[numero, setNumero] = useState()
    const[complemento, setComplemento] = useState('')

    return(
        <div className='pag-endereco'>
            <CabUser/>

            <div className='a'>
                <div>
                    <Link to='/confirmarpedido'><img src='/assets/images/seta.png'/></Link>
                    <h1>Endereço</h1>
                </div>

                <div className='c'>
                    <input type='text' value={cep} placeholder='Cep' onChange={e=> setCep(e.target.value)} required/>        
                    <input type='text' value={estado} placeholder='Estado' onChange={e=> setEstado(e.target.value)} required/>
                    <input type='text' value={cidade} placeholder='Cidade' onChange={e=> setCidade(e.target.value)} required/>
                    <input type='text' value={ruavenida} placeholder='Rua/Avenida' onChange={e=> setRuavenida(e.target.value)} required/>
                    <input type='text' value={numero} placeholder='Número da residência' onChange={e=> setNumero(e.target.value)} required/>
                    <input type='text' value={complemento} placeholder='Complemento (apto, bloco, etc)' onChange={e=> setComplemento(e.target.value)} required/>
                </div>

                <Link to=''><button>salvar</button></Link>
            </div>

            <Footer/>
        </div>
    )
}