import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

//rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pag
import Homepage from './pages/home';
import PrivacyPolicy from './components/Politica_de_Privacidade';
import Footer from './components/rodapé';
import Login from './pages/login/login.js';
import Cadastro from './pages/cadastro/cadastro.js';
import Adm from './pages/adm/entrar/adm.js';
import PrincipalAdm from './pages/adm/princ/princ.js';
import CadProd from './pages/adm/cadProd/index.js';
import Grafico from './pages/adm/grafico/index.js';
import Pedido from './pages/adm/pedidos/pedido.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact={true} element={<Homepage/>} />
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/login' element={<Login/>} /> 
      <Route path='/cadastro' element={<Cadastro/>} /> 
      <Route path='/adm' element={<Adm/>} />
      <Route path='/principalAdm' element={<PrincipalAdm/>} />
      <Route path='/cadProd' element={<CadProd/>} />
      <Route path='/grafico' element={<Grafico/>} />
      <Route path='/pedido' element={<Pedido/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

