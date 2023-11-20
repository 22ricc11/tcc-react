import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function Distribuidora(){
    return(
        <div className='pag-distribuidora'>
            <Link to='/'><h3>←</h3></Link>

            <div className='meioD'>
                <h1>Distribuidora</h1>

                <h2>O Que Somos?</h2>
                <p>Somos uma distribuidora de cosméticos veganos, uma empresa que se dedica a fornecer produtos de beleza que são livres de ingredientes de origem animal e não são testados em animais. Desempenhamos um papel importante em atender à crescente demanda por opções de cosméticos éticos e sustentáveis.
                Oferecemos uma ampla variedade de produtos, desde maquiagens até cuidados com a pele e cabelo, todos formulados com ingredientes de origem vegetal e sintética. Esses produtos são desenvolvidos de maneira consciente, sem o uso de qualquer ingrediente de origem animal, como cera de abelha, lanolina, colágeno ou corantes de origem animal, como carmim.
                Além disso, nos comprometemos a não realizar nenhum tipo de teste em animais, garantindo que seus produtos sejam cruelty-free. Buscamos alternativas aos testes em animais, como o uso de testes in vitro, testes em culturas de células e avaliação de segurança com base em dados existentes.
                Nossa distribuidora também pode se preocupar com embalagens sustentáveis, optando por materiais recicláveis, biodegradáveis ou de origem renovável. Isso ajuda a reduzir o impacto ambiental associado ao uso de plásticos e outros materiais não sustentáveis.
                Ao escolher uma distribuidora de cosméticos veganos, os consumidores podem ter a certeza de que estão adquirindo produtos que são alinhados aos seus valores éticos, contribuindo para um estilo de vida mais consciente e sustentável.
                </p>

                <h2>Qual nossa oferta para nossos revendedores?</h2>
                <p>Nossa distribuidora de cosméticos veganos pode oferecer uma ampla gama de produtos de beleza que são livres de ingredientes de origem animal e não são testados em animais. Aqui estão alguns exemplos do que uma distribuidora desse tipo pode oferecer:
<br/>1. Maquiagem vegana: Batons, bases, sombras, delineadores, máscaras de cílios e outros produtos de maquiagem formulados sem ingredientes de origem animal, como cera de abelha ou carmim.
<br/>2. Cuidados com a pele vegana: Cremes hidratantes, loções, tônicos faciais, séruns e produtos de limpeza facial que são livres de ingredientes de origem animal e não são testados em animais.
<br/>3. Produtos para o cabelo vegano: Shampoos, condicionadores, máscaras capilares e outros produtos para cuidados com o cabelo que são formulados sem ingredientes de origem animal, como queratina animal ou lanolina.
<br/>4. Perfumes veganos: Fragrâncias e perfumes que não contêm ingredientes de origem animal e não são testados em animais.
<br/>5. Produtos de higiene pessoal vegana: Desodorantes, sabonetes, géis de banho e outros produtos de higiene pessoal que são livres de ingredientes de origem animal e não são testados em animais.
<br/>Além disso, nossa distribuidora também pode oferecer informações sobre a origem e os processos de fabricação dos produtos, garantindo que eles sejam verdadeiramente veganos e éticos.</p>
            </div>
        </div>
    )
}

export default Distribuidora