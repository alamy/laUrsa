import { IconProps } from "../../../assets/InterfacePropsIcon";
import {SizeComponent, TypeComponent} from "../../../assets/TypeSizeComponent";


export function Award({size = 'md', type= "Primary"}: IconProps ) {
    let estilo = '';
    let width:number | undefined;
    let height:number | undefined;

    width = SizeComponent(size)
    height = SizeComponent(size)
    estilo = TypeComponent(type)
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
 
}