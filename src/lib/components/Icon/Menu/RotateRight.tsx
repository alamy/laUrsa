
export interface RotateRightProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function RotateRight({type = 'Primary', size = 'md'}: RotateRightProps ) {
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
    <path d="M23 4V10H17" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.4899 15C19.8399 16.8399 18.6094 18.4187 16.984 19.4985C15.3586 20.5783 13.4263 21.1006 11.4783 20.9866C9.53026 20.8726 7.67203 20.1286 6.18363 18.8667C4.69524 17.6047 3.6573 15.8932 3.22625 13.9901C2.79519 12.0869 2.99436 10.0952 3.79374 8.31508C4.59313 6.53496 5.94942 5.06288 7.65823 4.12065C9.36705 3.17843 11.3358 2.81711 13.2678 3.09116C15.1999 3.3652 16.9905 4.25975 18.3699 5.64001L22.9999 10" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

        
        
    );
 
}