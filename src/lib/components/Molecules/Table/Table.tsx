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

}: TableProps ) => {
 
    let ObjHeader = header?.map(function(opt){
        return <th>{opt}</th>
    }) 
    let ObjBody = Object.values(Obj).map(function(opt){
        let valorChecked;
        let objItem = Object.values(opt).map(function(Item:any){
            let Result
            if(typeof Item === 'object' && Item !== null){
                   var Resultado = Object.values(Item).map(function(T:any){
                    Resultado
                    Result = T
                    return (<td> {Result} </td>)
               })
            }else { 
                if(Item === opt.isAtivo){
                    valorChecked = Item
                    return null
                }
                else {
                    return (<td> {Item} </td>)
                }  
               
            }
        })
     
        let id:any = opt.id
        let name:any = opt.descricao

        return (
        <tr id={id} className={clsx(
            {
                'dark': typeTable === 'Dark'
                
            },
        )}> 
        {objItem}
            {visualizacao?  <td>
                <label className="switch">
                        <input type="checkbox" id={id} checked={valorChecked} name={name} onClick={Status} />
                        <span className="slider round"></span>
                </label>
            </td> : ''}
            <td className='controle-table' title={opt.isAtivo}>
                <Button icone={'edite'} type='secondary' size='md' id={id} name={name} onClick={Editar}/>
                {FlagTrash ? <Button icone={'delete'} type='secondary' size='md' id={id} name={name} onClick={Excluir}/> : ""}
                {FlagVisible ? <Button icone={'look'} type='secondary' size='md' id={id} name={name} onClick={Detalhar}/> : ""}
               
            </td>
            
        </tr>)
     })
     console.log(ObjBody)
    return (
    <>
        <table key="1" className={clsx(
                {
                'dark': typeTable === 'Dark'
                },
            )}>
            <thead>
            <tr className={clsx(
                {
                'white': typeTable === 'Default',
                'darkHeader': typeTable === 'HeaderDark',
                'dark': typeTable === 'Dark'
                },
            )}>
                {ObjHeader}
            </tr >
            </thead>
            
            <tbody>
                 {ObjBody}
            </tbody>
          
              
        </table>
    </>   
    );
 
}


