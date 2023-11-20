import { Link } from 'react-router-dom'
import './rodape.scss'



export default function Footer(){
        return(
            <div className='footer'>

                    <img src='/assets/images/logo192.png' />

                    <Link to='#'>A NaturalMente |</Link>
                    
                    <Link to='/distribuidora'>Distribuidora |</Link>
                    
                    <Link to='/TermoseCondicoes'>Termos e Condições |</Link>
                    
                    <Link to='/Contato'>Contato |</Link>
                    
                    <Link to='/PrivacyPolicy'>Política de Privacidade</Link>
            </div>

        );

}