import { clsx } from 'clsx';
import './atomic.css'
export interface AvatarProps {
    text: string;
    size?: 'sm' | 'md' | 'lg' | 'lx';
    image?: '',
    notification: boolean,
}

export function Avatar({ text, size = 'md', image = '', notification}: AvatarProps ) {
    let estilo = '';

    if (!image){
        estilo = ' bg-brandPrimary-default   border-brandPrimary-default';
    }else {
        estilo = ' bg-neutral-shine   border-brandPrimary-default'
    }
   
    return (
        <div 
            className={clsx(
                'rounded-full',
                'border-x-2 border-y-2 rounded',
                {
                    'w-[40px]': size === 'sm', 
                    'w-[64px]': size === 'md', 
                    'w-[80px]': size === 'lg', 
                    'w-[120px]': size === 'lx', 
                },
                {
                    'h-[40px]': size === 'sm',
                    'h-[64px]': size === 'md',
                    'h-[80px]': size === 'lg',
                    'h-[120px]': size === 'lx',
                },
                estilo
            )}
        >
            <span className={clsx(
                {'orange' : notification === true},
                {
                    'w-[8px]': size === 'sm', 
                    'w-[12px]': size === 'md', 
                    'w-[16px]': size === 'lg', 
                    'w-[20px]': size === 'lx', 
                },
                {
                    'h-[8px]': size === 'sm',
                    'h-[12px]': size === 'md',
                    'h-[16px]': size === 'lg',
                    'h-[20px]': size === 'lx',
                }, 
                'rounded-full')
                }>
            </span>
            <img className={clsx(
                {'perfil': image !== ''},
                
                {
                    '-mt-2': size === 'sm' && image !== '' && notification === true,
                    '-mt-3': size === 'md'  && image !== '' && notification === true,
                    '-mt-4': size === 'lg'  && image !== '' && notification === true,
                    '-mt-5': size === 'lx'  && image !== '' && notification === true,
                },  
                'rounded-full')
                } src={image} alt='' title={text} />
        </div>
    );
}