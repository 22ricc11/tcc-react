import './princ.scss'
import CabADM from '../../../components/cabecalho/cabAdm/cabAdm'
import Footer from '../../../components/rodapé/rodape'
import { Link } from 'react-router-dom'


export default function Princ(){

    return(
        <div className='princ'>
            <CabADM/>

            <div className='princ-one'>
                <h1>Seja bem vindo <br/> novamente adm!</h1>
                <h4>O que deseja executar? :)</h4>
            </div>

            <div className='princ-two'>
                <div>
                    <img src='assets/images/acompV.png' alt=''/>
                    <Link to=''>Acompanhar <br/> Vendas</Link>
                </div>
                <div>
                    <img src='assets/images/cadP.png' alt=''/>
                    <Link to='/cad'>Cadastar <br/> Produto</Link>
                </div>
                <div>
                    <img src='assets/images/prodCadastrados.png' alt=''/>
                    <Link to=''>Produtos <br/> Cadastrados</Link>
                </div>
                <div>
                    <img src='assets/images/grafico.png' alt=''/>
                    <Link to='/informacoesg'>Gráfico</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}