import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { ColorDomain } from './ColorDomain';

export interface ParagraphProps extends ColorDomain {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Paragraph({size = 'md', textColor = 'text-neutral-darkest', backgroundColor = 'bg-neutral-shine', children, asChild}: ParagraphProps ) {
    const Componente = asChild ? Slot : 'span';

    return (
        <Componente 
            className={clsx(textColor, backgroundColor, {
                'text-xs': size === 'xs',
                'text-sm': size === 'sm',
                'text-md': size === 'md',
                'text-lg': size === 'lg'
            })}
        >
            {children}
        </Componente>
    );
}