

import './Menu.scss'
export interface MenuProps{
    title: string
    Objeto: Object
}



export function Menu({title= 'teste', Objeto}: MenuProps) {

    const item = Object.values(Objeto).map(function(item){
        return(
            <li key={item} id={item}>
                {item[0]}
                <p>
                    {item[1]}
                </p>
            </li>
                
        
        )
    })


    return(
    <>
        

        <div className="nav">
            <ul>
                {item}
            </ul>
        </div>
    </>
    )
}