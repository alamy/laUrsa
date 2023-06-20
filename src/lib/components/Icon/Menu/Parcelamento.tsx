
export interface ParcelamentoProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Parcelamento({type = 'Primary', size = 'md'}: ParcelamentoProps ) {
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
        <path d="M12.75 19.833L21.25 11.333" stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.4583 12.7497C13.8495 12.7497 14.1667 12.4325 14.1667 12.0413C14.1667 11.6501 13.8495 11.333 13.4583 11.333C13.0671 11.333 12.75 11.6501 12.75 12.0413C12.75 12.4325 13.0671 12.7497 13.4583 12.7497Z" fill={estilo} stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.5423 19.8337C20.9335 19.8337 21.2507 19.5165 21.2507 19.1253C21.2507 18.7341 20.9335 18.417 20.5423 18.417C20.1511 18.417 19.834 18.7341 19.834 19.1253C19.834 19.5165 20.1511 19.8337 20.5423 19.8337Z" fill={estilo}stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.08398 29.75V7.08333C7.08398 6.33189 7.3825 5.61122 7.91385 5.07986C8.4452 4.54851 9.16587 4.25 9.91732 4.25H24.084C24.8354 4.25 25.5561 4.54851 26.0875 5.07986C26.6188 5.61122 26.9173 6.33189 26.9173 7.08333V29.75L22.6673 26.9167L19.834 29.75L17.0007 26.9167L14.1673 29.75L11.334 26.9167L7.08398 29.75Z" stroke={estilo} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
 
}