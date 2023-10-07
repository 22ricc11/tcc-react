import './cadastro.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Cadastro(){

    const[email, setEmail] = useState();
    const[senha, setSenha] = useState();
    const[nome, setNome] = useState();
    const[confS, setConfS] = useState();

    return(
        <div className='principal'>

            <img src='/assets/images/login.png' alt=''/>

            <div className='bt'>
                <Link to='/login'>Login</Link>
            </div>

            <div className='coisas'>

                <div className='cc'>
                    <h1>Criar <br></br>Conta</h1>
                </div>

                <div>
                    <input type="text" value={nome} placeholder='Nome' onChange={e=> setNome(e.target.value)} />
                </div>
                <div>
                    <input type='text' value={email} placeholder='E-mail' onChange={e=> setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="password" value={senha} placeholder='Senha' onChange={e=> setSenha(e.target.value)} />
                </div>
                <div>
                    <input type='password' value={confS} placeholder='Confirmar senha' onChange={e=> setConfS(e.target.value)} />
                </div>
                

                <a href='/'><button>confirmar</button></a>
            </div>
        </div>
    )
}