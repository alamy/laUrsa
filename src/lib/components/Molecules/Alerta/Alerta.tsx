import { clsx } from 'clsx';
import './Alerta.scss'

export interface AlertaProps {
    texto: String
    tipo: 'danger' | 'notification' | 'sucess'
}

export function Alerta({texto, tipo} :AlertaProps) {
    let alerta
    switch(tipo){
        case 'danger':
            alerta = 'danger';
        break;
        case 'notification':
            alerta = 'notification';
        break;
        case 'sucess':
            alerta = 'sucess';
        break;        
    }
  
    return (
        <div className={clsx(alerta , 'box-alerta')} >
            <div className='closer'>X</div>
            <div className='avatar'></div>
            <div className='info'>  <h1>{texto}</h1></div>
          
        </div>
    )
} 