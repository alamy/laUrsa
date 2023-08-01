import { IconProps } from "../../../assets/InterfacePropsIcon";
import {SizeComponent, TypeComponent} from "../../../assets/TypeSizeComponent";


export function RotateLeft({size = 'md', type= "Primary"}: IconProps ) {
    let estilo = '';
    let width:number | undefined;
    let height:number | undefined;

    width = SizeComponent(size)
    height = SizeComponent(size)
    estilo = TypeComponent(type) 

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4V10H7" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.51 15C4.15839 16.8404 5.38734 18.4202 7.01166 19.5014C8.63598 20.5826 10.5677 21.1066 12.5157 20.9945C14.4637 20.8824 16.3226 20.1402 17.8121 18.8798C19.3017 17.6194 20.3413 15.909 20.7742 14.0064C21.2072 12.1038 21.0101 10.112 20.2126 8.33111C19.4152 6.55025 18.0605 5.0768 16.3528 4.13277C14.6451 3.18874 12.6769 2.82527 10.7447 3.09713C8.81245 3.36898 7.02091 4.26143 5.64 5.64001L1 10" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
    );
 
}