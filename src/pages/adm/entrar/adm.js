import './adm.scss';
import { useState } from 'react';

export default function Login(){

    const[email, setEmail] = useState();
    const[senha, setSenha] = useState();

    return(
        <div className='box'>
            <div className='ima'>
                <img src='/assets/images/login.png' alt=''/>
            </div>
            
            <div className='coisas'>

                <div className='admin'>
                    <h1>Login Admin</h1>
                </div>
                


                <div>
                    <input type="text" value={email} placeholder='E-mail' onChange={e=> setEmail(e.target.value)} />
                    <input type='text' value={senha} placeholder='Senha' onChange={e=> setSenha(e.target.value)} />
                </div>
                
                <a href='/principalAdm'><button>Entrar</button></a>

            </div>
        </div>
    )
}