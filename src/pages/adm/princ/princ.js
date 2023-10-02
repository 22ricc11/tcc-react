import { Link } from 'react-router-dom';
import './index.scss';

export default function Principal(){

    return(
        <div className='principal'>
            <div className='cabecalho'>
                <img src='/assets/images/Mini_logo.png' alt='' />
            </div>
            <div className='opcoes'>
                <div className='cadProduto'>
                    <div className='img'>
                        <img src='/assets/images/blocos.png' alt=''/>
                        <Link to='/cadProd'>Cadastrar Produto</Link>
                    </div>
                </div>

                <div className='grafico'>
                <div className='img'>
                        <img src='/assets/images/grafico.png' alt=''/>
                        <Link to=''>Gráficos</Link>
                    </div>
                </div>

                <div className='acompV'>
                <div className='img'>
                        <img src='/assets/images/acompV.png' alt=''/>
                        <Link to=''>Acompanhar Vendas</Link>
                    </div>
                </div>

                <div className='construcao'>
                    <img src='/assets/images/construcao.png' alt='' />
                </div>
                <p>Em contrução</p>
            </div>
        </div>
    )
}
