import { useState } from 'react';
import { clsx } from 'clsx';
import './Header.scss';
import { Settings } from '../../Icon/System/Settings';
import { X } from '../../Icon/System/X';

export interface HeaderProps {
  linksExternos?: Object,
  subTitulo?: string
  Configuracao?: (i: any) => void
  tamanho: boolean
  Size: () => void
  menuSettings?: Object
  Closer: () => void
}

export function Header(
  {
    linksExternos,
    Configuracao,
    tamanho,
    subTitulo,
    Size,
    menuSettings,
    Closer
  }: HeaderProps) {
  const [flag, setFlag] = useState(false)
  let data = new Date()
    let mesNumber = data.getMonth()+1
  let dia = (new Date(data).getDate() < 10 ? '0' : '') + new Date(data).getDate()
  let mes = (mesNumber < 10 ? '0' : '') + mesNumber
  let ano = new Date(data).getFullYear()

  let hora = new Date(data).getHours()
  let minutos = (new Date(data).getMinutes() < 10 ? '0' : '') + new Date(data).getMinutes()
  let itemSettings
  menuSettings ?
    itemSettings = Object.values(menuSettings).map(function (item) {
      return <li><p onClick={Configuracao} id={item.to}>{item.name}</p></li>
    }) : null
  let LinkExternos
  linksExternos ?
    LinkExternos = Object.values(linksExternos).map(function (link) {
      return <li>
        <button>{link.label}</button>
      </li>
    }) : null

  const actionetiing = () => {
    setFlag(true)
  }

  const actionetiingFalse = () => {
    setFlag(false)
  }
  // const actionetiingFalse = () => {
  //   setFlag(false)
  // }
  return (
    <>
      <div className={clsx({
        'header-small': tamanho === true,
        'header-big': tamanho === false
      }, 'headers flex')}>

        <div>
          <button name="menu" onClick={Size} className="hamburguer">
            <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.58002 18.4999H17.933" stroke="#1474FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.58002 12.4999H17.933" stroke="#1474FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.58002 6.49994H17.933" stroke="#1474FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <div>
          <ul className={clsx({
            'link_big': tamanho === true,
            'link_small': tamanho === false
          }, "link_externos")}>
            {LinkExternos}
          </ul>
        </div>


  
          <div className='box-data grid grid-rows-3 grid-flow-col gap-3'>
            <div>
              <i>{subTitulo}</i> - <b>  {dia} / {mes} / {ano} - {hora} : {minutos}</b>
            </div>

            
            
          </div>
          <div className='configuracao' onMouseMove={actionetiing} onMouseOut={actionetiingFalse}>
              <Settings type='Primary' size='md' />
          </div>
          
       
        <div
              className='logout'
              title='Sair'
              onClick={Closer}>
              <X type='Primary' size='md' />
            </div>
           
      </div>
      <section onMouseMove={actionetiing} onMouseOut={actionetiingFalse} className={clsx({
                'menu-box-settings': flag === true,
                'menu-box-settings-none': flag === false,
              }
              )}>
                <h1>Configuração do sistema</h1>
                <ul className='sub-menu-header'>
                  {itemSettings}
                </ul>
              </section>
    
    </>
  );
}