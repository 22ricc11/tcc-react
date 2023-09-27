import './index.scss';
import { useState } from 'react';

export default function Login(){

    const[email, setEmail] = useState();
    const[senha, setSenha] = useState();

    return(
        <div className='Box-principal'>
            <div className='ima'>
                <img src='/assets/images/login.png' alt=''/>
            </div>
            
            <div className='coisas'>

                <h1>Login Admin</h1>

                <div>
                    <input type="text" value={email} placeholder='E-mail' onChange={e=> setEmail(e.target.value)} />
                </div>
                <div>
                    <input type='text' value={senha} placeholder='Senha' onChange={e=> setSenha(e.target.value)} />
                </div>

                <a href='/princ'><button>Entrar</button></a>

            </div>
        </div>
    )
}