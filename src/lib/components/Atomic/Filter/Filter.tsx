import { clsx } from 'clsx';
import './Filter.scss'
import { useState } from 'react';

export interface FiltertProps {
    text: string;
    size?: 'md' | 'lg';
    error?: boolean;
    disable?: boolean;
    type: 'text' | 'number' | 'date';
    onChange?: Function | any;
    value?: string
}

export function Filter({disable, size = 'md', text, error, value, type, ...props}: FiltertProps ) {

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
        <div className='rounded border'>
            <input type={type}  disabled={disable}  className={clsx(
                'px-4',
                'mt-0',
                'w-1/2',
                'rounded',
                {
                        'h-[48px]': size === 'md',
                        'h-[86px]': size === 'lg',
                    },
                    estilo
                )} id={text} placeholder={text}  {...props} value={value} />
            <button>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 29V24" stroke="#4F97FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 24H31" stroke="#4F97FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 29V22" stroke="#4F97FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 22H15" stroke="#4F97FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 29V20" stroke="#4F97FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 16H23" stroke="#4F97FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M28 20V11" stroke="#4F97FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 16V11" stroke="#4F97FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 18V11" stroke="#4F97FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
            </>
    
           
    );
 
}