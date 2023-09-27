import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

//rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pag
import Homepage from './pages/home';
import PrivacyPolicy from './components/Politica_de_Privacidade';
import Footer from './components/rodapé';
import Login from './pages/login/index.js';
import Cadastro from './pages/cadastro/index.js';
import Adm from './pages/adm/entrar/index.js';
import Princ from './pages/adm/princ/index.js';
import CadProd from './pages/adm/cadProd/index.js';
import Grafico from './pages/adm/grafico/index.js';

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
      <Route path='/princ' element={<Princ/>} /> 
      <Route path='/cadProd' element={<CadProd />} />
      <Route path='/grafico' element={<Grafico />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

