import { useState } from 'react';
import { clsx } from 'clsx';
import './Header.scss';
import { Settings } from '../../Icon/System/Settings';



export interface HeaderProps {
    linksExternos: Object,
    subTitulo?: string
    Configuracao?: (i: any) => void
    tamanho: boolean
    Size: () => void
    menuSettings: Object
}


export function Header(
  {
    linksExternos,
    Configuracao,
    tamanho,
    subTitulo,
    Size,
    menuSettings
  }: HeaderProps) 
   
{
  const [flag, setFlag] = useState(false)
    let data =  Date()
    let dia = new Date(data).getDate()
    let mes = (new Date(data).getMonth()<10?'0':'') + new Date(data).getMonth()
    let ano = new Date(data).getFullYear()

    let hora = new Date(data).getHours()
    let minutos = (new Date(data).getMinutes()<10?'0':'') + new Date(data).getMinutes()
    
    let itemSettings = Object.values(menuSettings).map(function(item){
      return <p onClick={Configuracao} id={item.to}>{item.name}</p>
    })

    let LinkExternos = Object.values(linksExternos).map(function(link){
        return <li>
                <button>{link.label}</button>
              </li>
      })

      const actionetiing = () => {
        setFlag(true)
      }
      const actionetiingFalse = () => {
        setFlag(false)
      }
    return(
        <>
          <div className={clsx({
        'header-small': tamanho === true,
        'header-big': tamanho === false
        },'headers')}>
        <button name="menu" onClick={Size} className="hamburguer">
          <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.58002 18.4999H17.933" stroke="#1474FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.58002 12.4999H17.933" stroke="#1474FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.58002 6.49994H17.933" stroke="#1474FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      <ul className={clsx({
        'link_big': tamanho === true,
        'link_small' : tamanho === false
        }, "link_externos")}>
       {LinkExternos}
      </ul>
       
        <div className='configuracao' onMouseOver={actionetiing} onMouseLeave={actionetiingFalse}>
           <Settings type='Primary' size='md'  />
      
        {flag ? <div className='menu-box-settings'>
          {itemSettings}
        </div> : ''}
        </div>
        
      <div className={clsx({
        'data' : tamanho === false,
        'data-small': tamanho === true})}>
      <i>{subTitulo}</i> - <b>  {dia} / {mes} / {ano} - {hora} : {minutos}</b>
      </div> 
    </div>
       </>
    );
}