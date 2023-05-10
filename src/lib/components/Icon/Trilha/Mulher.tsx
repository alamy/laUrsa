
export interface MulherProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Mulher({type = 'Primary', size = 'md'}: MulherProps ) {
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
        <g clip-path="url(#clip0_697_23675)">
        <path d="M45.3333 26.6667H29.3333C26.4 26.6667 24 24.2667 24 21.3334" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.6665 26.6667V33.3334C18.6665 40.6667 24.6665 46.6667 31.9998 46.6667C39.3332 46.6667 45.3332 40.6667 45.3332 33.3334V26.6667" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.7998 49.6C25.1998 51.8667 28.3998 53.3334 31.9998 53.3334C35.5998 53.3334 38.7998 51.8667 41.1998 49.6" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38.1334 37.4667C36.5334 39.0667 34.4001 40.1333 32.0001 40.1333C29.4668 40.1333 27.0668 38.9333 25.6001 37.2" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 44V46.8C24 48.9333 22.2667 50.6667 20.1333 50.6667H16C11.6 50.6667 8 54.2667 8 58.6667" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M56 58.6667C56 54.2667 52.4 50.6667 48 50.6667H43.8667C41.7333 50.6667 40 48.9333 40 46.8V44" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38.6665 52V60" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.3335 52V60" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.8002 49.8667C16.5335 48.5334 16.5335 46.8 15.8668 45.7334C14.8002 44.2667 11.6002 43.8667 11.0668 41.8667C10.5335 40.2667 12.6668 37.8667 12.4002 35.7334C12.0002 34.1334 9.3335 32.4 9.3335 30.2667C9.3335 27.2 12.4002 24.8 13.3335 22.2667C14.4002 19.4667 13.6002 15.6 15.6002 13.6C17.6002 11.4667 21.4668 12 24.1335 10.9334C26.6668 9.86669 29.0668 6.66669 32.0002 6.66669C34.9335 6.66669 37.3335 9.86669 39.8668 10.9334C42.5335 12 46.4002 11.6 48.4002 13.6C50.2668 15.6 49.6002 19.4667 50.6668 22.2667C51.6002 24.8 54.6668 27.2 54.6668 30.2667C54.6668 32.2667 51.8668 34 51.7335 35.6C51.4668 37.6 53.6002 40 53.0668 41.6C52.4002 43.4667 49.2002 44 48.2668 45.4667C47.4668 46.5333 47.7335 48.5334 47.3335 49.8667" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        </svg>

        

              
        
    );
 
}