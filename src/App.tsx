
import { Dropdown } from './lib/components/Atomic/Dropdown/Dropdown';
import { Search } from './lib/components/Icon/System/Search';
import { Dashboard } from './lib/components/Templates/Dashboard/Dashboard';
import './lib/styles/global.css';

function App() {

  const conteudo = 
    <>
   
        Cras aliquam condimentum arcu non porttitor. Curabitur vehicula augue scelerisque libero rutrum, a scelerisque risus consequat. Sed nunc dolor, ullamcorper id augue et, dictum vestibulum enim. Aenean dignissim enim ut libero faucibus lobortis blandit cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin imperdiet purus quis fermentum imperdiet. Quisque luctus quam eget arcu auctor molestie.

          Duis gravida urna sed est viverra egestas. Sed placerat fermentum dui. Sed aliquet convallis gravida. Suspendisse potenti. Nunc eu tincidunt ante, id ultrices lectus. In hac habitasse platea dictumst. Sed ornare nisi libero, id blandit massa consequat eleifend.</>



  return (
    
    <>
     <Dashboard titulo={'SICM'} menu={[
        {
          imagem: <Search size="lg" type="Second" />,
          texto: 'Demo',
          to: '/demo',
          submenu: [
            {
              name: 'teasdasdste',
              to: '/demo'
            },
            {
              name: 'asdasd12312312312',
              to: '/demo'
            }
          ]
        },
        {
          imagem: <Search size="lg" type="Second" />,
          texto: 'Controle de Debito',
          to: '/demo',
          submenu: [
            {
              name: 'tesasda23123te',
              to: '/demo'
            }
          ]
        }
      ]} children={conteudo} Navegacao={(i: any) => {
        console.log(i.currentTarget.attributes.value.textContent);
      } } Configurcao={function (): void {
        throw new Error('Function not implemented.');
      } } linksExternos={
        [{
        label: 'Link 1',
        to: '/teste'
    },]} />  
   
    </>

  )
}

export default App
