
export interface ChevronDownProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function ChevronDown({type = 'Primary', size = 'md'}: ChevronDownProps ) {
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
        <path d="M6 9L12 15L18 9" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
 
}