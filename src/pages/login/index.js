import { Link } from 'react-router-dom';
import './index.scss';


export default function Login(){

    return(
        <div className='Box-principal'>
            <div className='ima'>
                <img src='/assets/images/login.png' alt=''/>
            </div>
            
            <div className='coisas'>
                
            <div className='bt'>
                <Link to='/cadastro'>cadastro</Link>
            </div>

                <h1>Login</h1>

                <div>
                    <input type='text' />
                    <input type='text' />
                </div>

                <h4>Entrar com:</h4>

                <div className='app'>
                    <a href='https://www.instagram.com/'><img src='/assets/images/insta.png' alt=''/></a>
                    <a href='https://www.facebook.com/'><img src='/assets/images/facebook.png' alt=''/></a>
                    <a href='https://www.google.com/'><img src='/assets/images/google.png' alt=''/></a>
                </div>

                <button>confirmar</button>

            </div>
        </div>
    )
}