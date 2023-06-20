
export interface ControleDebitoProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function ControleDebito({type = 'Primary', size = 'md'}: ControleDebitoProps ) {
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
        <svg width={width} height={height} viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.90234" y="1.84766" width="23.0982" height="24.3531" rx="3" stroke={estilo} stroke-width="2"/>
        <line x1="4.86719" y1="15.9502" x2="22.0397" y2="15.9502" stroke={estilo} stroke-width="1.5"/>
        <line x1="4.86719" y1="10.665" x2="11.472" y2="10.665" stroke={estilo} stroke-width="1.5"/>
        <line x1="4.86719" y1="5.38281" x2="11.472" y2="5.38281" stroke={estilo} stroke-width="1.5"/>
        <line x1="4.86719" y1="21.2334" x2="22.0397" y2="21.2334" stroke={estilo} stroke-width="1.5"/>
        <path d="M19.2624 7.44248C19.1428 7.23493 18.9689 7.06383 18.7595 6.94748C18.5501 6.83114 18.313 6.77394 18.0736 6.782H16.7526C16.4023 6.782 16.0663 6.92117 15.8185 7.1689C15.5708 7.41663 15.4316 7.75262 15.4316 8.10296C15.4316 8.4533 15.5708 8.78929 15.8185 9.03702C16.0663 9.28474 16.4023 9.42392 16.7526 9.42392H18.0736C18.4239 9.42392 18.7599 9.56309 19.0076 9.81082C19.2553 10.0585 19.3945 10.3945 19.3945 10.7449C19.3945 11.0952 19.2553 11.4312 19.0076 11.6789C18.7599 11.9267 18.4239 12.0658 18.0736 12.0658H16.7526C16.5132 12.0739 16.2761 12.0167 16.0666 11.9003C15.8572 11.784 15.6834 11.6129 15.5637 11.4054" stroke={estilo} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.4121 12.0667V13.3877M17.4121 5.46191V6.78287V5.46191Z" stroke={estilo} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    );
 
}