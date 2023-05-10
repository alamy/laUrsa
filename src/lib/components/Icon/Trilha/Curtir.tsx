
export interface CurtirProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Curtir({type = 'Primary', size = 'md'}: CurtirProps ) {
    let estilo = '';
    let width;
    let height;

    switch(type) {
        case 'Primary':
            estilo = "#1474FF"
            break;
        case 'Second':
            estilo = "#FFF"
            break;
    }

    switch(size){
        case 'sm':
            width = '44';
            height = '44';
            break;
        case 'md':
            width = '58';
            height = '58';
            break;
        case 'lg':
            width = '64';
            height = '64';
            break;
        case 'xl' :
            width = '74';
            height = '74';
            break;    
    }   

    return (
        <svg width={width} height={height} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_699_23738)">
        <path d="M40 44L29.3333 38.6667L24 26.6667L34.6667 33.3334L40 44Z" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 21.3334V24" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 45.3334V48" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45.3337 34.6667H42.667" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.3337 34.6667H18.667" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32.0002 57.3333C44.5186 57.3333 54.6668 47.1851 54.6668 34.6667C54.6668 22.1482 44.5186 12 32.0002 12C19.4817 12 9.3335 22.1482 9.3335 34.6667C9.3335 47.1851 19.4817 57.3333 32.0002 57.3333Z" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32.0003 52C41.5733 52 49.3337 44.2396 49.3337 34.6667C49.3337 25.0938 41.5733 17.3334 32.0003 17.3334C22.4274 17.3334 14.667 25.0938 14.667 34.6667C14.667 44.2396 22.4274 52 32.0003 52Z" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.3335 6.66669H38.6668" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28.5337 8V11.2" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M35.2002 8V11.2" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        </svg>
        
        
    );
 
}