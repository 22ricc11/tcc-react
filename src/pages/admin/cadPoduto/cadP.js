import { useState } from 'react'
import './cadP.scss'
import CabAdm from '../../../components/cabecalho/cabAdm/cabAdm'

export default function CadP(){
    const[nomeP, setNomeP] = useState('')
    const[valorP, setValorP] = useState('')
    const[descP, setDescP] = useState('')
    const[tipoP, setTipoP] = useState('')


    return(
        <div className='cadP'>
            <CabAdm/>
                <h1>Cadastrar Produto</h1>

                <div className='put'>
                    <div>
                        <input type='text' value={nomeP} placeholder='Nome do produto' onChange={e => setNomeP(e.target.value)}/>
                        <input type='number' value={valorP} placeholder='Valor do produto R$' onChange={e => setValorP(e.target.value)}/>
                        <input type='text' value={descP} placeholder='Descrição do produto' onChange={e => setDescP(e.target.value)}/>
                        <input type='text' value={tipoP} placeholder='Tipo do produto' onChange={e => setTipoP(e.target.value)}/>
                        
                        <div id='dois'>
                            <input type='checkbox'/>
                            <label>Disponível</label>
                            <input type='checkbox'/> 
                            <label>Indisponível</label>
                        </div>
                        
                    </div>             

                    <div className='upload'>
                        <img src='assets/images/upload.png' alt=''/>
                    </div>
                </div>
           
        </div>
    )
}

