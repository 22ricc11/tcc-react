import { useState } from 'react';
import './princ.scss';
import { Link } from 'react-router-dom';

export default function Princ(){
    const [menuV, setMenuV] = useState(false)

    const toggleMenu = () => {
        setMenuV(!menuV)
      };

    return(
        <div className='princ'>
            <div className='cabecalho'>
                <div id='logo'>
                    <img src='/assets/images/logo.png' alt='' onClick={toggleMenu}/>
                </div>

                <div id='user'>
                    <p>Olá Sr. Ricardo</p>
                    <img src='/assets/images/user.png' alt=''/>
                </div>

                <div className='tudo'>
                    <div id='pri'>
                        <div>
                            <img src='/assets/images/blocos.png' alt='' />
                            <Link to='/cad'>Cadastrar <br/> Produto</Link>
                        </div>
                        <div>
                            <img src='/assets/images/grafico.png' alt='' />
                            <Link to=''>Gráfico</Link>
                        </div>
                    </div>

                    <div id='seg'>
                        <div>
                            <img src='/assets/images/acompV.png' alt='' />
                            <Link to=''>Acompanhar <br/> vendas</Link>
                        </div>
                        <div>
                            <img src='/assets/images/construcao.png' alt='' />
                            <Link id='c'>Em construção</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}