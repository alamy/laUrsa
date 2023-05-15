
import { Logo } from '../../Icon/Logo'
import { Pcr } from '../../Icon/Menu/Pcr'
import { Pppe } from '../../Icon/Menu/Pppe'
import { Sirp } from '../../Icon/Menu/Sipr'
import './Menu.scss'
export interface MenuProps{
    title: string
    Objeto: Object
}



export function Menu({title= 'teste', Objeto}: MenuProps) {
    return(
<>

<div className="wrapper">

    <input type="checkbox" id="navigation" className='navigation' />
    <label htmlFor="navigation" className="labelNavigation">
        <Logo />
    </label>

    <div className="nav">
        <ul>
            <li>
            <Pcr
                size="lg"
                />
                <p>Home</p>
            </li>
            <li>
            <Sirp size="lg"/>
                <p>Latest News</p>
            </li>
            <li>
            <Sirp size="lg"/>
                <p>What We Do</p>
            </li>
            <li>
            <Sirp size="lg"/>
                <p>Another Link</p>
            </li>
            <li>
            <Sirp size="lg"/>
                <p>Contact</p>
            </li>
        </ul>
    </div>

       
    </div>


      </>
    )
}