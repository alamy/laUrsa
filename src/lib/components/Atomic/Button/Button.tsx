import { clsx } from 'clsx';
import './Button.scss'

export interface ButtonProps {
    text?: string | any;
    type?: 'primary' | 'secondary';
    size?: 'md' | 'lg';
    disable?: boolean;
    id?: string;
    onClick?: Function | any;
    name?: string
   
}

export function Button({disable = false, text, type = 'primary',name, size = 'md',id,  ...props}: ButtonProps ) {
    let estilo = '';

    switch(type) {
        case 'primary':
            estilo = disable ? 
                        'text-neutral-light bg-neutral-lightest border-neutral-light' : 
                        'text-neutral-shine bg-brandPrimary-default hover:border-brandPrimary-light hover:bg-brandPrimary-light active:bg-brandPrimary-dark active:border-brandPrimary-dark border-brandPrimary-default';
            break;
        case 'secondary':
            estilo = disable ? 
                        'text-neutral-light bg-neutral-lightest border-neutral-lightest' :
                        'text-brandPrimary-default bg-neutral-shine hover:text-brandPrimary-light hover:border-brandPrimary-light active:text-brandPrimary-medium active:border-brandPrimary-medium border-brandPrimary-default';
            break;
    }

    return (
        <button id={id} name={name}
            className={clsx(
                'buttonLaUrsa',
                'px-4',
                'border-x-2', 
                'border-y-2', 
                'rounded',
                'mr-4',
                'relative',
                 {
                    'h-[48px]': size === 'md',
                    'h-[56px]': size === 'lg',
                },
                estilo
            )}
            {...props}
        >
            {text}
        </button>
    );
}