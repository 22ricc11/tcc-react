import './confirmar.scss'
import CabUser from '../../../components/cabecalho/cabUser/cabUser'
import Footer from '../../../components/rodapé/rodape'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

import Modal from '../cartao/modal';

export default function ConfirmarPed(){
    const[selecionada, setSelecionada] = useState(false)
    const [fraseAdicionar, setFraseAdicionar] = useState('');

    const [cartao, setCartao] = useState(false);

    const Escolher = (opcao) => {
      setSelecionada(opcao);
  
      // Defina a frase correspondente com base na opção selecionada
      if (opcao === 'credito') {
        setFraseAdicionar('+Adicionar Cartão de Crédito');
      } 
      else if (opcao === 'debito') {
        setFraseAdicionar('+Adicionar Cartão de Débito');
      }
    };

    const abrirModal = () => {
        setCartao(true); // Mostrar o modal ao finalizar o pedido
        // Outras ações ao finalizar o pedido
      };
    
      const fecharModal = () => {
        setCartao(false); // Fechar o modal
      };


        function finalizar() {
            const dataHoraAtual = new Date().toLocaleString();
            toast.dark(`Pedido finalizado com sucesso em ${dataHoraAtual}`);
        }
          
    
    return(
        <div className='pag-confirmar'>
            <CabUser/>
            <ToastContainer/>

            <div className='aCP'>

                <div>
                    <Link to='/carrinho'><img src='/assets/images/seta.png' alt=''/></Link>
                    <h1>Confirmação do Pedido</h1>
                </div>

                <div id='endereço'>
                    <img src='/assets/images/location.png' alt=''/>
                    <Link to='/endereco'>+ADICIONAR ENDEREÇO</Link>
                </div>

                <hr/>

                <div className='formas'>

                    <h3>Formas de Pagamento</h3>
                    
                    <div className='tiposDePagam'>
                        <div>
                            <input type='radio' checked={selecionada === 'boleto'} onChange={() => Escolher()}/>
                            <label htmlFor='boleto'><img src='/assets/images/boleto.png'/>Boleto</label>
                        </div>
                        <div>
                            <input type='radio' checked={selecionada === 'credito'} onChange={() => Escolher('credito')}/>
                            <label htmlFor='credito'><img src='/assets/images/credito.png'/>Crédito</label>
                        </div>
                        <div>
                            <input type='radio' checked={selecionada === 'debito'} onChange={() => Escolher('debito')}/>
                            <label htmlFor='debito'><img src='/assets/images/debito.png'/>Débito</label>
                        </div>
                     </div>

                     <div id='frasePag'>
                        {selecionada === 'credito' || selecionada === 'debito' ? (<Link onClick={abrirModal}>{fraseAdicionar}</Link> ) : null}
                     </div>

                     {cartao && <Modal mostrar={cartao} fecharModal={fecharModal} />}
                </div>

                <hr/>
            
                <div className='detalhes'>

                    <h3>Detalhes do Pagamento</h3>

                    <div>
                        <p>Forma de Pagamento:</p>
                        <input/>
                        <p>Total:</p>
                        <input/>
                    </div>

                    <div id='finalizar'>
                        <Link onClick={finalizar}>Finalizar</Link>
                    </div>
                </div>

            </div>

        </div>

    )
}

