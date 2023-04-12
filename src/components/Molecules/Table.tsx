import { clsx } from 'clsx';
import './molecules.css'

export interface TableProps {
    typeTable: 'Default' | 'HeaderDark' | 'Dark';
    header: ['#', 'First', 'Last', 'Handle'];
    Obj:[
        {
            1: '#',
            2: 'First', 
            3: 'Last', 
            4: 'Handle'
        }
    ]
}


export const Table = ({
    header, 
    Obj, 
    typeTable,
}: TableProps ) => {
    let ObjHeader = header?.map(function(opt){
        return <th>{opt}</th>
    }) 
    let ObjBody = Obj.map(function(opt){
       let objItem = Object.keys(opt).map(function(Item){
        return (<td>{Item}</td>)
       })
       return (
       <tr  className={clsx(
        {
        'dark': typeTable === 'Dark'
        },
    )}>{objItem}</tr>)
    })
    return (
    <>
        <table key="1" className={clsx(
                {
                'dark': typeTable === 'Dark'
                },
            )}>
            <tr className={clsx(
                {
                'white': typeTable === 'Default',
                'darkHeader': typeTable === 'HeaderDark',
                'dark': typeTable === 'Dark'
                },
            )}>
                {ObjHeader}
            </tr >
            {ObjBody}
        </table>
    </>   
    );
 
}