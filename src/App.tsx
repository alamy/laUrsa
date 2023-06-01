

import { Header } from './lib/components/Templates/Header/Header';
import './lib/styles/global.css';

function App() {

  return (
    
    <>
       <Header
                title="Prefeitura do Recife"
                home={true}
                persona={'Alamy Neto'}
                key={'000000'}
                path="/"
            />
    </>

  )
}

export default App
