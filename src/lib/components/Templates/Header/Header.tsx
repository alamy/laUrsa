import { useState } from 'react';
import { clsx } from 'clsx';
import { Logo } from '../../Icon/Logo';
import { Avatar } from '../../Atomic/Avatar/Avatar';
import './Header.scss';
import { Down } from '../../Icon/System/Down';
import { Up } from '../../Icon/System/Up';
import { Menu } from '../../Organisms/Menu/Menu';


export interface HeaderProps {
    title: string,
    persona?: string,
    notification?: boolean,
    img?: '',
    home?: boolean,
    path?: string,
    onClick?: () => void,
    Logout?: () => void,
    Home?: () => void,
   
}


export function Header({title = 'Prefeitura do Recife', 
persona= '', 
img ='', 
notification, 
home = true, 
path= '/',
Logout,
Home,

...props}: HeaderProps) 
   
{

const [boxPerfil, setBoxPerfil] = useState(false)
const Perfil = () => {
    setBoxPerfil(!boxPerfil)
}
    return(
    <>
   
        <div className={clsx('header')}>
       
            <h2 className='headerTitle'>{title}</h2>
              
                <div className='logo'>
                    <Logo/>
                    
                </div>

                <div className={clsx('home', {'inline-block': home === true, 'none': home === false})} >
                   <div className='btnHome' onClick={Home} >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 13.5L18 3L31.5 13.5V30C31.5 30.7956 31.1839 31.5587 30.6213 32.1213C30.0587 32.6839 29.2956 33 28.5 33H7.5C6.70435 33 5.94129 32.6839 5.37868 32.1213C4.81607 31.5587 4.5 30.7956 4.5 30V13.5Z" stroke="#0F57BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.5 33V18H22.5V33" stroke="#0F57BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <ul className='persona'>
                    <li>
                        <Avatar 
                        text='teste' 
                        image={img} 
                        notification={notification} 
                        size='sm' />
                    </li>
                    <li> 
                       <p> Olá, {persona}</p>
                    </li>
                    <li>
                    {boxPerfil?
                        <Up size="sm" onClick={Perfil} /> : <Down size="sm" onClick={Perfil} />
                    }
                    </li>
                </ul>
                {boxPerfil? <div className='perfil'>
                    <button name='logout' onClick={Logout}>Logout</button>
                </div> : '' }
               
      

</div>
    </>
    );
}