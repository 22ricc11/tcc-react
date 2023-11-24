import './carrinho.scss'

import CabUser from '../../../components/cabecalho/cabUser/cabUser'
import Footer from '../../../components/rodapé/rodape'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Carrinho(){
    const[selecionar, setSelecionar] = useState()
    const [contador, setContador] = useState(1);
    const [precoOriginal] = useState(19.99);
    const [total, setTotal] = useState(precoOriginal);

    const aumentar = () => {
        setContador(contador + 1);
      };
    
      
      const diminuir = () => {
        setContador(contador - 1);
      };

      useEffect(() => {
        setTotal(contador * precoOriginal);
      }, [contador, precoOriginal]);

    return(
        <div className='pag-carrinho'>
            <CabUser/>
            <div className='n-sei'>
                <h1>Carrinho</h1>

                <hr/>

                <div>
                    <input type='radio' checked={selecionar} onChange={e=> setSelecionar(!selecionar)}/><img src='/assets/images/p1.png' alt='' />
                    <p>Shampoo em Barra Aloe e Vera e Hortelã 35g</p>
                    <div id='buton'>
                        <button onClick={diminuir}>-</button><p>{contador}</p><button onClick={aumentar}>+</button>
                    </div>
    
                   <p>Total:<input type="text" value={total} readOnly /></p>
                    
                </div>

                <Link to='/confirmarpedido'>Seguir</Link>
            </div>

            <Footer/>
        </div>


    )
}