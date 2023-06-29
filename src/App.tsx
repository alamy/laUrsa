
import { Button } from './lib/components/Atomic/Button/Button';
import { Dropdown } from './lib/components/Atomic/Dropdown/Dropdown';
import { Input } from './lib/components/Atomic/Input/Input';
import { Cobranca } from './lib/components/Icon/Menu/Cobranca';
import { Contestacao } from './lib/components/Icon/Menu/Contestacao';
import { ControleDebito } from './lib/components/Icon/Menu/ControleDebito';
import { DividaAtiva } from './lib/components/Icon/Menu/DividaAtiva';
import { Lancamento } from './lib/components/Icon/Menu/Lancamento';
import { Parcelamento } from './lib/components/Icon/Menu/Parcelamento';
import { Tramitacao } from './lib/components/Icon/Menu/Tramitacao';
import { Search } from './lib/components/Icon/System/Search';
import { Alerta } from './lib/components/Molecules/Alerta/Alerta';
import { Table } from './lib/components/Molecules/Table/Table';
import { Dashboard } from './lib/components/Templates/Dashboard/Dashboard';
import './lib/styles/global.css';

function App() {

  function nav() {
    console.log('aqui')
  }

  const conteudo = 
    <>
   
        Cras aliquam condimentum arcu non porttitor. Curabitur vehicula augue scelerisque libero rutrum, a scelerisque risus consequat. Sed nunc dolor, ullamcorper id augue et, dictum vestibulum enim. Aenean dignissim enim ut libero faucibus lobortis blandit cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin imperdiet purus quis fermentum imperdiet. Quisque luctus quam eget arcu auctor molestie.

          Duis gravida urna sed est viverra egestas. Sed placerat fermentum dui. Sed aliquet convallis gravida. Suspendisse potenti. Nunc eu tincidunt ante, id ultrices lectus. In hac habitasse platea dictumst. Sed ornare nisi libero, id blandit massa consequat eleifend.
          <Alerta texto={'Nenhum débito encontrado com a condição: INDICADOR DEVIDO'} tipo={'danger'} titulo={'undefined'} Close={function (): void {
          throw new Error('Function not implemented.')
        } } />

        <Table typeTable={'Default'} header={['id', 'descricao']} Obj={{ 1: ["1", "Mercantil", 'Descricao'] }} argTypes={{
        onClick: {
          action: 'clicked'
        }
      }} Editar={(i: any) => {
        console.log(i)
      } } />
          

          <Input text={''} type={'number'} />

         <Button onClick={nav} />
          </>



  return (
    
    <>
    <Dashboard titulo={'SICM'}
          menu={[
            {
              imagem: <Lancamento size="lg" type="Second" />,
              texto: 'Lançamento',
              to: '/demo',
              id: 2,
              submenu: [
                {
                  titulo: 'Pacelamento',
                  0: [
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                  ],
                }
              ]
            },
            {
              imagem: <Tramitacao size="lg" type="Second" />,
              texto: 'Tramitação',
              to: '/demo',
              id: 2,
              submenu: [
                {
                  titulo: 'Pacelamento',
                  0: [
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                  ],
                }
              ]
            },
            {
              imagem: <Cobranca size="lg" type="Second" />,
              texto: 'Cobrança',
              to: '/demo',
              id: 1,
              submenu: [
                {
                  titulo: 'Parametrzadas',
                  0: [
                    {
                      name: 'Imobiliária',
                      to: '/demo'
                    },
                    {
                      name: 'Mercantil',
                      to: '/demo'
                    },
                    {
                      name: 'Não Tributária',
                      to: '/demo'
                    },
                    {
                      name: 'Pessoa',
                      to: '/demo'
                    },
                    {
                      name: 'ITBI',
                      to: '/demo'
                    },
                  ],
                },
                {
                  titulo: 'Buss I...BI',
                  0: [
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                  ],
                },
                {
                  titulo: 'Externa',
                  0: [
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                  ],
                }
              ]
            },
            {
              imagem: <Parcelamento size="lg" type="Second" />,
              texto: 'Pacelamento',
              to: '/demo',
              id: 2,
              submenu: [
                {
                  titulo: 'Pacelamento',
                  to: '/parcelamento',
                }
              ]
            },
            {
              imagem: <DividaAtiva size="lg" type="Second" />,
              texto: 'Dívida Ativa',
              to: '/demo',
              id: 2,
              submenu: [
                {
                  titulo: 'Pacelamento',
                  0: [
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                  ],
                }
              ]
            },
            {
              imagem: <ControleDebito size="lg" type="Second" />,
              texto: 'Controle de Débito',
              to: '/demo',
              id: 2,
              submenu: [
                {
                  titulo: 'Pacelamento',
                  0: [
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                  ],
                }
              ]
            },
            {
              imagem: <Contestacao size="lg" type="Second" />,
              texto: 'Contestação',
              to: '/demo',
              id: 2,
              submenu: [
                {
                  titulo: 'Pacelamento',
                  0: [
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                    {
                      name: 'teasdasdste',
                      to: '/demo'
                    },
                  ],
                }
              ]
            }
          ]} children={conteudo} Navegacao={function () {
            nav()
          } }
          Configuracao={function () {
            
          } } linksExternos={[{
            label: 'Link 1',
            to: '/teste'
          },]} usuario={'Alamy Neto'} 
          Home={function (): void {
           
          } } />  
   
    </>

  )
}

export default App
