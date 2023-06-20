
export interface CobrancaProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Cobranca({type = 'Primary', size = 'md'}: CobrancaProps ) {
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
        <svg width={width} height={height} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7507 7.08301H9.91732C9.16587 7.08301 8.4452 7.38152 7.91385 7.91287C7.3825 8.44422 7.08398 9.16489 7.08398 9.91634V26.9163C7.08398 27.6678 7.3825 28.3885 7.91385 28.9198C8.4452 29.4512 9.16587 29.7497 9.91732 29.7497H24.084C24.8354 29.7497 25.5561 29.4512 26.0875 28.9198C26.6188 28.3885 26.9173 27.6678 26.9173 26.9163V9.91634C26.9173 9.16489 26.6188 8.44422 26.0875 7.91287C25.5561 7.38152 24.8354 7.08301 24.084 7.08301H21.2507" stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.4167 4.25H15.5833C14.0185 4.25 12.75 5.51853 12.75 7.08333C12.75 8.64814 14.0185 9.91667 15.5833 9.91667H18.4167C19.9815 9.91667 21.25 8.64814 21.25 7.08333C21.25 5.51853 19.9815 4.25 18.4167 4.25Z" stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.8327 15.583H16.291C15.7274 15.583 15.1869 15.8069 14.7884 16.2054C14.3899 16.6039 14.166 17.1444 14.166 17.708C14.166 18.2716 14.3899 18.8121 14.7884 19.2106C15.1869 19.6091 15.7274 19.833 16.291 19.833H17.7077C18.2713 19.833 18.8118 20.0569 19.2103 20.4554C19.6088 20.8539 19.8327 21.3944 19.8327 21.958C19.8327 22.5216 19.6088 23.0621 19.2103 23.4606C18.8118 23.8591 18.2713 24.083 17.7077 24.083H14.166" stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 14.167V15.5837M17 24.0837V25.5003V24.0837Z" stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    );
 
}