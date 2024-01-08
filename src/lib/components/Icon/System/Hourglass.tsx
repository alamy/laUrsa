
export interface HourglassProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    value?: string
}

export function Hourglass({type = 'Primary', size = 'md', value}: HourglassProps ) {
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
        <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="hourglass_empty" clip-path="url(#clip0_1557_55717)">
        <path id="Vector" d="M10.6667 2.66663C9.2 2.66663 8 3.86663 8 5.33329V9.55996C8 10.2666 8.28 10.9466 8.78667 11.4533L13.3333 16L8.77333 20.56C8.28 21.0666 8 21.7466 8 22.4533V26.6666C8 28.1333 9.2 29.3333 10.6667 29.3333H21.3333C22.8 29.3333 24 28.1333 24 26.6666V22.4533C24 21.7466 23.72 21.0666 23.2267 20.5733L18.6667 16L23.2133 11.4666C23.72 10.96 24 10.28 24 9.57329V5.33329C24 3.86663 22.8 2.66663 21.3333 2.66663H10.6667ZM21.3333 22V25.3333C21.3333 26.0666 20.7333 26.6666 20 26.6666H12C11.2667 26.6666 10.6667 26.0666 10.6667 25.3333V22L16 16.6666L21.3333 22ZM16 15.3333L10.6667 9.99996V6.66663C10.6667 5.93329 11.2667 5.33329 12 5.33329H20C20.7333 5.33329 21.3333 5.93329 21.3333 6.66663V9.99996L16 15.3333Z" fill={estilo}/>
        </g>
        </svg>
        
              
        
    );
 
}