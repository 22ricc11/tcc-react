import Grafico from './grafico'
import './infromacoesg.scss';
import CabADM from '../../../components/cabecalho/cabAdm/cabAdm'
import Footer from '../../../components/rodapé/rodape'

export default function Informacoes(){

    return(
        <div className='pag-informacoes'>
            <CabADM/>
            <div className='desisto'>
                <h1>Lucros da Semana(Mês)</h1>

                <Grafico/>
            </div>
          <Footer/>
        </div>
    )
}