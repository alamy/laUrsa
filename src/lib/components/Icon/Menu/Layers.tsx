import { IconProps } from "../../../assets/InterfacePropsIcon";
import {SizeComponent, TypeComponent} from "../../../assets/TypeSizeComponent";


export function Layers({size = 'md', type= "Primary"}: IconProps ) {
    let estilo = '';
    let width:number | undefined;
    let height:number | undefined;

    width = SizeComponent(size)
    height = SizeComponent(size)
    estilo = TypeComponent(type) 

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 17L12 22L22 17" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
 
}