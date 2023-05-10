
export interface TuristaProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Turista({type = 'Primary', size = 'md'}: TuristaProps ) {
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
            height = '47';
            break;
        case 'md':
            width = '58';
            height = '61';
            break;
        case 'lg':
            width = '64';
            height = '67';
            break;
        case 'xl' :
            width = '74';
            height = '77';
            break;    
    }   

    return (
        <svg width={width} height={height} viewBox="0 0 64 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M56 18.6899H8V52.7985H56V18.6899Z" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36.6668 47.3411C42.9261 47.3411 48.0002 42.149 48.0002 35.7442C48.0002 29.3394 42.9261 24.1473 36.6668 24.1473C30.4076 24.1473 25.3335 29.3394 25.3335 35.7442C25.3335 42.149 30.4076 47.3411 36.6668 47.3411Z" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30.1333 35.0621C30.1333 31.3784 33.0666 28.3768 36.6666 28.3768C40.2666 28.3768 43.2 31.3784 43.2 35.0621" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.6665 18.6899V52.7985" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.6668 14.5969H13.3335V18.6899H22.6668V14.5969Z" stroke={estilo} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
        
        

              
        
    );
 
}