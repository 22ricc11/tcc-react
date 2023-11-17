//rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pag
import Homepage from './pages/user/home';
import PrivacyPolicy from './components/Politica_de_Privacidade';
import Footer from './components/rodapé/rodape';
import Carrossel from './components/carousel/carousel';

//USER
import Login from './pages/user/login/login';
import Cadastro from './pages/user/cadastro/cad';
import Endereco from './pages/user/endereço/endereco';
import ConfPed from './pages/user/confPed/confirmar';


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
                <Route path='/footer' element={<Footer/>} />
                <Route path='/carrossel' element={<Carrossel/> }/>

                //USER
                <Route path='/login' element={<Login/>} />
                <Route path='/cadastro' element={<Cadastro/>} />
                <Route path='/endereco' element={<Endereco/>} />
                <Route path='/confirmarpedido' element={<ConfPed/>} />
                

                //ADM
                <Route path='/adm' element={<Logar/>} />
                <Route path='/princ' element={<Principal/>} /> 
                <Route path='/cad' element={<CadProduto/>} /> 

                <Route path='/informacoesg' element={<InformacoesG/>} />

            </Routes>
        </BrowserRouter>
    )
}

