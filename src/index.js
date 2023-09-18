import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';


//Rota
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Páginas 
import PrivacyPolicy from  './components/Politica_de_Privacidade';
import LandingPage from './pages/landingPage/index';
import Login from './pages/login/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< LandingPage />} />
      <Route path='/login' element={ < Login />} />
      <Route path='privacy' element={ < PrivacyPolicy />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

