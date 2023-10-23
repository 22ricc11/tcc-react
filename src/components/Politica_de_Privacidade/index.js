import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';


function PrivacyPolicy() {
  return (
    <div className="div-principal">
    
      <Link to='/'><h3>←</h3></Link>

      <div classname='div-centralizada'>
        
        <h1>Política de Privacidade</h1>
        <p id='pp'>
        A sua privacidade é importante para nós. É política do 
        NaturalMente respeitar a sua privacidade em relação a
        qualquer
        informação sua que possamos coletar no site NaturalMente, e
        outros sites que possuímos e operamos.
        Solicitamos informações pessoais apenas quando realmente
        precisamos delas para lhe fornecer um serviço.  Fazemo-lo por meios justos e legais, com o seu
        conhecimento
        e consentimento. Também informamos por que estamos 
        coletando
        e como será usado.+
        Apenas retemos as informações coletadas pelo tempo
        necessário para fornecer o serviço solicitado. Quando 
        armazenamos dados,
        protegemos dentro de meios comercialmente aceitáveis
        ​​para evitar perdas e roubos, bem como acesso, divulgação,
        cópia, uso ou 
        modificação não autorizados.
        Não compartilhamos informações de identificação pessoal
        publicamente ou com terceiros, exceto quando exigido por
        lei.
        O nosso site pode ter links para sites externos que não são
        operados por nós. Esteja ciente de que não temos controle 
        sobre o conteúdo
        e práticas desses sites e não podemos aceitar 
        responsabilidade por suas respectivas políticas de privacidade.
        Você é livre para recusar a nossa solicitação de informações
        pessoais, entendendo que talvez não possamos fornecer 
        alguns dos serviço
        s desejados.
        O uso continuado de nosso site será considerado como
        aceitação de nossas práticas em torno de privacidade e
        informações pessoais.
        Se você tiver alguma dúvida sobre como lidamos com dados
        do usuário e informações pessoais, entre em contacto
        connosco.
        </p>

        <h2>Dados de Coleta</h2>
        <p>
        Podemos coletar certas informações pessoais, como seu nome, endereço de e-mail e outros dados de contato quando você interage com nosso site ou usa nossos serviços.
        </p>

        <h2>Uso de dados</h2>
        <p>
        As informações pessoais que coletamos são usadas para fornecer e melhorar nossos serviços, personalizar sua experiência e nos comunicarmos com você. Também poderemos usar as informações para lhe enviar e-mails promocionais ou boletins informativos, mas você poderá cancelar o recebimento de tais comunicações a qualquer momento.
        </p>

        <h2>Proteção de dados</h2>
        <p>
        Tomamos medidas apropriadas para proteger as informações pessoais que coletamos e armazenamos. No entanto, tenha em atenção que nenhum método de transmissão ou armazenamento de dados é 100% seguro e não podemos garantir a segurança absoluta das suas informações.
        </p>

        <h2>Links de terceiros</h2>
        <p>
        Nosso site pode conter links para sites de terceiros. Não somos responsáveis ​​pelas práticas de privacidade ou pelo conteúdo desses sites de terceiros. Encorajamo-lo a ler as políticas de privacidade desses websites quando os visitar.
        </p>

        <h2>Mudanças nesta política</h2>
        <p>
        Poderemos atualizar esta Política de Privacidade de tempos em tempos. Quaisquer alterações serão refletidas nesta página e a política revisada entrará em vigor imediatamente.
        </p>

        <h2>Contate-nos</h2>
        <p>
        Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade, entre em contato conosco pelo e-mail privacidade@naturalmente.com.
        </p>

      </div>
    </div>
  );
}

export default PrivacyPolicy;