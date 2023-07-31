import { IconProps } from "../../../assets/InterfacePropsIcon";
import {SizeComponent, TypeComponent} from "../../../assets/TypeSizeComponent";


export function Link({size = 'md', type= "Primary"}: IconProps ) {
    let estilo = '';
    let width:number | undefined;
    let height:number | undefined;

    width = SizeComponent(size)
    height = SizeComponent(size)
    estilo = TypeComponent(type)

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 13C10.4295 13.5742 10.9774 14.0492 11.6066 14.393C12.2357 14.7367 12.9315 14.9411 13.6467 14.9924C14.3618 15.0436 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59702 21.9548 8.334 21.9434 7.02302C21.932 5.71204 21.4061 4.45797 20.4791 3.53093C19.5521 2.60389 18.298 2.07805 16.987 2.06666C15.676 2.05526 14.413 2.55924 13.47 3.47003L11.75 5.18003" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.0002 11C13.5707 10.4259 13.0228 9.9508 12.3936 9.60704C11.7645 9.26328 11.0687 9.05886 10.3535 9.00765C9.63841 8.95643 8.92061 9.05961 8.24885 9.3102C7.5771 9.56079 6.96709 9.95291 6.4602 10.46L3.4602 13.46C2.54941 14.403 2.04544 15.666 2.05683 16.977C2.06822 18.288 2.59407 19.542 3.52111 20.4691C4.44815 21.3961 5.70221 21.922 7.01319 21.9334C8.32418 21.9447 9.58719 21.4408 10.5302 20.53L12.2402 18.82" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
 
}