import { useEffect, useState } from 'react'
import { Right } from '../../Icon/System/Right'
import { Avatar } from '../../Atomic/Avatar/Avatar'
import { Logo } from '../../Icon/Logo'
import clsx from 'clsx'
import './Menu.scss'
import { ModalPerfil } from '../../Molecules/ModalPerfil/ModalPerfil'
import { Down } from '../../Icon/System/Down'
import { Up } from '../../Icon/System/Up'

export interface MenuProps{
    titulo: string
    menu: Object
    Navegacao?: (i: any) => void
    size: boolean
    usuario?: String | undefined
    descricaoUsuario?: String
    localidadeUsuario?: String
    submenu?: boolean
    Home: () => void
}

export function Menu(
  {
    titulo, 
    menu, 
    size, 
    Navegacao,
    usuario,
    descricaoUsuario,
    localidadeUsuario,
    Home
  }: MenuProps) {
    let [tamanho, setTamanho ] = useState(false)
    let [detailPerfil, setdetailPerfil ] = useState(false)

    useEffect(() => {
       setTamanho(size)
      })
      const Perfil = () => {
        setdetailPerfil(!detailPerfil)
      }

      let menuLateral = Object.values(menu)?.map(function(item){
        let [submenuLi, setSubmenuLi ] = useState(false)
        const btnSub = () => {
          setSubmenuLi(true)
        }
        const btnSubOver = () => {
          setSubmenuLi(false)
        }
        

        let itemSubMenu = Object.values(item?.submenu)?.map(function(itemsubmenu: any) {
          let [navItem, setNavItem ] = useState(false)
          const UlSelection = () => {
            setNavItem(!navItem)
          }
           let t = itemsubmenu[0]
           let itemNav = null
           if(t){
             itemNav = t.map(function(nav: any){
              return <div className='nav-item-li' onClick={Navegacao}>{nav.name}</div>
             })
           }
          

          return (
            <>
              <div className='item-li-submenu' onClick={itemNav ? UlSelection : Navegacao}>
                {itemsubmenu.titulo} {itemNav ? navItem ? <Up type='Second' /> : <Down type='Second'/> : ''}
                {itemNav ? navItem? <div className='nav-item'>{itemNav}</div>: '' : ''}
              </div>
            </>
            )
        })
          return  (
          <><li className='li-menu' onMouseOver={btnSub} onMouseLeave={btnSubOver} title={item.texto}> 
                  <div className={clsx(
                    {'menu-icon': tamanho === true,
                    'menu-icon-small': tamanho === false})}>{item.imagem}</div>
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
                    null
                  } 
                   {
                      submenuLi ? 
                        <div className='sub-menu'>
                            {itemSubMenu}
                        </div> : null 
                  }      
                  </li>
                            
                </> )})

    return(
    <>  
    <div className={clsx(
      {'big': tamanho === true, 
      'small': tamanho === false,} , 'menu_lateral')}>
        <div className="box-menu">
          <div onClick={Home} className={clsx({'logo': tamanho === true,
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
          'avatar-perfil': tamanho === true,
          'avatar-perfi-small' : tamanho === false
          })}>
            <Avatar text={''} size='sm' />
            {tamanho? 
            <div className='person-description'>
              <p>{usuario}
              <Right
                       
                       size="sm"
                       type="Third" />
              </p>
             
                </div>
                   : ''}
        
        </div>
        {detailPerfil? <ModalPerfil 
                          usuario={usuario} 
                          descricaoUsuario={descricaoUsuario} 
                          localidadeUsuario={localidadeUsuario} 
                          onClick={undefined} 
                          Perfil={Perfil} /> : ''}
    </div>
          
         
    </>
    )
}