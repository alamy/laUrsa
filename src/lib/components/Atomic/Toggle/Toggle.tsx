import { clsx } from 'clsx';
import './Toogle.scss'

export interface ToggleProps {
    text: string;
    disable?: boolean;
    size?:'sm' | 'md' | 'lg'  ; 
}

export function Toggle({disable}: ToggleProps ) {
    let label;
    if(disable){
        label = 'toggle-gray'
    }else {
        label = ''
    }
    return (
    <>
    <div className='toggle'>
        <p>Off</p> 
            <input disabled={disable} className={clsx(
                "tgl",
                {
                    "tgl-ios": disable  === false,
                    "tgl-gray": disable === true
                }
                )
                } id="cb2" type="checkbox"/>
            <label  className={clsx("tgl-btn", label)} htmlFor="cb2"></label>
        <p>On</p>
    </div>
    </>  
    );
 
}