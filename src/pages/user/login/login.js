import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

export default function Login(){
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[senhaV, setSenhaV] = useState(false);

    const toggleVisibilidadeSenha = () => {
        setSenhaV(!senhaV);
    }

    return(
        <div className='box'>
            <div className='principal'>
                <Link to='/'><img id='uma' src='/assets/images/seta-fundo-preto.png' alt=''/></Link>
                <img id='um' src='/assets/images/login.png' alt=''/>
                

                
                <div className='bt'>
                    <Link to='/cadastro'>Cadastro</Link>
                </div>

                <div className='coisas'>

                    <div className='Login'>
                        <h1>Login</h1>
                    </div>
 
                        <div id='in'>
                            <input type="text" value={email} placeholder='E-mail' onChange={e=> setEmail(e.target.value)} />
                            <div>
                                <input type={senhaV ? 'text' : 'password'} value={senha} placeholder='Senha' onChange={e=> setSenha(e.target.value)} />
                                <button onClick={toggleVisibilidadeSenha}> {senhaV ? <img src='/assets/images/olhoA.png' alt=''/> : <img src='/assets/images/olhoF.png' alt=''/> }</button>
                            </div>
                        </div>
                        
                    <h4>Entrar com:</h4>

                    <div className='apps'>
                        <a href='#'><img src='/assets/images/instagram.png' alt=''/></a>
                        <a href='#'><img src='/assets/images/facebook.png' alt=''/></a>
                        <a href='#'><img src='/assets/images/google.png' alt=''/></a>
                    </div>

                    <Link to='/'><button>confirmar</button></Link>
                </div>
            </div>
        </div>
    )
}