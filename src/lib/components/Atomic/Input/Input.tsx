import { clsx } from 'clsx';
import './input.scss'

export interface InputProps {
    text: string;
    size?: 'md' | 'lg';
    error?: boolean;
    disable?: boolean;
    type: 'text' | 'number';
    onChange?: Function | any;
    value?: string
}

export function Input({disable, size = 'md', text, error, type,value, ...props}: InputProps ) {
    let estilo
    let label
   if(error){
    estilo = "red"
    label = " color-red"
   } else if(disable){
    estilo = 'gray'
    label = 'color-gray'
   }else{
    label = "color"
    estilo = "border-default"
   }
    return (
        <>
        <p className='labelInput'>
            <label className={clsx(label, 'label')} htmlFor={text}>{text}</label>
        </p>
        <input type={type}  disabled={disable}  className={clsx(
                'inputText',
                'px-4',
                'mt-0',
               'rounded',
               'border',
                'w-[344px]', {
                    'h-[48px]': size === 'md',
                    'h-[56px]': size === 'lg',
                },
                estilo
               
            )} id={text}  {...props} value={value}/>
            </>

           
    );
 
}