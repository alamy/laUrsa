
export interface ShieldOffProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function ShieldOff({type = 'Primary', size = 'md'}: ShieldOffProps ) {
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
            width = '14';
            height = '14';
            break;
        case 'md':
            width = '19';
            height = '19';
            break;
        case 'lg':
            width = '24';
            height = '24';
            break;
        case 'xl' :
            width = '32';
            height = '32';
            break;    
    }   

    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1554_53515)">
        <path d="M19.6898 14C19.8909 13.3522 19.9954 12.6783 19.9998 12V5L11.9998 2L8.83984 3.18" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.73 4.72998L4 4.99998V12C4 18 12 22 12 22C14.117 20.8829 16.0197 19.4001 17.62 17.62" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 1L23 23" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1554_53515">
        <rect width={width} height={height} fill="white"/>
        </clipPath>
        </defs>
        </svg>
    );
 
}