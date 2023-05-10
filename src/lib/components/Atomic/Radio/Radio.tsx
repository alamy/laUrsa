import { clsx } from 'clsx';
import './Radio.scss'
export interface RadioProps {
    text: string;
    disable?: boolean;
    size?:'sm' | 'md' | 'lg'  ; 
}

export function Radio({disable, text, size}: RadioProps ) {
    let label;
    let checked;
    if(disable){
        label = 'color-gray',
        checked = 'checkmark-false'
        
    }else {
        label = 'color'
        checked = 'checkmark-true'
    }
    return (
    <>

<label className={clsx(
                    label,
                    "container",
                    {
                        'container-font-lg': size === 'lg',
                        'container-font-md': size === 'md',
                        'container-font-sm': size === 'sm',
                    },
                    )
                }>One
  <input type="radio" name={text} id={text} disabled={disable} />
  <span className={clsx(
                "checkmark",
                checked,
                {
                    'radio-grande': size === 'lg',
                    'radio-medio': size === 'md',
                    'radio-pequeno': size === 'sm',
                },
                )} >
                </span>
</label>

        
    </>  
    );
 
}