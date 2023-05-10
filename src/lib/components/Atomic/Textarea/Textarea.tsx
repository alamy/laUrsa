import { clsx } from 'clsx';


export interface TextareaProps {
    text: string;
    size?: 'md' | 'lg';
    error?: boolean;
    type: 'text' | 'number';
    disable?: boolean;
}

export function Textarea({disable, size = 'md', text, error, type}: TextareaProps ) {
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
        <textarea disabled={disable}  className={clsx(
                'px-4',
                'border',
                '-mt-3',
               'rounded',
                'w-[344px]', {
                    'h-[68px]': size === 'md',
                    'h-[96px]': size === 'lg',
                },
                estilo )} id={text}>

                </textarea>
            </>

           
    );
 
}