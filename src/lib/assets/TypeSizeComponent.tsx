
export function SizeComponent(size: any){
    let tamanho;
    console.log
    switch(size){
        case 'sm':
            tamanho = 14;
          
            break;
        case 'md':
            tamanho = 19;
  
            break;
        case 'lg':
           
        tamanho = 24;
            break;
        case 'xl' :
          
        tamanho = 32;
            break;    
    }   
  return tamanho
};


export function TypeComponent(type: any){
    let estilo = '';
    switch(type) {
        case 'Primary':
            estilo = "#1474FF"
            break;
        case 'Second':
            estilo = "#FFF"
            break;
    }

    return estilo
}