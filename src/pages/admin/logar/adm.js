import { useState } from 'react';
import './adm.scss';
import { Link } from 'react-router-dom';

export default function Logar(){
    const[email,setEmail] = useState('')
    const[senha,setSenha] = useState('')
    const[senhaV, setSenhaV] = useState(false);

    const toggleVisibilidadeSenha = () => {
        setSenhaV(!senhaV);
    }

    return(
        <div className='colorido'>
        <div className='pretin'>
            
            <img id='img' src='/assets/images/login.png' alt=''/>

            <div className='coisas'>

                <div className='t'>
                    <h1>Login <br/> Admin</h1>
                </div>

                    <div id='in'>
                        <input type="text" value={email} placeholder='E-mail' onChange={e=> setEmail(e.target.value)} />
                        <input type={senhaV ? 'text' : 'password'} value={senha} placeholder='Senha' onChange={e=> setSenha(e.target.value)} />
                        <button onClick={toggleVisibilidadeSenha}> {senhaV ? <img src='/assets/images/olhoA.png' alt=''/> : <img src='/assets/images/olhoF.png' alt=''/> }</button>
                    </div>
                    
                <Link to='/princ'><button>confirmar</button></Link>
            </div>
        </div>
    </div>
    )
}