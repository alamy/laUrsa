import { useEffect, useState } from 'react'
import { Right } from '../../Icon/System/Right'
import { Avatar } from '../../Atomic/Avatar/Avatar'
import { Logo } from '../../Icon/Logo'
import clsx from 'clsx'
import './Menu.scss'
import { ModalPerfil } from '../../Molecules/ModalPerfil/ModalPerfil'
import { Down } from '../../Icon/System/Down'
import { Up } from '../../Icon/System/Up'
import { Left } from '../../Icon/System/Left'

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
    Logout:Function | any;
    Organograma:Function | any;
    Informacoes:Function | any;
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
    Home,
    Logout,
    Organograma,
    Informacoes
  }: MenuProps) {
    let [tamanho, setTamanho ] = useState(false)
    let [detailPerfil, setdetailPerfil ] = useState(false)


    useEffect(() => {
        setTamanho(size)
      
      },[size])
      const Perfil = () => {
        setdetailPerfil(!detailPerfil)
      }
      const sizeMenu = () => {
        setTamanho(true)
      }

      const sizeMenuFalse = () => {
        if(size){
          setTamanho(true)
        }else{
          setTamanho(false)
        }
       
       
      }
      let menuLateral
      menu ? 
      menuLateral = Object.values(menu)?.map(function(item){
        const [flagSub, setFlagSub] = useState(false)

      
        let [submenuLi, setSubmenuLi ] = useState(false)
        let [left, setLeft ] = useState(false)
        let btnSub = () => {
          setSubmenuLi(!submenuLi)
          setLeft(!left)
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
    
              return <div className='nav-item-li' id={nav.to} onClick={Navegacao}>{nav.name}</div>
             })
           }
          

          return (
            <>
              <div className='item-li-submenu' id={itemsubmenu.to} key={itemsubmenu.to} onClick={itemNav ? UlSelection : Navegacao}>
                {itemsubmenu.titulo} {itemNav ? navItem ? <Up type='Second' size='sm' /> : <Down type='Second' size='sm'/> : ''}
                {itemNav ? navItem ? <div className='nav-item' >{itemNav}</div>: '' : ''}
              </div>
            </>
            )
        })
          return  (
           
       
           item?.submenu.length ? 
           <>
          <li className='li-menu' onClick={btnSub} title={item.texto}> 
                  <div className={clsx(
                    {'menu-icon': tamanho === true,
                    'menu-icon-small': tamanho === false},
                    'icon-menu'
                    )}>{item.imagem}</div>

                  {
                    tamanho ? 
                      <>
                      <div className='icon-right'>
                      { left ? <Down 
                                type='Second' 
                                size='sm'/> : 
                              <Left
                                size="sm"
                                type="Third"/> }
                      </div>
                      <p>{item.texto}</p>
                      
                     </>
                      : 
                    null
                  }  </li>



                   {
                      submenuLi && tamanho ? 
                        <div className='sub-menu'>
                            {itemSubMenu}
                        </div> : null 
                  }      
                  </> 
                  : 
                  
                  <li className='li-menu' id={item.to} onClick={Navegacao} title={item.texto}> 
                  <div  
                  
                  className={clsx(
                    {'menu-icon': tamanho === true,
                    'menu-icon-small': tamanho === false})}>{item.imagem}</div>

                  {
                    tamanho ? 
                      <>
                      <div className='icon-right'>
                    
                      </div>
                      <p>{item.texto}</p>
                      
                     </>
                      : 
                    null
                  }  </li>
              
                
                
                )}) : null

    return(
    <>  
    <div onMouseOver={sizeMenu} onMouseLeave={sizeMenuFalse} className={clsx(
      {'big': tamanho === true, 
      'small': tamanho === false,} , 'menu_lateral')}>
        <div className="box-menu">
          <div onClick={Home} className={clsx({'logo': tamanho === true,
                                'logo-small' : tamanho === false})}>
          <Logo
              size="sm"
              type="Second"
            />
            {tamanho ? <><p>{titulo}</p></> : ''}
          </div>
        </div>
        <div  className={clsx({
          'avatar-perfil': tamanho === true,
          'avatar-perfi-small' : tamanho === false
          }, 'box-avatar-menu')}>
            
            {tamanho? <>
            <Avatar text={''} size='sm' />
            <div className='person-description'>
              <span>{usuario}</span>
             
                </div></>
                   : <div className='box-avatar'>
                      <Avatar text={''} size='sm' /> 
                    </div>}
        
        </div>
        <ul className={clsx({
          'nav': tamanho === true,
          'nav-small' : tamanho === false
          }, 'menu-app')}>
          
          {menuLateral}
          
        </ul>
      
        {detailPerfil? <ModalPerfil 
            usuario={usuario}
            descricaoUsuario={descricaoUsuario}
            localidadeUsuario={localidadeUsuario}
            onClick={undefined}
            Perfil={Perfil} Logout={Logout} Organograma={Organograma} Informacoes={Informacoes} /> : ''}
    </div>
          
         
    </>
    )
}