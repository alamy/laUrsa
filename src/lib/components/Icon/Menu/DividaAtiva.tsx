import { IconProps } from "../../../assets/InterfacePropsIcon";
import {SizeComponent, TypeComponent} from "../../../assets/TypeSizeComponent";


export function DividaAtiva({size = 'md', type= "Primary"}: IconProps ) {
    let estilo = '';
    let width:number | undefined;
    let height:number | undefined;

    width = SizeComponent(size)
    height = SizeComponent(size)
    estilo = TypeComponent(type)

    return (
        <svg width={width} height={height} viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1667 23.375C19.6435 23.375 24.0833 19.0657 24.0833 13.75C24.0833 8.43426 19.6435 4.125 14.1667 4.125C8.68984 4.125 4.25 8.43426 4.25 13.75C4.25 19.0657 8.68984 23.375 14.1667 23.375Z" stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29.75 28.875L21.25 20.625" stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.0007 9.625H13.459C12.8954 9.625 12.3549 9.8423 11.9564 10.2291C11.5579 10.6159 11.334 11.1405 11.334 11.6875C11.334 12.2345 11.5579 12.7591 11.9564 13.1459C12.3549 13.5327 12.8954 13.75 13.459 13.75H14.8757C15.4392 13.75 15.9797 13.9673 16.3783 14.3541C16.7768 14.7409 17.0007 15.2655 17.0007 15.8125C17.0007 16.3595 16.7768 16.8841 16.3783 17.2709C15.9797 17.6577 15.4392 17.875 14.8757 17.875H11.334" stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.166 8.25V9.625M14.166 17.875V19.25V17.875Z" stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
 
}