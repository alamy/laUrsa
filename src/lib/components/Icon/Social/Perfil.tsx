
export interface PerfilProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'lx';
}

export function Perfil({type = 'Primary', size = 'md'}: PerfilProps ) {
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
            width = '46';
            height = '46';
            break;
        case 'md':
            width = '65';
            height = '65';
            break;
        case 'lg':
            width = '81';
            height = '81';
            break;
        case 'lx' :
            width = '121';
            height = '121';
            break;    
    }   

    return (
        <svg width={width} height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="59" fill="#1474FF" stroke="#F2F5F7" stroke-width="2"/>
        <mask id="mask0_80_58" maskUnits="userSpaceOnUse" x="2" y="2" width="116" height="116">
        <circle cx="60" cy="60" r="58" fill="#1474FF"/>
        </mask>
        <g mask="url(#mask0_80_58)">
        <path d="M98.6668 118.345V108.679C98.6668 103.551 96.6299 98.6335 93.0042 95.0078C89.3785 91.3821 84.461 89.3452 79.3335 89.3452H40.6668C35.5393 89.3452 30.6218 91.3821 26.9961 95.0078C23.3704 98.6335 21.3335 103.551 21.3335 108.679V118.345" fill="white"/>
        <path d="M98.6668 118.345V108.679C98.6668 103.551 96.6299 98.6335 93.0042 95.0078C89.3785 91.3821 84.461 89.3452 79.3335 89.3452H40.6668C35.5393 89.3452 30.6218 91.3821 26.9961 95.0078C23.3704 98.6335 21.3335 103.551 21.3335 108.679V118.345" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M60.0001 74.8453C70.6776 74.8453 79.3334 66.1894 79.3334 55.5119C79.3334 44.8344 70.6776 36.1786 60.0001 36.1786C49.3226 36.1786 40.6667 44.8344 40.6667 55.5119C40.6667 66.1894 49.3226 74.8453 60.0001 74.8453Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
        

    );
 
}