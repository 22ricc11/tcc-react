import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function TermoseCondicoes(){
    return(
        <div className='pag-TC'>
            <Link to='/'><h3>←</h3></Link>

            <div className='meio-TC'>
                <h1>Termos e Condições</h1>
                
                <h2>Termos</h2>
                <p>Ao acessar ao site NaturalMente, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </p>

                <h2>Uso de Licença</h2>
                <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site NaturalMente , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                1. Modificar ou copiar os materiais;
                2. Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);
                3. Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site NaturalMente;
                4. Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;
                5. Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
                Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por NaturalMente a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                </p>

                <h2>Isenção de responsabilidade</h2>
                <p>Os materiais no site da NaturalMente são fornecidos 'como estão'. NaturalMente não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                Além disso, o NaturalMente não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                </p>

                <h2>Limitações</h2>
                <p>Em nenhum caso o NaturalMente ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em NaturalMente, mesmo que NaturalMente ou um representante autorizado da NaturalMente tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
                </p>

                <h2>Precisão dos materiais</h2>
                <p>Os materiais exibidos no site da NaturalMente podem incluir erros técnicos, tipográficos ou fotográficos. NaturalMente não garante que qualquer material em seu site seja preciso, completo ou atual. NaturalMente pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, NaturalMente não se compromete a atualizar os materiais.
                </p>

                <h2>Links</h2>
                <p>O NaturalMente não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por NaturalMente do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

                <h2>Modificações</h2>
                <p>O NaturalMente pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                Lei aplicável
                Estes termos e condições são regidos e interpretados de acordo com as leis do NaturalMente e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                </p>
            </div>
        </div>
    )
}

export default TermoseCondicoes