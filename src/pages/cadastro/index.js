import { Link } from 'react-router-dom';
import './index.scss';

export default function Cadastro(){
    return(
        <div className='Box-principal'>
            <div className='ima'>
                <img src='/assets/images/login.png' alt=''/>
            </div>
            
            <div className='coisas'>
                
            <div className='bt'>
                <Link to='/login'>Login</Link>
            </div>

                <h1>Criar conta</h1>

                <div>
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                </div>

                <button>Confirmar</button>

            </div>
        </div>
    )
}