
export interface SidebarProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Sidebar({type = 'Primary', size = 'md'}: SidebarProps ) {
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
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 3V21" stroke={estilo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
 
}