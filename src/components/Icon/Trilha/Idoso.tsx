
export interface IdosoProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Idoso({type = 'Primary', size = 'md'}: IdosoProps ) {
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
        <g clip-path="url(#clip0_678_26458)">
        <path d="M34.6665 16C34.6665 18.9333 37.0665 21.3333 39.9998 21.3333H45.3332V26.6667" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.3332 16C29.3332 18.9333 26.9332 21.3333 23.9998 21.3333H18.6665V28" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6665 34.6667C19.3332 41.4667 25.0665 46.6667 31.9998 46.6667C38.9332 46.6667 44.6665 41.4667 45.3332 34.6667" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.7998 49.6C25.1998 51.8666 28.3998 53.3333 31.9998 53.3333C35.5998 53.3333 38.7998 51.8666 41.1998 49.6" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38.1334 37.4667C36.5334 39.0667 34.4001 40.1333 32.0001 40.1333C29.4668 40.1333 27.0668 38.9333 25.6001 37.2" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 44V46.8C24 48.9333 22.2667 50.6667 20.1333 50.6667H16C11.6 50.6667 8 54.2667 8 58.6667" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M56 58.6667C56 54.2667 52.4 50.6667 48 50.6667H43.8667C41.7333 50.6667 40 48.9333 40 46.8V44" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.3335 52V60" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M46.6665 52V60" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M50.6665 31.8666C50.6665 36.5333 47.1998 40.5333 42.7998 41.2" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.3335 32V21.4667C13.3335 16.2667 17.6002 12 22.8002 12H41.2002C46.4002 12 50.6668 16.2667 50.6668 21.4667V32" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.3335 41.2C16.8002 40.4 13.3335 36.5333 13.3335 31.8666" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 12C24 7.6 27.6 4 32 4C36.4 4 40 7.6 40 12" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27.0665 32H19.9998C19.1998 32 18.6665 31.3333 18.6665 30.6666V26.6666C18.6665 25.8666 19.3332 25.3333 19.9998 25.3333H27.9998C28.7998 25.3333 29.3332 26 29.3332 26.6666V29.7333C29.3332 30.9333 28.2665 32 27.0665 32Z" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M43.9998 32H36.9332C35.7332 32 34.6665 30.9333 34.6665 29.7333V26.6666C34.6665 25.8666 35.3332 25.3333 35.9998 25.3333H43.9998C44.7998 25.3333 45.3332 26 45.3332 26.6666V30.6666C45.3332 31.3333 44.6665 32 43.9998 32Z" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.3335 28H34.6668" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    );
 
}