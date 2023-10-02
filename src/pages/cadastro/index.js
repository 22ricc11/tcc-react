import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cadastro(){

    const[nome, setNome] = useState();
    const[email, setEmail] = useState();
    const[senha, setSenha] = useState();
    const[confSenha, setConfSenha] = useState();

    return(
        <div className='principal'>
            <div className='ima'>
                    <img src='/assets/images/login.png' alt=''/>
            </div>
            
            <div className='informacoes'>
                
            <div className='bt'>
                <Link to='/login'>Login</Link>
            </div>

                <h1>Criar conta</h1>

                <div>
                <input type="text" value={nome} placeholder='Nome' onChange={e=> setNome(e.target.value)} />
                <input type="text" value={email} placeholder='E-mail' onChange={e=> setEmail(e.target.value)} />
                <input type="text" value={senha} placeholder='Senha' onChange={e=> setSenha(e.target.value)} />
                <input type="text" value={confSenha} placeholder='Confirmar Senha' onChange={e=> setConfSenha(e.target.value)} />
                </div>

                <a href='/'><button>Confirmar</button></a>
            </div>
        </div>
    )
}