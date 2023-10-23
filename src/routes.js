//rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pag
import Homepage from './pages/home';
import PrivacyPolicy from './components/Politica_de_Privacidade';
import Footer from './components/rodapé';

//USER
import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cad';

//ADM
import Logar from './pages/admin/logar/adm';
import Principal from './pages/admin/principal/princ';
import CadProduto from './pages/admin/cadPoduto/cadP';


export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact={true} element={<Homepage/>} />
                <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
                <Route path='/footer' element={<Footer/>} />
                
                //USER
                <Route path='/login' element={<Login/>} />
                <Route path='/cadastro' element={<Cadastro/>} />

                //ADM
                <Route path='/adm' element={<Logar/>} />
                <Route path='/princ' element={<Principal/>} /> 
                <Route path='/cad' element={<CadProduto/>} /> 
                
            </Routes>
        </BrowserRouter>
    )
}

