
import './index.scss';

export default function LandingPage() {
    return(
        <div className='LandingPage'>
            <div className='cabecalho'>
                <img src='/assets/images/logo.png' alt=''/>
                <a href='Login'>Login</a>
                
                <div className='imagem-de-canto'>
                    <img src='/assets/images/ima-de-canto.png' alt=''/>
                </div>
            </div>

            <div className='bambu'>
              <input type='text'/>
            </div>
            <div className='n-sei'>
                <h1>Cuidando de você,respeitando a natureza.</h1>
                <img src='' alt=''/>
            </div>
        </div>
    )
}