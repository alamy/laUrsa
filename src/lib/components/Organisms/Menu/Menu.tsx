import { useEffect, useState } from 'react'

import { Right } from '../../Icon/System/Right'
import { Avatar } from '../../Atomic/Avatar/Avatar'
import { X } from '../../Icon/System/X'
import { Logo } from '../../Icon/Logo'
import clsx from 'clsx'
import './Menu.scss'
export interface MenuProps{
    titulo: string
    menu: Object
    Navegacao?: (i: any) => void
    size: boolean
    
}



export function Menu({titulo= 'teste', menu, size, Navegacao}: MenuProps) {
    let data =  Date()
    let dia = new Date(data).getDate()
    let mes = (new Date(data).getMonth()<10?'0':'') + new Date(data).getMonth()
    let ano = new Date(data).getFullYear()

    let hora = new Date(data).getHours()
    let minutos = (new Date(data).getMinutes()<10?'0':'') + new Date(data).getMinutes()
    let [tamanho, setTamanho ] = useState(false)
    let [detailPerfil, setdetailPerfil ] = useState(false)

    useEffect(() => {
       setTamanho(size)
      })
      const Perfil = () => {
        setdetailPerfil(!detailPerfil)
      }

      let menuLateral = Object.values(menu)?.map(function(item){
        let [submenu, setSubmenu ] = useState(false)
        const btnSub = () => {
          setSubmenu(!submenu)
        }
       
        let itemSubMenu = Object.values(item?.submenu)?.map(function(itemsubmenu: any) {
          return <li onClick={Navegacao} value={itemsubmenu.to}>{itemsubmenu.name}</li>;
        })
          return  <li onClick={btnSub}> 
                  <div className='menu-icon'>{item.imagem}</div>
                  {
                    tamanho ? 
                      <>
                      <div className='icon-right'>
                      <Right
                          size="sm"
                          type="Third" />
                      </div>
                      <p>{item.texto}</p>
                      
                     </>
                      : 
                      <div className='title'>
                        {item.texto}
                      </div>
                  } 
  
                  {submenu? <ul className='sub-menu'>
                    
                      <li>{itemSubMenu}</li>
                    </ul> : null}
                  </li>
      })

      let Detalhe = 
      <div className='detail-perfil'>
        <div onClick={Perfil} className='close-user'>      
            <X
              size="md"
              type="Second"
            />
        </div>
        <div className='info-user-datail'>
          <Avatar text={''} size='lg' />
          <article>
            <h4>Alamy Neto</h4>
            <p> {dia}/{mes}/{ano} • {hora}:{minutos}</p>
            <p>Analiista de Cobrança</p>
            <p>Secretaria de Finanças</p>
          </article>
          <button>Organograma</button>
          <button>Informações</button>
          <button>Sair</button>
        </div>
         
      </div>
  

    return(
    <>  
    <div className={clsx(
      {'big': tamanho === true, 
      'small': tamanho === false,} , 'menu_lateral')}>
        <div className="box-menu">
          <div className={clsx({'logo': tamanho === true,
                                'logo-small' : tamanho === false})}>
          <Logo
              size="sm"
              type="Second"
            />
            {tamanho ? <p>{titulo}</p> : ''}
          </div>
          <div className={clsx(
            {'back_page': tamanho === true,
              'back_page_small': tamanho === false})}>
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 1L1.5 6L6.5 11" stroke="#89BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 1L8.5 6L13.5 11" stroke="#89BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            {tamanho ? <p>Voltar</p> : ''}
          </div>
        </div>
        <ul className={clsx({
          'nav': tamanho === true,
          'nav-small' : tamanho === false
          }, 'menu-app')}>
          
          {menuLateral}
          
        </ul>
        <div onClick={Perfil} className={clsx({
          'avatar': tamanho === true,
          'avatar-small' : tamanho === false
          })}>
            <Avatar text={''} size='sm' />
            {tamanho? 
            <div className='person-description'>
              <p>Alamy Neto</p>
              <Right
                       
                        size="sm"
                        type="Third" />
                </div>
                   : ''}
        
        </div>
        {detailPerfil? Detalhe : ''}
        
    </div>
    
    </>
    )
}