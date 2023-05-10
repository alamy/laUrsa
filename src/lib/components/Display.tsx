import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { ColorDomain } from './ColorDomain';

export interface DisplayProps extends ColorDomain {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
}

export function Display({size = 'md', textColor = 'text-neutral-darkest', backgroundColor = 'bg-neutral-shine', children, asChild}: DisplayProps ) {
    const Componente = asChild ? Slot : 'span';

    return (
        <Componente 
            className={clsx(textColor, backgroundColor, {
                'text-xl': size === 'xs',
                'text-3xl': size === 'sm',
                'text-5xl': size === 'md',
                'text-6xl': size === 'lg',
                'text-7xl': size === 'xl'
            })}
        >
            {children}
        </Componente>
    );
}