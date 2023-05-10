
export interface LgbtProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Lgbt({type = 'Primary', size = 'md'}: LgbtProps ) {
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
        <g clip-path="url(#clip0_703_23477)">
        <path d="M37.3332 25.3333H32.7999C31.4666 25.6 30.3999 24.5333 30.3999 23.2C30.3999 22.4 30.7999 21.6 31.4666 20.9333C32.1332 20.2667 33.0666 20 33.9999 20H39.1999C40.1332 20 41.0666 20.2667 41.7332 20.9333C42.3999 21.6 42.7999 22.2667 42.7999 23.2C42.7999 23.8667 42.5332 24.4 42.1332 24.8" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.9331 39.4666C17.8664 38.1333 18.3998 37.0666 19.0664 35.6C19.5998 34.2666 22.1331 31.4666 23.1998 30.4L30.2664 23.3333C32.1331 25.2 32.1331 28.1333 30.2664 30L27.3331 32.9333L31.0664 37.0666C33.1998 39.4666 33.0664 43.0666 30.7998 45.2" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M35.0664 31.8667L48.2664 18.6667C49.1997 17.7333 50.6664 17.7333 51.5997 18.6667C52.5331 19.6 52.5331 21.0667 51.5997 22L38.3997 35.2" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38.5332 35.2L48.7999 24.9333C49.7332 24 51.1999 24 52.1332 24.9333C53.0665 25.8667 53.0665 27.3333 52.1332 28.2667L41.8665 38.5333" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31.1997 53.6C32.3997 52.6666 33.5997 51.8666 35.0664 51.2C36.2664 50.6666 37.333 49.8666 38.2664 48.9333L45.733 41.4666L52.7997 34.4C53.733 33.4666 53.733 32 52.7997 31.0666C51.8664 30.1333 50.3997 30.1333 49.4664 31.0666L41.9997 38.5333" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34.8001 18.8C36.4001 17.3333 38.1334 15.7333 39.0667 14.8C40.6667 13.2 42.4001 11.3333 41.8667 8.8C41.4667 6 38.9334 4 36.1334 4C32.9334 4 30.4001 6.66667 30.4001 9.86667C30.4001 6.66667 27.8667 4 24.8001 4C22.0001 4 19.4667 6 18.9334 8.8C18.4001 11.3333 20.0001 13.0667 21.7334 14.9333C23.3334 16.5333 28.9334 21.6 30.1334 22.8" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.6665 43.6L15.8665 38.4L32.2665 54.8L27.0665 60L10.6665 43.6Z" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        </svg>
        
        

              
        
    );
 
}