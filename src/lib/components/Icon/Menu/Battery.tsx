import { IconProps } from "../../../assets/InterfacePropsIcon";
import {SizeComponent, TypeComponent} from "../../../assets/TypeSizeComponent";


export function Battery({size = 'md', type= "Primary"}: IconProps ) {
    let estilo = '';
    let width:number | undefined;
    let height:number | undefined;

    width = SizeComponent(size)
    height = SizeComponent(size)
    estilo = TypeComponent(type)

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 13V11" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6.19M15 6H17C17.5304 6 18.0391 6.21071 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8V16C19 16.5304 18.7893 17.0391 18.4142 17.4142C18.0391 17.7893 17.5304 18 17 18H13.81" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 6L7 12H13L9 18" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
 
}