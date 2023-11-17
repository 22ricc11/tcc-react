import { useState } from 'react'
import './cadP.scss'
import CabAdm from '../../../components/cabecalho/cabAdm/cabAdm'
import { Link } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function CadP(){
    const[nomeP, setNomeP] = useState()
    const[valorP, setValorP] = useState()
    const[descP, setDescP] = useState()
    const[tipoP, setTipoP] = useState()
    const[disponivel, setDisponivel] = useState(false);
    const[indisponivel, setIndisponivel] = useState(false);

    const DisponivelChange = () => {
        setDisponivel(!disponivel);
        setIndisponivel(false);
      };
    
      const IndisponivelChange = () => {
        setIndisponivel(!indisponivel);
        setDisponivel(false);
      };


      const handleValorChange = (e) => {
        const inputValue = e.target.value;

        // Verificar se o valor começa com o símbolo de R$
    if (inputValue.startsWith('R$')) {
        setValorP(inputValue);
      } else {
        setValorP(`R$ ${inputValue}`);
    }
  };
    
    function cad(){
        toast.dark('Produto cadastrado com sucesso!!!');
    }
    

    return(
        <div className='pag-cadp'>
            <CabAdm/>
            <ToastContainer/>

            <div className='tudinho'>
                <div className='inputs'>
                    <h1>Cadastrar Produtos</h1>

                    <div className='puts'>
                        <input type="text" value={nomeP} placeholder='Nome do Produto' onChange={e=> setNomeP(e.target.value)} />
                        <input type="text" value={valorP} placeholder='Valor do Produto R$' onChange={handleValorChange}/>
                        <input type="text" value={descP} placeholder='Descrição do Produto' onChange={e=> setDescP(e.target.value)} />
                        <input type="text" value={tipoP} placeholder='Tipo do Produto' onChange={e=> setTipoP(e.target.value)} />
                    
                    
                        <div className='check'>
                            <div>
                                <input type='checkbox' checked={disponivel} onChange={DisponivelChange}/>
                                <label htmlFor='disponivel'>Disponível</label>
                            </div>

                            <div>
                                <input type='checkbox' checked={indisponivel} onChange={IndisponivelChange}/>
                                <label htmlFor='indisponivel'>Indisponível</label>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className='download'>
                    <div id='box-images'>
                        <img src='/assets/images/upload.png'/>
                    </div>

                    <button onClick={cad}>Cadastrar</button>
                </div>
            </div>
        </div>
    )

}