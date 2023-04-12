import { clsx } from 'clsx';
import './atomic.css'

export interface DropdownProps {
    text: string;
    size?: 'md' | 'lg';
    error?: boolean;
    disable?: boolean;
    Option: ['1','2'];
}

export function Dropdown({disable, size = 'md', text, error, Option}: DropdownProps ) {
    let estilo
    let label
   if(error){
    estilo = " red border input"
    label = " label colorRed"
   } else {
    label = "label"
    estilo = "border input"
   }
   console.log(Option)
   let ArrayOpition = Option?.map(function(opt){
    return <option>{opt}</option>
   })
    return (
        <>
        <label className={label} htmlFor={text}>{text}</label>

        <select disabled={disable} className={clsx(
                'px-4',
                'border-solid',
                'rounded',
                'bg-[#fff]',
                'w-[344px]', {
                    'h-[48px]': size === 'md',
                    'h-[56px]': size === 'lg',
                },
                estilo
            )} id={text}>

            {ArrayOpition}
        </select>
            </>
    );
 
}