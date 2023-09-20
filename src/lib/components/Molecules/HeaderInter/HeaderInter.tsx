import { clsx } from 'clsx';
import './HeaderInter.scss'
import { Search } from '../../Icon/System/Search';

export interface HeaderInterProps {
    texto?: String
    titulo: String
    onChange?: Function | any;
    onBlur?: Function | any;
    onFocus?: Function | any;
    value?: string
    visibleSearch?: boolean
}

export function HeaderInter({texto, titulo,value, visibleSearch = true, ...props} :HeaderInterProps) {
   
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
        </>
    )
} 