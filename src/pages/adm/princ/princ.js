import { Link } from 'react-router-dom'
import './princ.scss'

export default function Princ(){

    return(
        <div className='box'>
            <div className='cabecalho'>
                <img src='' alt=''/>

                <img src='./assets/images/perfil-adm.png' alt='' />
                <p>Olá Sr.</p>
            </div>

            <div className='meio'>
                <div className='a'>
                    <div>
                        <img src='' alt=''/>
                        <Link to=''>Cadastro de Produto</Link>
                    </div>
                    <div>
                        <img src='' alt=''/>
                        <Link to=''>Gráfico</Link>
                    </div>
                </div>

                <div className='b'>
                    <div>
                        <img src='' alt=''/>
                        <Link to=''></Link>
                    </div>
                    <div>
                        <img src='' alt=''/>
                        <Link to=''>Em Construção</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
