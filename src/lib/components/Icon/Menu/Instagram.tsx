import { IconProps } from "../../../assets/InterfacePropsIcon";
import {SizeComponent, TypeComponent} from "../../../assets/TypeSizeComponent";


export function Instagram({size = 'md', type= "Primary"}: IconProps ) {
    let estilo = '';
    let width:number | undefined;
    let height:number | undefined;

    width = SizeComponent(size)
    height = SizeComponent(size)
    estilo = TypeComponent(type)

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.9997 11.37C16.1231 12.2022 15.981 13.0522 15.5935 13.799C15.206 14.5458 14.5929 15.1514 13.8413 15.5297C13.0898 15.9079 12.2382 16.0396 11.4075 15.9059C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1902 8.22744 13.4229 8.09377 12.5922C7.96011 11.7615 8.09177 10.9099 8.47003 10.1584C8.84829 9.40685 9.45389 8.79374 10.2007 8.40624C10.9475 8.01874 11.7975 7.87658 12.6297 8C13.4786 8.12588 14.2646 8.52146 14.8714 9.1283C15.4782 9.73515 15.8738 10.5211 15.9997 11.37Z" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 6.5H17.51" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
 
}