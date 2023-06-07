

import { Avatar } from './lib/components/Atomic/Avatar/Avatar';
import { Dropdown } from './lib/components/Atomic/Dropdown/Dropdown';
import { Alerta } from './lib/components/Molecules/Alerta/Alerta';
import { Modal } from './lib/components/Molecules/Modal/Modal';
import { Dashboard } from './lib/components/Templates/Dashboard/Dashboard';
import { Header } from './lib/components/Templates/Header/Header';
import './lib/styles/global.css';

function App() {


  return (
    
    <>
     <Dashboard titulo={''} >  
     
    
<Dropdown
          Option={[
            {
              label: 'teste 1',
              vallue: '1'
            },
            {
              label: 'teste 2',
              vallue: '2'
            }
          ]}
          onBlur={() => { } }
          onChange={function noRefCheck() { } }
          onClick={function noRefCheck() { } }
          onFocus={function noRefCheck() { } }
          size="md"
          text="Label" id={'2'} value={''} />


nCras aliquam condimentum arcu non porttitor. Curabitur vehicula augue scelerisque libero rutrum, a scelerisque risus consequat. Sed nunc dolor, ullamcorper id augue et, dictum vestibulum enim. Aenean dignissim enim ut libero faucibus lobortis blandit cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin imperdiet purus quis fermentum imperdiet. Quisque luctus quam eget arcu auctor molestie.

Duis gravida urna sed est viverra egestas. Sed placerat fermentum dui. Sed aliquet convallis gravida. Suspendisse potenti. Nunc eu tincidunt ante, id ultrices lectus. In hac habitasse platea dictumst. Sed ornare nisi libero, id blandit massa consequat eleifend.


     </Dashboard>

   
    </>

  )
}

export default App
