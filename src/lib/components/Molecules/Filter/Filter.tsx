import { clsx } from 'clsx';
import './Filter.scss'
import { useEffect, useState } from 'react';
import { Checkbox } from '../../Atomic/Checkbox/Checkbox';
import { Tag } from '../../Atomic/Tag/Tag';

export interface FiltertProps {
    text: string;
    size?: 'md' | 'lg';
    error?: boolean;
    disable?: boolean;
    onChange?: Function | any;
    opcoes: Object;
    valueText?: String;
    labelText?: any;

}

export function Filter({disable, size = 'md', text, error, opcoes,...props}: FiltertProps ) {

    const [boxCheck, setBoxCheck] = useState(false)
    const [tag , setTag]:any = useState([])
    const [value, setValue] = useState(String)
    const [change, setChange] = useState(false)
    const flagArray:any = []
    let apcaoSearch: any
    const caixa = () => {
        setBoxCheck(!boxCheck)
    }
    let estilo
    let label
    if(error){
        estilo = "red"
        label = " color-red"
    } else if(disable){
        estilo = 'gray'
        label = 'color-gray'
    }else{
        label = "color"
        estilo = "border-default"
    }


   let apcao = 
    Object.values(opcoes).map(function(i:any){
        const valueT:any = props.valueText;
       const labelT:any = props.labelText;
        return <li className='border-b pl-9 pr-9 pt-2 pb-2 border-gray-700'>
            <Checkbox text={i[valueT]} size='lg' onClick={function(t:any) {
                console.log(t.target.checked);
                if(t.target.checked === true) {
                    setTag((prevTag: any) => [...prevTag, i[valueT]])
                }else {
                    const listar = i[valueT]
                    var indice = tag.indexOf(listar);
                    console.log(listar)
                    while(indice >= 0){
                        tag.splice(indice, 1);
                        indice = tag.indexOf(indice);
                        console.log(indice)
                    }
                    setTag((prevTag: any) => [...prevTag])
                }
                
                }} />
            </li>
       })

   const InserirInput = (i:any) => {
    if(!!i){
    setValue(i)
   // setTag((prevTag: any) => [...prevTag, i])
    }else {
        return null
    }   
   }
//    apcaoSearch = Object.values(opcoes).filter(
//     function(item) {
//         const texto = item.toLowerCase().indexOf(value.toLowerCase()) > -1
//         return (
//         <li className='border-b pl-9 pr-9 pt-2 pb-2 border-gray-700'> 
  

//         <p>teste</p>
//         </li> )
//     })
   const Search = (i:any) => {
    setValue(i)
    setBoxCheck(true)
    
   }

    return (
    <>
        <div className='rounded w-full border filter-input'>
            <input type={'text'} disabled={disable} placeholder="  Todos"  className={clsx(
                'px-4',
                'mt-0',
                'w-11/12',
                'rounded',
                {
                    'h-[48px]': size === 'md',
                    'h-[86px]': size === 'lg',
                },
                    estilo
                )} id={text} 
                    {...props} 
                   value={value}
                   onChange={function(i:any){
                    Search(i.target.value)
                   } }
                    onBlur={function(i:any){ 
                        InserirInput(i.target.value); 
                        setValue('')}}
                    />

            <button  className='btnFilter w-1/12' onClick={caixa}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 29V24" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 24H31" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 29V22" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22H15" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 29V20" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 16H23" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 20V11" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 16V11" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18V11" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
   
            <div className={clsx(
                {
                    'all-height' : boxCheck === true,
                    'out-height' :  boxCheck === false
                },
                'box-check border-l border-r rounded right-4 absolute')}>
                   
           <ul className='pb-0 pt-0'>
           {apcao}
        
           </ul>
        </div> 
  
        <div className='mt-2'>
            <Tag  Objeto={tag} onClick={function (i: any): void {               
                
                const listar = i.target.value
                var indice = tag.indexOf(listar);

                while(indice >= 0){
                    tag.splice(indice, 1);
                    indice = tag.indexOf(indice);
                   
                }
                setTag((prevTag: any) => [...prevTag])
              
            } }  />
            </div>
    </>
    
    );
 
}