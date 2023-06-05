

import { Alerta } from './lib/components/Molecules/Alerta/Alerta';
import { Header } from './lib/components/Templates/Header/Header';
import './lib/styles/global.css';

function App() {
 const teste = () => {
  console.log('estou aqui')
 }

  return (
    
    <>
       <Header
                title="Prefeitura do Recife"
                home={true}
                persona={'Alamy Neto'}
                key={'000000'}
                path="/"
            />
<br></br>
<Alerta
        texto="Notification message. Lorem ipsum doloro sit amet, consectur adipicing."
        tipo="danger"
        titulo="Info notification" onClick={teste}
         />
    </>

  )
}

export default App
