
export interface ServidorProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Servidor({type = 'Primary', size = 'md'}: ServidorProps ) {
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
        <g clip-path="url(#clip0_703_23450)">
        <path d="M22.9331 51.3333C25.3331 53.4666 28.3998 54.6666 31.7331 54.6666C35.0664 54.6666 38.1331 53.4666 40.5331 51.3333" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38.1334 38.8C36.5334 40.4 34.4001 41.4667 32.0001 41.4667C29.4668 41.4667 27.0668 40.2667 25.6001 38.5333" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6665 36C19.3332 42.8 25.0665 48 31.9998 48C38.9332 48 44.6665 42.8 45.3332 36" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27.0665 33.3333H19.9998C19.1998 33.3333 18.6665 32.6666 18.6665 32V28C18.6665 27.2 19.3332 26.6666 19.9998 26.6666H27.9998C28.7998 26.6666 29.3332 27.3333 29.3332 28V31.0666C29.3332 32.2666 28.2665 33.3333 27.0665 33.3333Z" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M43.9998 33.3333H36.9332C35.5998 33.3333 34.6665 32.2666 34.6665 31.0666V28C34.6665 27.2 35.3332 26.6666 35.9998 26.6666H43.9998C44.7998 26.6666 45.3332 27.3333 45.3332 28V32C45.3332 32.6666 44.6665 33.3333 43.9998 33.3333Z" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.3335 29.3333H34.6668" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 45.3333V48.1333C24 50.2666 22.2667 52 20.1333 52H16C11.6 52 8 55.6 8 60" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M56 60C56 55.6 52.4 52 48 52H43.8667C41.7333 52 40 50.2666 40 48.1333V45.3333" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.3335 54.6666V60" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34.6665 54.6666V60" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6665 26.6666H15.7332C15.0665 26.6666 14.6665 27.2 14.6665 27.7333V34.8C14.6665 36.1333 15.7332 37.3333 17.1998 37.3333H18.6665" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M45.3335 26.6666H48.2668C48.9335 26.6666 49.3335 27.2 49.3335 27.7333V34.8C49.3335 36.1333 48.2668 37.3333 46.8002 37.3333H45.3335" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6665 29.3333V17.3333C18.6665 12.9333 22.2665 9.33331 26.6665 9.33331H37.3332C41.7332 9.33331 45.3332 12.9333 45.3332 17.3333V29.3333" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M45.3333 22.6666H29.3333C26.4 22.6666 24 20.2666 24 17.3333" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
        
        
    );
 
}