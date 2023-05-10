import { clsx } from 'clsx';
import './Table.scss'
import { Button } from '../../Atomic/Button/Button';
import { Trash } from '../../Icon/System/Trash';
import { Edit } from '../../Icon/System/Edit';

export interface TableProps {
    typeTable: 'Default' | 'HeaderDark' | 'Dark';
    header: string[];
    Obj:Object;
    value? : string;
    Editar?: Function;
    Excluir?:Function;
    argTypes: { 
        onClick: { action: 'clicked' }
    },
}

const trash = <div><Trash size="md" type="Primary" /></div>

const edit = <Edit
size="md"
type="Primary"
/>

export const Table = ({
    header, 
    Obj, 
    typeTable,
    Editar,
    Excluir,
    
}: TableProps ) => {
    let ObjHeader = header?.map(function(opt){
        return <th>{opt}</th>
    }) 
    let ObjBody = Object.values(Obj).map(function(opt){
        let objItem = Object.values(opt).map(function(Item:any){
         return (<td>{Item}</td>)
        })
        console.log(Object.values(Object.values(objItem)[0].props)[0])
        console.log("###################")
        console.log(Object.values(Object.values(objItem)[0]))
        let id:any = Object.values(Object.values(objItem)[0].props)[0]
 
        let name:any = Object.values(Object.values(objItem)[1].props)[0]
        return (
        <tr id={id}  className={clsx(
            {
                'dark': typeTable === 'Dark'
            },
        )}>
        {objItem}
        
            <td>
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

