import { Link } from 'react-router-dom'
import './rodape.scss'



export default function Footer(){
        return(
            <div className='footer'>

                    <img src='/assets/images/logo192.png' />

                    <Link to='/'>A NaturalMente</Link>
                    <p>|</p>
                    <Link to='/'>Produtos º</Link>
                    <p>|</p>
                    <Link to='/'>Lojas</Link>
                    <p>|</p>
                    <Link to='/'>Contato</Link>
                    <p>|</p>
                    <Link to='/PrivacyPolicy'>Política de Privacidade</Link>
            </div>

        );

}