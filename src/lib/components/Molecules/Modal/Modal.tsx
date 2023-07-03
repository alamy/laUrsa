import { clsx } from 'clsx';
import './Modal.scss'
import { Button } from '../../Atomic/Button/Button';

export interface ModalProps {
    texto?: String
    tipo?: 'danger' | 'notification' | 'sucess'
    titulo?: String
    onClick: Function | any;
}

export function Modal({texto, tipo, titulo, ...props} :ModalProps) {
   

    return (
    <div className='body-black'>
        <div className={clsx('box-modal')} >
            <button className='closer' {...props}>
                <svg   width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13" stroke="#898B8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1L13 13" stroke="#898B8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
            <div className='modal-info'>
                <h1>{titulo}</h1>
                <p>{texto}  </p>
            </div>
            <Button text={'Cancelar'} type={'secondary'} />
            <Button text={'confimar'} type={'primary'}/>
        </div>
    </div>
    )
} 