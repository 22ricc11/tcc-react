import './cabProdutos.scss'

export default function CabProdutos(){
    return(
        <div className='cabecalhoP'>
            <a href='/'><img src='/assets/images/s-infProdutos.png' alt='seta' /></a>

            <form>
                <img src='/assets/images/lupa.png' alt='lupa' />
                <input type='text' placeholder='O que você procura hoje?' />
            </form>

            <img src='/assets/images/menu.png' alt='menu'/>
        </div>
    )
}
