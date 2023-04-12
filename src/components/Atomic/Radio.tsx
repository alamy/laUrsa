import { clsx } from 'clsx';

export interface RadioProps {
    text: string;
    disable?: boolean;
    size?:'sm' | 'md' | 'lg'  ; 
}

export function Radio({disable, text, size}: RadioProps ) {
    return (
    <>
        <input 
            disabled={disable} 
            type="radio"
            name={text} 
            id={text}
            className={clsx(
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

            )}/>
        <label htmlFor={text} 
            className={clsx(
                'ml-1',
                {
                'text-lg': size === 'lg',
                'text-md': size === 'md',
                'text-xs': size === 'sm',
                }
            )}>
                {text}
        </label>
    </>  
    );
 
}