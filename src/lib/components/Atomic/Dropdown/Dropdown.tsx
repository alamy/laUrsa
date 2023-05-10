import { clsx } from 'clsx';
import './Dropdown.scss'

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
    estilo = " red border dropdown"
    label = " labelDropDown colorRed"
   } else {
    label = "labelDropDown"
    estilo = "border dropdown"
   }
   console.log(Option)
   let ArrayOpition = Option?.map(function(opt){
    return <option>{opt}</option>
   })
    return (
        <>
       <p className='labelInput'>
        <label className={clsx(label, 'label')} htmlFor={text}>{text}</label>
        </p>

        <select disabled={disable} className={clsx(
                'px-4',
                'border-solid',
                'rounded',
                '-mt-8',
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