
export interface EmpresarioProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Empresario({type = 'Primary', size = 'md'}: EmpresarioProps ) {
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
        <g clip-path="url(#clip0_704_23563)">
        <path d="M52.9329 36.2667C51.5996 38 49.7329 39.3333 47.5996 40.1333" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M29.4666 19.4667L28.7999 19.0667C26.7999 17.7333 24.5333 16.9333 22.2666 16.8" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M46.5333 40.6667C47.3333 40.6667 48 40.2667 48.4 39.6V39.4667C49.2 38.2667 48.9333 36.6667 47.7333 36L42.1333 30.6667" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.7334 35.3333C10.4001 36.6666 11.3334 38 12.5334 39.0666" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34.2663 33.0667L45.733 40.8C46.933 41.6 47.1997 43.2 46.3997 44.2667V44.4C45.5997 45.6 43.9997 45.8667 42.933 45.0667L31.333 37.3333" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31.3334 37.3333L42.0001 44.5333C43.2001 45.3333 43.4667 46.9333 42.6667 48V48.1333C41.8667 49.3333 40.2667 49.6 39.2001 48.8L29.7334 42.4" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30.933 49.6L32.933 50.9334C34.133 51.7334 35.733 51.4667 36.3996 50.2667V50.1334C37.1996 48.9334 36.933 47.3334 35.733 46.6667L29.4663 42.4" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44.3998 15.3334C42.2664 15.0667 39.9998 15.3334 37.7331 16.2667L35.5998 17.0667L22.9331 22.1334C23.9998 24.8 27.0664 26.1334 29.7331 25.0667L33.8664 23.4667L36.2664 27.3334C38.2664 30.6667 42.6664 31.6 45.8664 29.6" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.0663 41.7333L20.5329 36.9333C21.3329 35.7333 21.0663 34.1333 19.9996 33.3333C18.7996 32.5333 17.1996 32.8 16.3996 33.8667L12.9329 38.6667C12.1329 39.8667 12.3996 41.4667 13.4663 42.2667C14.6663 43.2 16.2663 42.9333 17.0663 41.7333Z" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.3334 44.8L26.2667 38C27.0667 36.8 26.8 35.2 25.7334 34.4C24.5334 33.6 22.9334 33.8667 22.1334 34.9334L17.2 41.7334C16.4 42.9334 16.6667 44.5334 17.7334 45.3334C18.8 46.2667 20.4 46 21.3334 44.8Z" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.4667 47.8667L28.9333 43.0667C29.7333 41.8667 29.4667 40.2667 28.4 39.4667C27.2 38.6667 25.6 38.9333 24.8 40L21.3333 44.8C20.5333 46 20.8 47.6 21.8667 48.4C23.0667 49.3333 24.6667 49.0667 25.4667 47.8667Z" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M29.7333 50.9334L31.8666 48C32.6666 46.8 32.3999 45.2 31.3333 44.4C30.1333 43.6 28.5333 43.8667 27.7333 44.9334L25.5999 47.8667C24.7999 49.0667 25.0666 50.6667 26.1333 51.4667C27.1999 52.4 28.7999 52.1334 29.7333 50.9334Z" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.9998 12L22.5332 16.5333L9.33317 36L2.6665 30.6667" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M51.9999 12L44.3999 14.9333L53.1999 36.6667L61.3332 33.3333" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        </svg>
        
        
        
    );
 
}