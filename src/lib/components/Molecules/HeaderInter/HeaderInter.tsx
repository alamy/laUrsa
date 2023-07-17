import { clsx } from 'clsx';
import './HeaderInter.scss'
import { Search } from '../../Icon/System/Search';

export interface HeaderInterProps {
    texto?: String
    titulo: String
    onChange?: Function | any;
    value?: string
}

export function HeaderInter({texto, titulo,value, ...props} :HeaderInterProps) {
   
    return (<>
        <div className={clsx('header-inter')} >
             <h2>{titulo}</h2>
        
              <div className="pesquisar">
                  <input
                  className='input-pesquisar'
                      type="text"
                      placeholder="Pesquisa..."
                      value={value}
                      {...props}
                  />
                 
                        <Search
                        size="md"
                        type="Primary"
                        />
              </div>
        </div>
        <span className='span-search'>{texto}</span>
        </>
    )
} 