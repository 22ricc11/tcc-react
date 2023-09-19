import './index.scss';


export default function Login(){

    return(
        <div className='Box-principal'>
            <div className='ima'>
                <img src='/assets/images/login.png' alt=''/>
            </div>
            
            <div className='coisas'>
                
            <div className='bt'>
                <button>cadastro</button>
            </div>

                <h1>Login</h1>

                <div>
                    <input type='text' />
                    <input type='text' />
                </div>

                <h4>Entrar com:</h4>

                <div className='app'>
                    <img src='/assets/images/insta.png' alt=''/>
                    <img src='/assets/images/facebook.png' alt=''/>
                    <img src='/assets/images/google.png' alt=''/>
                </div>

                <button>Confirmar</button>

            </div>
        </div>
    )
}