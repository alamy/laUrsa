import * as React from 'react';
import { clsx } from 'clsx';
import './Table.scss'
import { Button } from '../../Atomic/Button/Button';
import { Trash } from '../../Icon/System/Trash';
import { Edit } from '../../Icon/System/Edit';
import { Toggle } from '../../Atomic/Toggle/Toggle';
import { Checkbox } from '../../Atomic/Checkbox/Checkbox';

export interface TableProps {
    typeTable: 'Default' | 'HeaderDark' | 'Dark';
    header: string[];
    Obj:Object;
    value? : string;
    Editar: Function;
    Excluir?:Function;
    visualizacao: boolean;
    argTypes: { 
        onClick: { action: 'clicked' }
    },
}

const edit = <Edit
size="md"
type="Primary"
/>

const trash = <Trash
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
    
}: TableProps ) => {
    
    let ObjHeader = header?.map(function(opt){
        return <th>{opt}</th>
    }) 
    let ObjBody = Object.values(Obj).map(function(opt){
        let objItem = Object.values(opt).map(function(Item:any){
         return (<td>{Item}</td>)
        })
        let id:any = Object.values(Object.values(objItem)[0].props)[0]
        let name:any = Object.values(Object.values(objItem)[1].props)[0]
        let [checkout, setCheckout ]= React.useState(true);
        const checar = () => {
            setCheckout(!checkout)
        }
        return (
        <tr id={id}  className={clsx(
            {
                'dark': typeTable === 'Dark'
            },
        )}>
        {objItem}
            {visualizacao?  <td>
                <label className="switch">
                        <input type="checkbox" checked={checkout} onClick={checar}/>
                        <span className="slider round"></span>
                </label>
            </td> : ''}
            <td className='controle-table'>
                <Button text={edit} type='secondary' size='md' id={id} name={name} onClick={Editar}/>
                <Button text={trash} type='secondary' size='md' id={id} name={name} onClick={Excluir}/>
               
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

