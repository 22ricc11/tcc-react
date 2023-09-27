import { useState } from 'react';
import './index.scss';

export default function CadProd(){

    const[nomeP, setnomeP] = useState();
    const[valor, setValor] = useState();
    const[desc, setDesc] = useState();
    const[tipo, setTipo] = useState();

    return(
        <div className='Box-principal'>
            <div className='cabecalho'>
                <h1>Cadastrar Produto</h1>
            </div>

            <div className='box'>
               <p>+ 
                adicionar imagem</p> 
            </div>
            <div className='bt'>
            <button>Cadastrar</button>
            </div>

            <div className='in'>
            <input type='text' value={nomeP} placeholder='Nome do Produto' onChange={e=> setnomeP(e.target.value)} />
            <input type='text' value={valor} placeholder='Valor R$' onChange={e=> setValor(e.target.value)} />
            <input type='text' value={desc} placeholder='Descrição' onChange={e=> setDesc(e.target.value)} />
            <input type='text' value={tipo} placeholder='Tipo' onChange={e=> setTipo(e.target.value)} />
            </div>

            <div className='n sei'>
                <div>
                    +
                </div>
            </div>
        </div>
    )
}