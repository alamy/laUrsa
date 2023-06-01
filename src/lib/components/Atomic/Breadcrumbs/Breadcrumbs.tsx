import { Right } from '../../Icon/System/Right'
import './Breadcrumbs.scss'

export interface BreadcrumbsProps {
    label: string[]
}

export function Breadcrumbs({label}: BreadcrumbsProps) {
    console.log(label.length)
    console.log('################')
    let texto = label.map(function(i){
        console.log()  
        return <p className='prev'>{i}<Right type="Third" /></p> 
    })

    return (
        <div className='breadcrumbs'>{texto} <p className='ative'>Atual</p></div>
    )
}

