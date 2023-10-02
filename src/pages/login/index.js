import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';


export default function Login(){

    const[emailL, setEmailL] = useState();
    const[senhaL, setSenhaL] = useState();

    return(
        <div className='Box-principal'>
            <div className='ima'>
                <img src='/assets/images/login.png' alt=''/>
            </div>
            
            <div className='bt'>
                <Link to='/cadastro'>Cadastro</Link>
            </div>

            <div className='coisas'>

                <h1>Login</h1>

                <div>
                    <input type="text" value={emailL} placeholder='E-mail' onChange={e=> setEmailL(e.target.value)} />
                </div>
                <div>
                    <input type='text' value={senhaL} placeholder='Senha' onChange={e=> setSenhaL(e.target.value)} />
                </div>

                <h4>Entrar com:</h4>

                <div className='apps'>
                    <a href='https://www.instagram.com/'><img src='/assets/images/instagram.png' alt=''/></a>
                    <a href='https://www.facebook.com/'><img src='/assets/images/facebook.png' alt=''/></a>
                    <a href='https://www.google.com/'><img src='/assets/images/google.png' alt=''/></a>
                </div>

                <a href='/'><button>confirmar</button></a>

            </div>
        </div>
    )
}