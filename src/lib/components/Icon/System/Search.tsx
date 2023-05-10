
export interface SearchProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Search({type = 'Primary', size = 'md'}: SearchProps ) {
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
        <svg width={width} height={height} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6665 14.6665H15.6132L15.2399 14.3065C16.8399 12.4399 17.6665 9.89319 17.2132 7.18652C16.5865 3.47986 13.4932 0.519858 9.75986 0.0665242C4.11986 -0.626809 -0.626809 4.11986 0.0665242 9.75986C0.519858 13.4932 3.47986 16.5865 7.18652 17.2132C9.89319 17.6665 12.4399 16.8399 14.3065 15.2399L14.6665 15.6132V16.6665L20.3332 22.3332C20.8799 22.8799 21.7732 22.8799 22.3199 22.3332C22.8665 21.7865 22.8665 20.8932 22.3199 20.3465L16.6665 14.6665ZM8.66652 14.6665C5.34652 14.6665 2.66652 11.9865 2.66652 8.66652C2.66652 5.34652 5.34652 2.66652 8.66652 2.66652C11.9865 2.66652 14.6665 5.34652 14.6665 8.66652C14.6665 11.9865 11.9865 14.6665 8.66652 14.6665Z" fill={estilo}/>
        </svg>
    );
 
}