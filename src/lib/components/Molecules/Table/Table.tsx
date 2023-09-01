import * as React from 'react';
import { clsx } from 'clsx';
import './Table.scss'
import { Button } from '../../Atomic/Button/Button';
import { Trash } from '../../Icon/System/Trash';
import { Edit } from '../../Icon/System/Edit';
import { Eye } from '../../Icon/System/Eye';

export interface TableProps {
    typeTable: 'Default' | 'HeaderDark' | 'Dark';
    header: string[];
    Obj:Object;
    value? : string;
    Editar: Function;
    Excluir?:Function;
    Detalhar?:Function;
    visualizacao?: boolean;
    Status?:(i: any) => void;
    QtdSub?: number;
    FlagTrash?: boolean;
    FlagVisible?: boolean;
    FlagEdit?: boolean;
}

const edit = <Edit
size="md"
type="Primary"
/>

const trash = <Trash
size="md"
type="Primary"
/>

const eye = <Eye
size="md"
type="Primary"
/>


export const Table = ({
    header, 
    Obj, 
    typeTable,
    Editar,
    Excluir,
    visualizacao,
    Detalhar,
    Status,
    FlagTrash,
    FlagVisible,
    FlagEdit =  true,
    

}: TableProps ) => {
 
    let ObjHeader = header?.map(function(opt){
        return <th className='th'>{opt}</th>
    }) 
    let ObjBody = Object.values(Obj).map(function(opt){
        let valorChecked;
        let objItem = Object.values(opt).map(function(Item:any){
            let Result
            if(typeof Item === 'object' && Item !== null){
                   var Resultado = Object.values(Item).map(function(T:any){
                    Resultado
                    Result = T
                    return (<td className='td'> {Result} </td>)
               })
            }else { 
                if(Item === opt.isAtivo){
                    valorChecked = Item
                    return null
                }
                else {
                    return (<td className='td'> {Item} </td>)
                }  
               
            }
        })
     
        let id:any = opt.id
        let name:any = opt.descricao

        return (
        <tr id={id} className={clsx(
            {
                'dark': typeTable === 'Dark'
                
            },'tr'
        ) }> 
        {objItem}
            {visualizacao ?  <td className='td'>
                <label  title="Flag de deleção lógica. Ao ser desmarcada a flag no item, este deixará de ser considerado ativamente, mas ainda estará presente no sistema, sem ser deletado fisicamente."
                        className="switch">
                        <input className='slider-input' type="checkbox" id={id} checked={valorChecked} name={name} onClick={Status} />
                        <span className="slider round"></span>
                </label>
                
            </td> : ""}
            <td  className='controle-table td' title={opt.isAtivo}>
                <div  title='Botão de edição. Ao clicar neste botão será possível editar a Descrição do item em questão.'>
                   {FlagEdit && valorChecked ? <Button icone={'edite'} type='secondary' size='md' id={id} name={name} onClick={Editar}/> : ""}
                </div>
                <div title='Botão de excluir. Ao clicar neste botão será possível excluir a Descrição do item em questão.'>
                    {FlagTrash ? <Button icone={'delete'} type='secondary' size='md' id={id} name={name} onClick={Excluir}/> : ""}
                </div>
                <div title='Botão de visualização. Ao clicar neste botão será possível visualizar o item em questão.'>
                    {FlagVisible ? <Button icone={'look'} type='secondary' size='md' id={id} name={name} onClick={Detalhar}/> : ""}
                </div>   
  
            </td>
            
        </tr>)
     })

    return (
    <>
        <table key="1" className={clsx(
                {
                'dark': typeTable === 'Dark'
                },'table'
            )}>
            <thead>
            <tr className={clsx(
                {
                'white': typeTable === 'Default',
                'darkHeader': typeTable === 'HeaderDark',
                'dark': typeTable === 'Dark'
                },'tr'
            )}>
                {ObjHeader}
            </tr>
            </thead>
            
            <tbody>
                 {ObjBody}
            </tbody>
          
              
        </table>
    </>   
    );
 
}


