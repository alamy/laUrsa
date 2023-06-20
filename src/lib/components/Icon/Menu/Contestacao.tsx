
export interface ContestacaoProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Contestacao({type = 'Primary', size = 'md'}: ContestacaoProps ) {
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
            height = '4';
            break;
        case 'md':
            width = '19';
            height = '9';
            break;
        case 'lg':
            width = '24';
            height = '14';
            break;
        case 'xl' :
            width = '32';
            height = '22';
            break;    
    }   

    return (
        <svg width={width} height={height} viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.90179 16.4141H4.59725C2.61068 16.4141 1 14.8051 1 12.8185V9.67368C1 7.68712 2.61068 6.07643 4.59725 6.07643H5.90179V16.4141Z" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M5.90234 16.4146C17.5717 16.7922 24.0655 20.4932 24.0655 20.4932V2.00006C24.0655 2.00006 17.5717 5.69937 5.90234 6.07695" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M11.8912 17.0486V22.0423C11.8912 22.4403 11.5697 22.7617 11.1717 22.7617H10.3026C9.15964 22.7617 8.23438 21.8365 8.23438 20.6952V16.5605" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M24.0645 8.04982C25.4132 8.63151 26.364 9.98026 26.364 11.5416C26.364 13.1047 25.4132 14.4466 24.0645 15.0283" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M33.1814 11.541H29.5723" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
        <path d="M32.3116 7.20709L28.9746 8.69531" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
        <path d="M29.7572 3.6052L27.291 6.34863" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
        <path d="M29.572 19.3926L27.2266 16.7869" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
        <path d="M32.2122 15.8477L28.9688 14.4003" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
        <path d="M21.373 19.2939V3.19732" stroke={estilo} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>

        
    );
 
}