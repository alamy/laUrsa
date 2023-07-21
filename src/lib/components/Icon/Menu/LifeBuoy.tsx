
export interface LifeBuoyProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function LifeBuoy({type = 'Primary', size = 'md'}: LifeBuoyProps ) {
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
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.8301 14.83L19.0701 19.07" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.93018 19.07L9.17018 14.83" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.8301 9.16999L19.0701 4.92999" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.8301 9.17001L18.3601 5.64001" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.93018 4.92999L9.17018 9.16999" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
 
}