import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { ColorDomain } from './ColorDomain';

export interface LabelProps extends ColorDomain {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Label({size = 'md', textColor = 'text-neutral-darkest', backgroundColor = 'bg-neutral-shine', children, asChild}: LabelProps ) {
    const Componente = asChild ? Slot : 'span';

    return (
        <Componente 
            className={clsx(textColor, backgroundColor, {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-lg': size === 'lg'
            })}
        >
            {children}
        </Componente>
    );
}