import { clsx } from 'clsx';
import './Filter.scss'
import { useEffect, useState } from 'react';
import { Checkbox } from '../../Atomic/Checkbox/Checkbox';
import { Tag } from '../../Atomic/Tag/Tag';

export interface FiltertProps {
    text?: string;
    size?: 'md' | 'lg';
    error?: boolean;
    disable?: boolean;
    onChange?: Function | any;
    opcoes: Object;
    valueText?: String | {};
    labelText?: any;
    arrayResult?: {} | any;
    valueArray?: boolean
}

export function Filter({ disable, size = 'md', text, error, opcoes, arrayResult, valueArray, ...props }: FiltertProps) {
    const [boxCheck, setBoxCheck] = useState(false)
    const [tag, setTag]: any = useState([])
    const [valueTag, setValueTag]: any = useState([])
    const [value, setValue] = useState(String)
    const [opt, setOpt] = useState(opcoes)

    let opcaoSearch: any
    const caixa = () => {
        setBoxCheck(!boxCheck)
        setOpt(opcoes)
    }
    let estilo
    let label
    if (error) {
        estilo = "red"
        label = " color-red"
    } else if (disable) {
        estilo = 'gray'
        label = 'color-gray'
    } else {
        label = "color"
        estilo = "border-default"
    }


    const apcao = Object.values(opt).map(function (i: any) {
        const valueT: any = props.valueText;
        const labelT: any = props.labelText;
        const obj: any = i
        return <li className='border-b pl-9 pr-9 pt-2 pb-2 border-gray-700'>
            <Checkbox value={i[valueT]} text={i[labelT]} size='lg' onClick={(a: any) => Adicionado(a, i[labelT], i[valueT], obj)} />
        </li>
    })

    function Adicionado(t: any, label: any, value: any, obj: any) {

        if (t.target.checked === true) {
            setTag((prevTag: any) => [...prevTag, label])
            valueArray ? setValueTag((prevTag: any) => [...prevTag, obj]) : setValueTag((prevTag: any) => [...prevTag, value])

        } else {
            const listar = label
            var indice = tag.indexOf(listar);

            while (indice >= 0) {
                tag.splice(indice, 1);
                valueTag.splice(indice, 1)
                indice = tag.indexOf(indice);
            }
            setValueTag((preValueTag: any) => [...preValueTag])
            setTag((prevTag: any) => [...prevTag])

        }
        AddArrayCheck(valueTag)


    }

    const AddArrayCheck = async (a: any) => {
        await arrayResult(a)
    }

    useEffect(() => {
        AddArrayCheck(valueTag)
        setOpt(opcoes)

    }, [valueTag])


    const Search = (i: any) => { 
        const valueT: any = props.labelText;
        setValue(i)
        setBoxCheck(true)
        
        opcaoSearch = Object.values(opcoes).filter(function (el) {
            console.log( el[valueT])
            return el[valueT].toLowerCase().indexOf(i.toLowerCase()) > -1
        })

        console.log(opcaoSearch)
        setOpt(opcaoSearch)


    }

    return (
        <>
            {text ?
                <label
                    className={clsx(label, 'labelInput')}
                    htmlFor={text}>
                    {text}
                </label>
                : ''}
            <div className={clsx('rounded',
                'w-full ',
                'border',
                'filter-input')}>


                <input
                    type={'text'}
                    disabled={disable}
                    placeholder="Todos"
                    className={clsx(

                        'px-4',
                        'mt-0',
                        'w-11/12',
                        'rounded',
                        {
                            'h-[48px]': size === 'md',
                            'h-[86px]': size === 'lg',
                        },
                        estilo
                    )} id={text}
                    {...props}
                    value={value}
                    onChange={function (i: any) {
                        Search(i.target.value)
                    }}
                    onBlur={function (i: any) {
                        setValue('')
                        setOpt(opcoes)
                    }
                    }
                />

                <button className='btnFilter w-1/12' onClick={caixa}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 29V24" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M25 24H31" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 29V22" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 22H15" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 29V20" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 16H23" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 20V11" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 16V11" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 18V11" stroke="#4F97FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className={clsx(
                {
                    'all-height': boxCheck === true,
                    'out-height': boxCheck === false
                },
                'box-check border-l border-r rounded right-4 absolute')}>

                <ul className='pb-0 pt-0' key={2}>
                    {apcao}
                </ul>
            </div>

            <div className='mt-2'>
                <Tag Objeto={tag} onClick={function (i: any): void {

                    const listar = i.target.value
                    var indice = tag.indexOf(listar);

                    while (indice >= 0) {
                        tag.splice(indice, 1);
                        console.log('estou no indice ' + indice)
                        valueTag.splice(indice, 1)
                        indice = tag.indexOf(indice);

                    }
                    setTag((prevTag: any) => [...prevTag])
                    setValueTag((prevTag: any) => [...prevTag])

                }} />
            </div>
        </>

    );

}