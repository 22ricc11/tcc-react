import { useState } from 'react';
import './cad.scss';
import { Link } from 'react-router-dom';

export default function Cad(){
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    const[senhaC,setSenhaC] = useState('')

    return(
        <div className='fora'>
            <div className='dentro'>
                <img id='img' src='/assets/images/login.png' alt=''/>

                <div id='sobre'>
                    <Link to='/'><img src='/assets/images/seta.png' alt=''/></Link>
                </div> 
                
                <div className='bt'>
                    <Link to='/login'>Login</Link>
                </div>
                
                <div className='coisas'>

                    <div className='cadastro'>
                        <h1>Criar <br/>Conta</h1>
                    </div>

                    <div id='i'>
                        <input type='text' value={nome} placeholder='Nome' onChange={e => setNome(e.target.value)} />
                        <input type='text' value={email} placeholder='E-mail' onChange={e => setEmail(e.target.value)} />
                        <input type='password' value={senha} placeholder='Senha' onChange={e => setSenha(e.target.value)} />
                        <input type='password' value={senhaC} placeholder='Confirmar senha' onChange={e => setSenhaC(e.target.value)} />
                    </div>

                    <Link to='/'><button>confirmar</button></Link>
                </div>
            </div>
        </div>
    )
}

