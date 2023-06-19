import { clsx } from 'clsx';
import './ModalPerfil.scss'
import { X } from '../../Icon/System/X';
import { Avatar } from '../../Atomic/Avatar/Avatar';

export interface ModalPerfilProps {
    usuario?: String
    descricaoUsuario?: String
    localidadeUsuario?: String
    onClick: Function | any;
    Perfil: Function | any;
}

export function ModalPerfil(
    { 
        Perfil, 
        usuario, 
        descricaoUsuario, 
        localidadeUsuario, 
        ...props} :ModalPerfilProps) {

    let data =  Date()
    let dia = new Date(data).getDate()
    let mes = (new Date(data).getMonth()<10?'0':'') + new Date(data).getMonth()
    let ano = new Date(data).getFullYear()

    let hora = new Date(data).getHours()
    let minutos = (new Date(data).getMinutes()<10?'0':'') + new Date(data).getMinutes()
   

    return (
        <>
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
            <h4>{usuario}</h4>
            <p> {dia}/{mes}/{ano} • {hora}:{minutos}</p>
            <p>{descricaoUsuario}</p>
            <p>{localidadeUsuario}</p>
          </article>
          <button>Organograma</button>
          <button>Informações</button>
          <button>Sair</button>
        </div>
         
      </div>
      </>
    )
} 