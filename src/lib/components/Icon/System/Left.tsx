
export interface LeftProps {
    type?: 'Primary' | 'Second' | 'Third' ;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    onClick?: Function | any;
}

export function Left({type = 'Primary', size = 'md' , ...props}: LeftProps ) {
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
        case 'Third':
            estilo = "#DBDBDB"
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
<path d="M15 18L9 12L15 6" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        
    );
 
}