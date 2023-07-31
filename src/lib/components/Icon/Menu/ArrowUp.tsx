import { IconProps } from "../../../assets/InterfacePropsIcon";
import {SizeComponent, TypeComponent} from "../../../assets/TypeSizeComponent";


export function ArrowUp({size = 'md', type= "Primary"}: IconProps ) {
    let estilo = '';
    let width:number | undefined;
    let height:number | undefined;

    width = SizeComponent(size)
    height = SizeComponent(size)
    estilo = TypeComponent(type)

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12L12 5L19 12" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
 
}