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
    onClick?: Function | any;
    valueText?: String;
    labelText?: any;
    about?: any
    Default?: string

}

export function Dropdown({
                            disable, 
                            size = 'md', 
                            value, 
                            text, 
                            id, 
                            error, 
                            Option,
                            valueText,
                            labelText,
                            Default,
                             ...props}: DropdownProps ) {
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
       const valueT:any = valueText;
       const labelT:any = labelText;
        return <option value={opt[valueT]} about={opt[labelT]}>{opt[labelT]}</option>
   })
    return (
        <>
        <div>
            <label className={clsx(label, 'label' , 'labelDropDown')} htmlFor={text}>{text}</label>
            <select id={id} disabled={disable} value={value} about={props.about} name={'text'} className={clsx(
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
                    {!Default? <option value={""}>Selecione</option> : <option value={Default}>{Default}</option> }
                {ArrayOpition}
            </select>
        </div>
            </>
    );
 
}