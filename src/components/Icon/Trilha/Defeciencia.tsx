
export interface DefecienciaProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Defeciencia({type = 'Primary', size = 'md'}: DefecienciaProps ) {
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
        <g clip-path="url(#clip0_700_23438)">
        <path d="M22.9331 47.3333C25.3331 49.4666 28.3998 50.6666 31.7331 50.6666C35.0664 50.6666 38.1331 49.4666 40.5331 47.3333" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38.1334 34.8C36.5334 36.4 34.4001 37.4667 32.0001 37.4667C29.4668 37.4667 27.0668 36.2667 25.6001 34.5333" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6665 32C19.3332 38.8 25.0665 44 31.9998 44C38.9332 44 44.6665 38.8 45.3332 32" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 41.3333V44.1333C24 46.2666 22.2667 48 20.1333 48H16C11.6 48 8 51.6 8 56" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M56 56C56 51.6 52.4 48 48 48H43.8667C41.7333 48 40 46.2666 40 44.1333V41.3333" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32 50.6666V56" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6665 22.6666H15.7332C15.0665 22.6666 14.6665 23.2 14.6665 23.7333V30.8C14.6665 32.1333 15.7332 33.3333 17.1998 33.3333H18.6665" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M45.3335 22.6666H48.2668C48.9335 22.6666 49.3335 23.2 49.3335 23.7333V30.8C49.3335 32.1333 48.2668 33.3333 46.8002 33.3333H45.3335" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6665 25.3333V13.3333C18.6665 8.93331 22.2665 5.33331 26.6665 5.33331H37.3332C41.7332 5.33331 45.3332 8.93331 45.3332 13.3333V25.3333" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M41.3332 25.3333V14.8C41.3332 13.0667 40.2665 11.6 38.7998 11.0667C37.4665 12.9333 34.7998 14.2666 31.7332 14.2666C28.7998 14.2666 26.1332 13.0667 24.7998 11.3333C23.4665 12 22.6665 13.3333 22.6665 14.9333V25.3333" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
        
    );
 
}