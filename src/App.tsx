

import { Dropdown } from './lib/components/Atomic/Dropdown/Dropdown';
import { Alerta } from './lib/components/Molecules/Alerta/Alerta';
import { Modal } from './lib/components/Molecules/Modal/Modal';
import { Dashboard } from './lib/components/Templates/Dashboard/Dashboard';
import { Header } from './lib/components/Templates/Header/Header';
import './lib/styles/global.css';

function App() {
 const teste = () => {
  console.log('estou aqui')
 }

  return (
    
    <>
     <Dashboard titulo={''} />

     <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla fermentum orci, vel placerat neque iaculis in. Aenean varius mi ut mollis posuere. Fusce posuere mauris hendrerit varius blandit. Mauris nunc ligula, consectetur vel nulla id, porta ultrices massa. Nullam consectetur orci sit amet est viverra condimentum. Praesent pretium aliquam luctus. Pellentesque vel risus vel urna luctus dictum ut at tellus. Donec fringilla mauris eu elit iaculis, maximus vulputate tortor pellentesque. Morbi urna sapien, ornare at ultrices non, hendrerit eget nulla.

Suspendisse mattis purus pulvinar, maximus nunc eu, faucibus sem. Nunc dapibus aliquet ullamcorper. Nulla felis mauris, ornare at arcu quis, mollis dictum ligula. Etiam sed ante quis nisl tempus bibendum eget eget ligula. Duis ac enim quis sapien rutrum suscipit. Maecenas et suscipit nunc. Maecenas ultricies efficitur orci eget commodo. Ut metus nisl, fringilla ac lacinia sit amet, sodales at justo. Nullam ut arcu in nibh cursus tincidunt. In rhoncus ipsum vitae lorem feugiat semper pretium quis tortor.

Cras nisl orci, dignissim in fermentum nec, hendrerit ut nunc. Curabitur venenatis, lorem a rutrum condimentum, nulla elit pharetra erat, at feugiat neque velit id neque. Duis neque dui, aliquet vel orci in, euismod aliquet dolor. Praesent pharetra, augue nec luctus porttitor, mauris magna laoreet orci, a porta urna eros quis diam. Duis semper nulla id cursus venenatis. Vivamus elementum rhoncus eros. Praesent venenatis eget nulla ac sagittis. Integer ut ipsum aliquet, scelerisque eros id, tempus diam. Pellentesque at consequat nisl, vel gravida urna. Etiam quis nisl ac leo cursus laoreet. Integer ornare nibh eros, id hendrerit nunc condimentum nec. Ut scelerisque consequat velit, a bibendum nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras pretium non lorem eu vehicula. Donec volutpat massa sapien, id dignissim nisi ornare vel.

Mauris rutrum aliquet leo, a ullamcorper est viverra sit amet. Cras aliquam condimentum arcu non porttitor. Curabitur vehicula augue scelerisque libero rutrum, a scelerisque risus consequat. Sed nunc dolor, ullamcorper id augue et, dictum vestibulum enim. Aenean dignissim enim ut libero faucibus lobortis blandit cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin imperdiet purus quis fermentum imperdiet. Quisque luctus quam eget arcu auctor molestie.

Duis gravida urna sed est viverra egestas. Sed placerat fermentum dui. Sed aliquet convallis gravida. Suspendisse potenti. Nunc eu tincidunt ante, id ultrices lectus. In hac habitasse platea dictumst. Sed ornare nisi libero, id blandit massa consequat eleifend.
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
  onBlur={() => {}}
  onChange={function noRefCheck() {}}
  onClick={function noRefCheck() {}}
  onFocus={function noRefCheck() {}}
  size="md"
  text="Label"
/></div>


    </>

  )
}

export default App
