import { clsx } from 'clsx';
import './Dropdown.scss'

export interface DropdownProps {
    text: string;
    value: string;
    id: string;
    size?: 'md' | 'lg';
    error?: boolean;
    disable?: boolean;
    Option:Object;
    onChange?: Function | any;
    onBlur?: Function | any;
    onFocus?: Function | any;
    onClick?: Function | any

}

export function Dropdown({disable, size = 'md', value, text, id, error, Option, ...props}: DropdownProps ) {
    let estilo
    let label
   if(error){
    estilo = " red border dropdown"
    label = "colorRed"
   }else if(disable){
    estilo = 'gray'
    label = 'color-gray'
   } else {
    estilo = "border dropdown"
    label = ""
   }
   let ArrayOpition = Object.values(Option)?.map(function(opt){
    return <option value={opt.value}>{opt.label}</option>
    
   })
    return (
        <>
        <div>
            <label className={clsx(label, 'label' , 'labelDropDown')} htmlFor={text}>{text}</label>
            <select id={id} disabled={disable} value={value} name='text' className={clsx(
                'dropdown',
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
                )}  { ...props}>
                    <option value={""}>Selecione</option>
                {ArrayOpition}
            </select>
        </div>
            </>
    );
 
}