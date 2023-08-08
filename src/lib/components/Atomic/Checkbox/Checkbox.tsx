import { clsx } from 'clsx';
import './Checkbox.scss'

export interface CheckboxProps {
    text: string;
    disable?: boolean;
    size?:'sm' | 'md' | 'lg'  ; 
    onClick?: Function | any
}

export function Checkbox({disable, text, size , ...props}: CheckboxProps ) {
    let label;
    if(disable){
        label = 'color-gray'
    }else {
        label = 'color'
    }
    return (
    <>
        <input 
            disabled={disable} 
            type="checkbox" 
            id={text}
            className={clsx('cursor-pointer',
                {
                    'w-4': size === 'lg',
                    'w-3.5': size === 'md',
                    'w-3': size === 'sm',
                },
                {
                    'h-4': size === 'lg',
                    'h-3.5': size === 'md',
                    'h-3': size === 'sm',
                },                

                )} {...props}/>
        <label htmlFor={text} 
            className={clsx(
                'ml-1','cursor-pointer',
                label,
                {
                'text-lg': size === 'lg',
                'text-md': size === 'md',
                'text-xs': size === 'sm',
                }
            )}>
              {" "}  {text}
        </label>
    </>  
    );
 
}