import { clsx } from 'clsx';
import './Button.scss'


export interface ButtonProps {
    text?: string | any;
    type?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    icone?: 'edite' | 'delete' | 'look';
    disable?: boolean;
    id?: string;
    onClick?: Function | any;
    name?: string
   
}

export function Button({disable = false, text, type = 'primary',name, size = 'md',id, icone,  ...props}: ButtonProps ) {
    let estilo = '';

    switch(type) {
        case 'primary':
            estilo = disable ? 
                        'primary-defalt' : 
                        'primary';
            break;
        case 'secondary':
            estilo = disable ? 
                        'secondary-default' :
                        'secondary';
            break;
    }

    switch(icone) {
        case 'edite':
            icone = 'edite'
            break;
        case 'delete' :
            icone = 'delete'
            break;
        case 'look' :
            icone = 'look'
            break;    
        default : ''
    }



    return (
    <div>
        <button  
            id={id} name={name}
            className={clsx(
                'buttonLaUrsa',
                 {
                    'h-[48px]': size === 'md',
                    'h-[56px]': size === 'lg',
                },
                {
                    'sm-bt': size === 'md',
                    'md-bt': size === 'md',
                    'lg-bt': size === 'lg',
                },
                {'largura': !icone} ,
                estilo,
                icone
            )}
            disabled={disable}
            {...props}
        >
            {text}
        </button>
    </div>
    );
}