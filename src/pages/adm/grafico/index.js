import './index.js';

export default function Grafico(){

    return(
        <div className='Box-principal'>
            <div className='cabecalho'>
                <h1>Gráfico de Vendas</h1>
            </div>

            <div className='a'>
                <div className='tabelinha'>
                    <div className='cab'>
                        <h5>Número de Vendas:</h5>
                    </div>
                        <li>
                            50% de Distribuição
                        </li>
                        <li>
                            30% de Vendas Online
                        </li>
                        <li>
                            10% de Imposto
                        </li>
                        <li>
                            10% de Investimento
                        </li>
                </div>
                <div className='grafico'>
                    <h3>GRAFICO</h3>
                </div>
            </div>
        </div>
    )
}