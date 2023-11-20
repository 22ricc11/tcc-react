//rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pag
import Homepage from './pages/user/home';
import PrivacyPolicy from './components/politicas/Politica_de_Privacidade/index';
import Contato from './components/politicas/contato/index';
import Distribuidora from './components/politicas/distribuidora/index';
import TermoseCondicoes from './components/politicas/TermoseCondicoes/index'
import Footer from './components/rodapé/rodape';
import Carrossel from './components/carousel/carousel';


//USER
import Login from './pages/user/login/login';
import Cadastro from './pages/user/cadastro/cad';
import Endereco from './pages/user/endereço/endereco';
import ConfPed from './pages/user/confPed/confirmar';
import InfProdutos from './pages/user/infProdutos/produtos';


//ADM
import Logar from './pages/admin/logar/adm';
import Principal from './pages/admin/principal/princ';
import CadProduto from './pages/admin/cadPoduto/cadP';

import InformacoesG from './pages/admin/grafico/infomacoesg';

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact={true} element={<Homepage/>} />
                <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
                <Route path='/Contato' element={<Contato/>} />
                <Route path='/Distribuidora' element={<Distribuidora/>} />
                <Route path='/TermoseCondicoes' element={<TermoseCondicoes/>} />
                <Route path='/footer' element={<Footer/>} />
                <Route path='/carrossel' element={<Carrossel/> }/>

                //USER
                <Route path='/login' element={<Login/>} />
                <Route path='/cadastro' element={<Cadastro/>} />
                <Route path='/endereco' element={<Endereco/>} />
                <Route path='/confirmarpedido' element={<ConfPed/>} />
                <Route path='/infproduto' element={<InfProdutos/>} />
                

                //ADM
                <Route path='/adm' element={<Logar/>} />
                <Route path='/princ' element={<Principal/>} /> 
                <Route path='/cad' element={<CadProduto/>} /> 

                <Route path='/informacoesg' element={<InformacoesG/>} />

            </Routes>
        </BrowserRouter>
    )
}

