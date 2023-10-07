import './login.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Login(){

    const[emailL, setEmailL] = useState();

    const[senhaV, setsenhaV] = useState(false)
    const[senhaL, setSenhaL] = useState();

    const toggleVisibilidadeSenha = () => {
        setsenhaV(!senhaV);
    }

    return(
        <div className='Box-principal'>
            <div className='S'>

                <div className='ima'>
                    <img src='/assets/images/login.png' alt=''/>
                </div>
                
                
                    <Link id='BT' to='/cadastro'>Cadastro</Link>
                
                <div className='coisas'>
                    <div className='Login'>
                        <h1>Login</h1>
                    </div>
 
                        <div>
                            <input type="text" value={emailL} placeholder='E-mail' onChange={e=> setEmailL(e.target.value)} />
                        </div>
                        <div>
                            <input type={senhaV ? 'text' : 'password'} value={senhaL} placeholder='Senha' onChange={e=> setSenhaL(e.target.value)} />
                        </div>
                        
                        <button onClick={toggleVisibilidadeSenha}> {senhaV ? <img src='/assets/images/olhoA.png' alt=''/> : <img src='/assets/images/olhoF.png' alt=''/> }</button>
                    
                    <h4>Entrar com:</h4>

                    <div className='apps'>
                        <a href='https://www.instagram.com/'><img src='/assets/images/instagram.png' alt=''/></a>
                        <a href='https://www.facebook.com/'><img src='/assets/images/facebook.png' alt=''/></a>
                        <a href='https://www.google.com/'><img src='/assets/images/google.png' alt=''/></a>
                    </div>

                    <a href='/'><button>confirmar</button></a>
                </div>

            </div>
           
        </div>
    )
}