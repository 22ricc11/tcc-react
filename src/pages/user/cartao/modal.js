import { useState } from 'react';
import './modal.scss';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';



const Modal = ({ mostrar, fecharModal }) => {
  const [nrCartao, setNrCartao] = useState('');
  const [dtValidade, setDtValidade] = useState('');
  const [cvv, setCvv] = useState('');
  const [apelido, setApelido] = useState('');

  const handleNumeroCartaoChange = (e) => {
    // Limita a 16 dígitos e adiciona espaços a cada 4 dígitos
    const formattedNumeroCartao = e.target.value
      .replace(/[^0-9]/g, '')
      .slice(0, 16)
      .replace(/(\d{4})/g, '$1 ');

    setNrCartao(formattedNumeroCartao);
  };

  const handleDataValidadeChange = (e) => {
    // Formato MM/AA, limita a 5 caracteres
    const formattedDataValidade = e.target.value
      .replace(/[^0-9/]/g, '')
      .slice(0, 5)
      .replace(/(\d{2})(\d{2})/, '$1/$2');

    setDtValidade(formattedDataValidade);
  };

  const handleCVVChange = (e) => {
    // Limita a 3 dígitos
    const formattedCVV = e.target.value.replace(/[^0-9]/g, '').slice(0, 3);

    setCvv(formattedCVV);
  };


  function salvarCart() {
    toast.dark('Cartão salvo com SUCESSO!!!');
    fecharModal()
}

  if (!mostrar) {
    return null;
  }

  return (
    <div className='pag-modal'>
      <ToastContainer/>
        <p>Informações do Cartão:</p>
        <div className='inf-meio'>
          
          <div className='form'>
            <input id='d2' type='text' value={nrCartao} placeholder='Número do Cartão' onChange={handleNumeroCartaoChange} />
            <div id='dd'>
              <input type='text' value={dtValidade} placeholder='Data de Válidade' onChange={handleDataValidadeChange} />
              <input type='text' value={cvv} placeholder='CVV' onChange={handleCVVChange} />
            </div>
              <input id='d2' type='text' value={apelido} placeholder='Apelido no Cartão' onChange={(e) => setApelido(e.target.value)} />
          </div>
              
        </div>

        <div id='botao'>
          <button onClick={salvarCart}>Adicionar Cartão</button>
          <button onClick={fecharModal}>Fechar</button>
        </div>
    </div>
  );
};

export default Modal;