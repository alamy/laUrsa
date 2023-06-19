import { useState } from 'react';
import { clsx } from 'clsx';
import './Header.scss';
import { Settings } from '../../Icon/System/Settings';



export interface HeaderProps {
    linksExternos: Object
    Configurcao: () => void
    tamanho: boolean
    Size: () => void
   
}


export function Header(
  {
    linksExternos,
    Configurcao,
    tamanho,
    Size,
    ...props
  }: HeaderProps) 
   
{
    let data =  Date()
    let dia = new Date(data).getDate()
    let mes = (new Date(data).getMonth()<10?'0':'') + new Date(data).getMonth()
    let ano = new Date(data).getFullYear()

    let hora = new Date(data).getHours()
    let minutos = (new Date(data).getMinutes()<10?'0':'') + new Date(data).getMinutes()

    let LinkExternos = Object.values(linksExternos).map(function(link){
        return <li>
                <button>{link.label}</button>
              </li>
      })
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
       
        <div className='configuracao' onClick={Configurcao}>
           <Settings type='Primary' size='md' />
        </div>
      <div className='data'>
        {dia}/{mes}/{ano} {hora}:{minutos}
      </div> 
    </div>
       </>
    );
}