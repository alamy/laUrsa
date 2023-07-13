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
    Status  
}: TableProps ) => {
    
    let ObjHeader = header?.map(function(opt){
        return <th>{opt}</th>
    }) 
    let ObjBody = Object.values(Obj).map(function(opt){
        let objItem = Object.values(opt).map(function(Item:any){
           
         return (Item === 'S' || Item === 'N'? '' :  <td> {Item} </td>)
        })
        let statusChek: any
        opt.status === 'S'? statusChek = "checked" : statusChek = "";
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
                        <input type="checkbox" id={id} value={opt.status} checked={statusChek} name={name} onClick={Status}/>
                        <span className="slider round"></span>
                </label>
            </td> : ''}
            <td className='controle-table' key={opt.status}>
                <Button icone={'edite'} type='secondary' size='md' id={id} name={name} onClick={Editar}/>
                <Button icone={'delete'} type='secondary' size='md' id={id} name={name} onClick={Excluir}/>
                <Button icone={'look'} type='secondary' size='md' id={id} name={name} onClick={Detalhar}/>
               
            </td>
            
        </tr>)
     })
     
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

