import './produtos.scss'
import CabProdutos from '../../../components/cabecalho/cabProdutos/cabProdutos'

export default function Produtos(){

    return(
        <div className='pag-produtos'>
            <CabProdutos/>
            <div className='a'>
                <div>
                    <img src='/assets/images/p1.png' alt=''/>
                    <p>sHAMPOO EM BARRA ALOE VERA E HORTELÃ - ANTIQUEDA / ANTICASPA/ HIDRATANTE 35G</p>
                    <p>R$19,99</p>
                </div>
                <div>
                    <img src='/assets/images/p2.png' alt=''/>
                    <p>ESCOVA  DENTAL ORIGEM DO BAMBÚ - NATURAL</p>
                    <p>R$15,99</p>
                </div>
                <div>
                    <img src='/assets/images/image_produto_3.png' alt=''/>
                    <p>LOCÃO HIDRATANTE NATURAL COM ÓLEO E EXTRATO DE ROMÃ 200ML</p>
                    <p>R$50,00</p>
                </div>
                <div>
                    <img src='/assets/images/image_produto_6.png' alt=''/>
                    <p>DESODORANTE BIOESSÊNCIATEA TREE COM ÓLEOS ESSENCIAIS 70 ML</p>
                    <p>R$32,00</p>
                </div>
                <div>
                    <img src='/assets/images/p4.png' alt=''/>
                    <p>DESODORANTE NATURAL COM EXTRATOS DE PEPINO E CHÁ VERDE 200 ML</p>
                    <p>R$30,00</p>
                </div>
                <div>
                    <img src='/assets/images/p5.png' alt=''/>
                    <p>ALOE E VERA (BABOSA) ÓLEO VEGETAL 100% PURO PRENSADO A FRIO 100ml</p>
                    <p>R$38,60</p>
                </div>
                <div>
                    <img src='/assets/images/image_produto_2.png' alt=''/>
                    <p>ARGILA VERDE USO FACIAL/ CORPORAL/CAPILAR 70G</p>
                    <p>R$50,00</p>
                </div>
                <div>
                    <img src='/assets/images/p6.png' alt=''/>
                    <p>ARGILA BRANCA USO FACIAL/ CORPORAL/ CAPILAR 70G</p>
                    <p>R$50,00</p>
                </div>
                <div>
                    <img src='/assets/images/image_produto_5.png' alt=''/>
                    <p>PROTEÇÃO SOLAR 50g ALTA PROTEÇÃO - DERMARE - FPS 60 FPS UVA 20</p>
                    <p>R$62,90</p>
                </div>
                <div>
                    <img src='/assets/images/image_produto_4.png' alt=''/>
                    <p>Protetor Solar Mineral Vegano em Bastão de 50g bege e FPS 50 Cammy Wild (Bege)</p>
                    <p>R$80,00</p>
                </div>
                <div>
                    <img src='/assets/images/p7.png' alt=''/>
                    <p>Hidratante Corporal, Óleos de Coco e Girassol, Chia, B3 250ml</p>
                    <p>R$89,99</p>
                </div>
                <div>
                    <img src='/assets/images/image_produto_1.png' alt=''/>
                    <p>Hidratante manteiga de cacau e calêndula</p>
                    <p>R$70,00</p>
                </div>
            </div>
        </div>
    )
}