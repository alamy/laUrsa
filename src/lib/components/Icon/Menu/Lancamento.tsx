
export interface LancamentoProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Lancamento({type = 'Primary', size = 'md'}: LancamentoProps ) {
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
        <svg width={width} height={height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 23.275C24 23.8272 24.4477 24.275 25 24.275C25.5523 24.275 26 23.8272 26 23.275H24ZM2.00143 23.2748C2.00143 22.7225 1.55371 22.2748 1.00142 22.2748C0.44914 22.2748 0.00142497 22.7225 0.00142497 23.2748H2.00143ZM0 23.2735C0 23.8258 0.447715 24.2735 1 24.2735C1.55228 24.2735 2 23.8258 2 23.2735H0ZM4.39371 17.4297C4.946 17.4297 5.39371 16.982 5.39371 16.4297C5.39371 15.8774 4.946 15.4297 4.39371 15.4297V17.4297ZM7 15.9732C6.44772 15.9732 6 16.4209 6 16.9732C6 17.5255 6.44772 17.9732 7 17.9732V15.9732ZM13 17.9732C13.5523 17.9732 14 17.5255 14 16.9732C14 16.4209 13.5523 15.9732 13 15.9732V17.9732ZM16 15.9732C15.4477 15.9732 15 16.4209 15 16.9732C15 17.5255 15.4477 17.9732 16 17.9732V15.9732ZM22 17.9732C22.5523 17.9732 23 17.5255 23 16.9732C23 16.4209 22.5523 15.9732 22 15.9732V17.9732ZM7 19.9666C6.44772 19.9666 6 20.4143 6 20.9666C6 21.5189 6.44772 21.9666 7 21.9666V19.9666ZM13 21.9666C13.5523 21.9666 14 21.5189 14 20.9666C14 20.4143 13.5523 19.9666 13 19.9666V21.9666ZM16 19.9666C15.4477 19.9666 15 20.4143 15 20.9666C15 21.5189 15.4477 21.9666 16 21.9666V19.9666ZM22 21.9666C22.5523 21.9666 23 21.5189 23 20.9666C23 20.4143 22.5523 19.9666 22 19.9666V21.9666ZM2.66579 24C2.11351 24 1.66579 24.4477 1.66579 25C1.66579 25.5523 2.11351 26 2.66579 26V24ZM25.969 23.3073C25.969 22.7551 25.5213 22.3073 24.969 22.3073C24.4167 22.3073 23.969 22.7551 23.969 23.3073H25.969ZM17 6.70756C17.5523 6.70756 18 6.25984 18 5.70756C18 5.15528 17.5523 4.70756 17 4.70756V6.70756ZM14.5 5.70756V4.70756V5.70756ZM14.5 8.70263V9.70263V8.70263ZM13 10.6977C12.4477 10.6977 12 11.1454 12 11.6977C12 12.25 12.4477 12.6977 13 12.6977V10.6977ZM16 11.6977C16 11.1454 15.5523 10.6977 15 10.6977C14.4477 10.6977 14 11.1454 14 11.6977H16ZM14 12.696C14 13.2483 14.4477 13.696 15 13.696C15.5523 13.696 16 13.2483 16 12.696H14ZM16 4.7092C16 4.15692 15.5523 3.7092 15 3.7092C14.4477 3.7092 14 4.15692 14 4.7092H16ZM14 5.70756C14 6.25984 14.4477 6.70756 15 6.70756C15.5523 6.70756 16 6.25984 16 5.70756H14ZM5.39082 23.275V2.99671H3.39082V23.275H5.39082ZM6.39082 2H23V0H6.39082V2ZM24 2.99671V23.275H26V2.99671H24ZM23 2C23.5538 2 24 2.44779 24 2.99671H26C26 1.34012 24.6553 0 23 0V2ZM5.39082 2.99671C5.39082 2.44779 5.83699 2 6.39082 2V0C4.73552 0 3.39082 1.34012 3.39082 2.99671H5.39082ZM0.00142497 23.2748C0.00142497 24.7632 1.2076 25.9675 2.69688 25.9675V23.9675C2.31015 23.9675 2.00143 23.6566 2.00143 23.2748H0.00142497ZM2.69688 25.9675C4.18524 25.9675 5.39082 24.7628 5.39082 23.275H3.39082C3.39082 23.6572 3.08168 23.9675 2.69688 23.9675V25.9675ZM2 23.2735V18.4264H0V23.2735H2ZM3 17.4297H4.39371V15.4297H3V17.4297ZM2 18.4264C2 17.8775 2.44616 17.4297 3 17.4297V15.4297C1.3447 15.4297 0 16.7698 0 18.4264H2ZM7 17.9732H13V15.9732H7V17.9732ZM16 17.9732H22V15.9732H16V17.9732ZM7 21.9666H13V19.9666H7V21.9666ZM16 21.9666H22V19.9666H16V21.9666ZM2.66579 26H23.2693V24H2.66579V26ZM23.2693 26C24.7534 26 25.969 24.7995 25.969 23.3073H23.969C23.969 23.6853 23.6584 24 23.2693 24V26ZM17 4.70756H14.5V6.70756H17V4.70756ZM14.5 4.70756C13.8375 4.70756 13.2018 4.97029 12.7328 5.43849L14.1459 6.85387C14.2395 6.76038 14.3669 6.70756 14.5 6.70756V4.70756ZM12.7328 5.43849C12.2638 5.90674 12 6.54218 12 7.20509H14C14 7.07367 14.0523 6.9473 14.1459 6.85387L12.7328 5.43849ZM12 7.20509C12 7.86801 12.2638 8.50345 12.7328 8.9717L14.1459 7.55632C14.0523 7.46289 14 7.33652 14 7.20509H12ZM12.7328 8.9717C13.2018 9.43989 13.8375 9.70263 14.5 9.70263V7.70263C14.3669 7.70263 14.2395 7.64981 14.1459 7.55632L12.7328 8.9717ZM14.5 9.70263H15.5V7.70263H14.5V9.70263ZM15.5 9.70263C15.6331 9.70263 15.7605 9.75544 15.8541 9.84893L17.2672 8.43356C16.7982 7.96536 16.1625 7.70263 15.5 7.70263V9.70263ZM15.8541 9.84893C15.9477 9.94236 16 10.0687 16 10.2002H18C18 9.53724 17.7362 8.90181 17.2672 8.43356L15.8541 9.84893ZM16 10.2002C16 10.3316 15.9477 10.458 15.8541 10.5514L17.2672 11.9668C17.7362 11.4985 18 10.8631 18 10.2002H16ZM15.8541 10.5514C15.7605 10.6449 15.6331 10.6977 15.5 10.6977V12.6977C16.1625 12.6977 16.7982 12.435 17.2672 11.9668L15.8541 10.5514ZM15.5 10.6977H13V12.6977H15.5V10.6977ZM14 11.6977V12.696H16V11.6977H14ZM14 4.7092V5.70756H16V4.7092H14Z" fill={estilo}/>
        </svg>

    );
 
}