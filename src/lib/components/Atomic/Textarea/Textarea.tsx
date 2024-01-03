import { clsx } from 'clsx';
import './Textarea.scss'

export interface TextareaProps {
    text: string;
    size?: 'md' | 'lg';
    error?: boolean;
    disable?: boolean;
    value?: string;
    onChange: Function | any;
}

export function Textarea({disable, size = 'md', text, error, value, ...props}: TextareaProps ) {
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
         <div>
        <label className={clsx(label, 'labelText ')} htmlFor={text}>{text}</label>
        <textarea disabled={disable} className={clsx(
                'textArea',
                'px-4',
                'border',
                '-mt-3',
               'rounded',
             {
                    'h-[68px]': size === 'md',
                    'h-[96px]': size === 'lg',
                },
                estilo )} id={text} {...props}>
                    {value}
                </textarea>
                </div>
            </>

           
    );
 
}