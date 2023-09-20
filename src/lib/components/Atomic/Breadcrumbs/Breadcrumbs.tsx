import { Right } from '../../Icon/System/Right'
import './Breadcrumbs.scss'

export interface BreadcrumbsProps {
    label: string[]
    Atual: string
}

export function Breadcrumbs({label, Atual}: BreadcrumbsProps) {
    console.log(label.length)
    let texto = label.map(function(i){
        console.log()  
        return <><p className='prev'>{i}</p> <i className='prev'> / </i> </>
    })

    return (
        <div className='breadcrumbs'> {texto} <p className='prev'>{Atual}</p></div>
    )
}

