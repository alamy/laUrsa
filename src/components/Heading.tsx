import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { ColorDomain } from './ColorDomain';

export interface HeadingProps extends ColorDomain {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({size = 'md', textColor = 'text-neutral-darkest', backgroundColor = 'bg-neutral-shine', children, asChild}: HeadingProps ) {
    const Componente = asChild ? Slot : 'span';

    return (
        <Componente 
            className={clsx(textColor, backgroundColor, {
                'text-lg': size === 'xs',
                'text-xl': size === 'sm',
                'text-2xl': size === 'md',
                'text-3xl': size === 'lg',
                'text-4xl': size === 'xl',
                'text-5xl': size === '2xl'
            })}
        >
            {children}
        </Componente>
    );
}