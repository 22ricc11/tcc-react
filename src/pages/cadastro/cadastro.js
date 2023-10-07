import './cadastro.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Cadastro(){

    const[email, setEmail] = useState();
    const[senha, setSenha] = useState();
    const[nome, setNome] = useState();
    const[confS, setConfS] = useState();
    const[senhaV, setsenhaV] = useState(false);

    const toggleVisibilidadeSenha = () => {
        setsenhaV(!senhaV);
    }

    return(
        <div className='principal'>
            <div className='PP'>

                <img id='ima' src='/assets/images/login.png' alt=''/>

                <Link id='bt' to='/login'>Login</Link>

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
                        <input type={senhaV ? 'text' : 'password'} value={senha} placeholder='Senha' onChange={e=> setSenha(e.target.value)} />
                    </div>
                    <div>
                        <input type={senhaV ? 'text' : 'password'} value={confS} placeholder='Confirmar senha' onChange={e=> setConfS(e.target.value)} />
                    </div>

                    <button onClick={toggleVisibilidadeSenha}> {senhaV ? <img src='/assets/images/olhoA.png' alt=''/> : <img src='/assets/images/olhoF.png' alt=''/> }</button>
                    
                    <a href='/'><button>confirmar</button></a>
                </div>

            </div>
        </div>
    )
}