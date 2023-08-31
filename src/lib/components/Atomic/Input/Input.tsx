import { clsx } from 'clsx';
import './input.scss'
import { useState } from 'react';

export interface InputProps {
    text: string
    size?: 'md' | 'lg'
    error?: boolean
    disable?: boolean
    type: 'text' | 'number' | 'date'
    onChange?: Function | any
    value?: string
    min?:  string | number | undefined
    max?:  string | number | undefined
    moeda?: boolean
    maxLength?: number
    placeholder?: string
    onBlur?: Function | any
    
}

export function Input({disable, size = 'md', text, error, value, type, ...props}: InputProps ) {

    let estilo
    let label
    let moeda

    if(props.moeda){
        moeda = 'moeda'
    }

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
        <div>
            <label className={clsx(label, 'labelInput')} htmlFor={text}>{text}</label>
            {type === 'date' ? 
            
            <input type={type}  disabled={disable}  className={clsx(
                    'inputText',
                    'px-4',
                    'mt-0',
                'rounded',
                'border',
                {
                        'h-[48px]': size === 'md',
                        'h-[86px]': size === 'lg',
                    },
                    estilo
                )} id={text}  {...props} value={value} min={props.min} max={props.max} /> : 

            <input type={type}  disabled={disable}  className={clsx(
                    'inputText',
                    'px-4',
                    'mt-0',
                'rounded',
                'border',
                {
                        'h-[48px]': size === 'md',
                        'h-[86px]': size === 'lg',
                    },
                    estilo,
                    moeda
                )} id={text} onBlur={props.onBlur}  {...props} value={value} maxLength={props.maxLength} placeholder={props.placeholder}/>
            }
        </div>
            </>
    
           
    );
 
}