import { clsx } from 'clsx';
import './Alerta.scss'

export interface AlertaProps {
    texto: String
    tipo: 'danger' | 'notification' | 'sucess'
    titulo: String
    onClick?: Function | any
    Close: () => void
}

export function Alerta({texto, tipo, titulo, Close, ...props} :AlertaProps) {
    let alerta
    let avatar
    switch(tipo){
        case 'danger':
            alerta = 'danger';
            avatar = <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.72998 19H20.26C21.03 19 21.51 18.17 21.13 17.5L11.86 1.50004C11.47 0.830043 10.51 0.830043 10.13 1.50004L0.859983 17.5C0.479983 18.17 0.959983 19 1.72998 19V19ZM12 16H9.99998V14H12V16ZM11 12C10.45 12 9.99998 11.55 9.99998 11V9.00004C9.99998 8.45004 10.45 8.00004 11 8.00004C11.55 8.00004 12 8.45004 12 9.00004V11C12 11.55 11.55 12 11 12Z" fill="#DB4437"/>
            </svg>
            
            
        break;
        case 'notification':
            alerta = 'notification';
            avatar = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1474FF" stroke="#1474FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8V12" stroke="#F2F5F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 16H12.01" stroke="#F2F5F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        break;
        case 'sucess':
            alerta = 'sucess';
            avatar = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.48004 0 4.19617e-05 4.48 4.19617e-05 10C4.19617e-05 15.52 4.48004 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.29004 14.29L3.70004 10.7C3.31004 10.31 3.31004 9.68 3.70004 9.29C4.09004 8.9 4.72004 8.9 5.11004 9.29L8.00004 12.17L14.88 5.29C15.27 4.9 15.9 4.9 16.29 5.29C16.68 5.68 16.68 6.31 16.29 6.7L8.70004 14.29C8.32004 14.68 7.68004 14.68 7.29004 14.29Z" fill="#11B163"/>
            </svg>
            
        break;        
    }

    return (
        <div className={clsx(alerta , 'box-alerta')} >
            <button onClick={Close} className='closer' {...props}>
                <svg   width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13" stroke="#898B8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1L13 13" stroke="#898B8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
            <div className='avatar'>
                {avatar}
            </div>
            <div className='info'>
                <h1>{titulo}</h1>
                <p>{texto}  </p>
            </div>
        </div>
    )
} 