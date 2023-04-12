import { clsx } from 'clsx';

export interface ButtonProps {
    text: string;
    type?: 'primary' | 'secondary';
    size?: 'md' | 'lg';
    disable?: boolean;
}

export function Button({disable = false, text, type = 'primary', size = 'md'}: ButtonProps ) {
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
        <button disabled 
            className={clsx(
                'px-4',
                'border-x-2 border-y-2 rounded',
                'w-[344px]', {
                    'h-[48px]': size === 'md',
                    'h-[56px]': size === 'lg',
                },
                estilo
            )}
        >
            {text}
        </button>
    );
}