
export interface AprenderProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Aprender({type = 'Primary', size = 'md'}: AprenderProps ) {
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
        <g clip-path="url(#clip0_704_23516)">
        <path d="M57.3333 16H60V53.3333H4V16H6.66667" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 49.3334C32 47.0667 33.7333 45.3334 36 45.3334H54.6667V10.6667H36C33.7333 10.6667 32 12.4 32 14.6667V49.3334Z" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.0002 49.3334C32.0002 47.0667 30.2668 45.3334 28.0002 45.3334H9.3335V10.6667H28.0002C30.2668 10.6667 32.0002 12.4 32.0002 14.6667V49.3334Z" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6665 25.3334H26.6665" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6665 20H26.6665" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6665 37.3334H22.6665" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6665 30.6667H26.6665" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M48 10.6667V28.1334L44 25.2L40 28.1334V10.6667" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    );
 
}