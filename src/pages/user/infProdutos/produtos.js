import './produtos.scss'
import Footer from '../../../components/rodapé/rodape'

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


export default function Produtos(){

    function sacola() {
        toast.dark('Adicionado a sacola');
    }

    return(
        <div className='pag-infprodutos'>
            <ToastContainer/>
            <div className='cabecalhoP'>
                <img src='/assets/images/s-infProdutos.png' alt='seta' />

                <form>
                    
                        <img src='/assets/images/lupa.png' alt='lupa' />
                    
                    <input type='text' placeholder='O que você procura hoje?' />
                </form>

                <img src='/assets/images/menu.png' alt='menu'/>
            </div>

            <div className='meioP'>
                
                    <h3>ARGILA VERDE USO FACIAL/CORPORAL/CAPILAR 70G</h3>

                    <div id='aP'>
                        <img src='/assets/images/image_produto_2.png' alt=''/>
                        <p>
                            A argila verde cosmética é um produto natural amplamente utilizado na indústria de beleza e cuidados com a pele. 
                            É conhecida por suas propriedades purificantes e revigorantes, sendo extraída de depósitos de argila na natureza.
                        </p>
                    </div>

                    <div id='bP'>
                        <div>
                            <p>Favoritar</p>
                            <img src='/assets/images/favoritar.png' alt=''/>
                        </div>
                        <div>
                            <p>Compartilhar</p>
                            <img src='/assets/images/compartilhar.png' alt=''/>
                        </div>                   
                    </div>

                    <div id='preco'>
                        <h1>R$ 50,00</h1>

                        <button onClick={sacola}>Adiconar ao carrinho</button>
                    </div>    

                
                
            </div>
            <Footer/>
        </div>
    )
}