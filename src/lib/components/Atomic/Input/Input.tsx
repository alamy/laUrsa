import { clsx } from 'clsx';
import './input.scss'
import { useState } from 'react';

export interface InputProps {
    text: string;
    size?: 'md' | 'lg';
    error?: boolean;
    disable?: boolean;
    type: 'text' | 'number' | 'date';
    onChange?: Function | any;
    value?: string
}

export function Input({disable, size = 'md', text, error, value, type, ...props}: InputProps ) {
    let [state, setState] = useState( { value: ""} )
   function handleChange(event: { target: { value: string; }; }) {
    setState({ value: event.target.value.replace(/[^\d\s-/]/g, "") });
      }

     function handleNull(event: { target: { value: string; }; }) {
        setState({ value: event.target.value });
     }
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
        <p className='labelInput'>
            <label className={clsx(label)} htmlFor={text}>{text}</label>
        </p>
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
            )} id={text}  {...props} value={value} />
            </>

           
    );
 
}