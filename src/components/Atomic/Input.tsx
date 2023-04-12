import { clsx } from 'clsx';
import './atomic.css'

export interface InputProps {
    text: string;
    size?: 'md' | 'lg';
    error?: boolean;
    disable?: boolean;
    type: 'text' | 'number';
}

export function Input({disable, size = 'md', text, error, type}: InputProps ) {
    let estilo
    let label
   if(error){
    estilo = " red border input"
    label = " label colorRed"
   } else {
    label = "label"
    estilo = "border input"
   }
    return (
        <>
        <label className='label' htmlFor={text}>{text}</label>
        <input type={type}  disabled={disable} className={clsx(
                'px-4',
                'border-solid',
                '-mt-8',
               'rounded',
                'w-[344px]', {
                    'h-[48px]': size === 'md',
                    'h-[56px]': size === 'lg',
                },
                estilo
            )} id={text}/>
            </>

           
    );
 
}