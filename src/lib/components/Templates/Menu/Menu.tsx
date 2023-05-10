
import { Pcr } from '../../Icon/Menu/Pcr'
import { Pppe } from '../../Icon/Menu/Pppe'
import { Sirp } from '../../Icon/Menu/Sipr'
import './Menu.scss'
export interface MenuProps{
    title: string
    Objeto: Object
}



export function Menu({title= 'teste', Objeto}: MenuProps) {
    const itemMenu = Object.values(Objeto).map(function(i){
        console.log(i)
        return(
            <>
            
                <li className="list-group-item">
                    <div className='svg'>
                        {i[0]}
                    </div>
                    <p>{i[1]}</p>
                </li> 
                <ul className="list-group flex-column d-inline-block submenu svg-submenu">
                        <li className="list-group-Subitem">
                            <div className="text ">
                       
                            </div>
                        </li>
                </ul>
        
            </>
        )
    })
    console.log(itemMenu)
    return(
<>


<div className="simple-admin">
    <div data-component="sidebar">
        <div className="sidebar">
        <ul className="list-group flex-column d-inline-block first-menu">
{itemMenu}
</ul>
</div>
</div>

</div>
      </>
    )
}