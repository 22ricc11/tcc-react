import './cabAdm.scss';
import { Link } from 'react-router-dom';

export default function CabAdm(){

    return(
        <div className='cabADM'>
          
                <img id='logo' src='/assets/images/logo192.png' alt=''/>
            
            
            <div id='fan2'>
                    <p>Olá Sr. Admin</p>

                    <img id='user' src='/assets/images/perfil-adm.png' alt=''/>
                    <Link to='/princ'><img id='casa' src='/assets/images/casinhaCab.png' alt=''/></Link>
                </div>
        </div>
    )
}