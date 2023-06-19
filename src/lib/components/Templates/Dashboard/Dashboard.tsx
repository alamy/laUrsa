
import { Logo } from '../../Icon/Logo'
import { clsx } from 'clsx';
import './Dashboard.scss'
import { useState } from "react";
import { Search } from "../../Icon/System/Search";
import { Pcr } from "../../Icon/Menu/Pcr";
import { Avatar } from '../../Atomic/Avatar/Avatar';
import { Right } from '../../Icon/System/Right';
import { X } from '../../Icon/System/X';
import { Settings } from '../../Icon/System/Settings';
import { Menu } from '../../Organisms/Menu/Menu';
import { Header } from '../../Organisms/Header/Header';

export interface DashboardProps {
    titulo: string
    menu: Object
    children: any
    linksExternos: Object
    Navegacao?: (i: any) => void
    Configuracao: () => void
    usuario: String | undefined,
    descricaoUsuario?: String
    localidadeUsuario?: String
}

export function Dashboard(
    {
        menu, 
        titulo, 
        children, 
        Navegacao, 
        Configuracao, 
        linksExternos,
        usuario,
        descricaoUsuario,
        localidadeUsuario,
    }: DashboardProps) {
  
    let [tamanho, setTamanho ] = useState(false)
    let [sub, setSub ] = useState(false)

    const clickSubmenu = () => {
        setSub(false)
    }
    return (
    <>
    <Menu 
        titulo={titulo} 
        menu={menu} 
        descricaoUsuario={descricaoUsuario} 
        localidadeUsuario={localidadeUsuario} 
        size={tamanho} 
        usuario={usuario}
        submenu={sub} />
    <Header
          linksExternos={linksExternos} 
          Configuracao={Configuracao} 
        tamanho={tamanho} 
        Size={function (): void {
         return setTamanho(!tamanho)
        } } />
    <div onClick={clickSubmenu} className={clsx({
      'conteiner-small': tamanho === true,
      'conteiner-big': tamanho === false
      },'conteudo')}>
        {children}
    </div> 
    </>
    )
}