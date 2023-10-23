import { useState } from 'react';
import './cadP.scss';
import { Link } from 'react-router-dom';

import { useDropzone } from 'react-dropzone';

export default function CadP(){
    const[nomeP, setNomeP] = useState('')
    const[valor, setValor] = useState('')
    const[desc, setDesc] = useState('')
    const[tipo, setTipo] = useState('')

   
        const onDrop = (acceptedFiles) => {
          if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            console.log('Arquivo selecionado:', selectedFile.name);
          }
        }

        const { getRootProps } = useDropzone({ onDrop });

        const dropzoneStyles = {
            cursor: 'pointer',
          }
          
          const buttonStyles = {
            border: 'none',
            background: '#F4F9E9',
            color: '#F4F9E9',
            cursor: 'pointer',
          }
    

    return(
        <div className='bp'>
            <div className='conteudo'>
                <Link to='/princ'><img src='/assets/images/seta.png' alt=''/></Link>

                <h1>Cadastrar Produto</h1>
               
               <div className='tudo'>
                
                    <div id='up' {...getRootProps()} style={dropzoneStyles}>
                        <button style={buttonStyles}><img src='/assets/images/upload.png' alt='' /></button>
                    </div>
                


                    <div>
                        <input type='text' value={nomeP} placeholder='Nome do Produto' onChange={e => setNomeP(e.target.value)}/>
                        <input type='number' value={valor} placeholder='Valor R$' onChange={e => setValor(e.target.value)}/>
                        <input type='text' value={desc} placeholder='Descrição do Produto' onChange={e => setDesc(e.target.value)}/>
                        <input type='text' value={tipo} placeholder='Tipo do Produto' onChange={e => setTipo(e.target.value)}/>
                    </div>

                </div>

                <Link to=''><button>Cadastrar</button></Link>
                
            </div>
            
        </div>
    )
}

