import './index.scss'
import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div className='pag-cont'>
            <Link to='/'><h3>←</h3></Link>

            <div className='cont-meio'>
                <h1>Contato</h1>
                <p>sac@naturalmente.com.br</p>

                <p>
                    Rua Euzébio Coghi, 700 - Morumbi 
                    SP / CEP04890-056 - Indústria Brasileira 
                    CNPJ 09.385.382/3467-76 
                    +55 (11) 98768-3758
                </p>
            </div>
        </div>
    )
}

export default Contato;