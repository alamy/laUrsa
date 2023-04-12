import { Avatar } from './components/Atomic/Avatar';
import './styles/global.css';

function App() {
  return (
    <>
      <h1 className="font-bold text-2xl text-violet-500">Hello World</h1>
      <button className="bg-brandPrimary-lightest px-4 py-2 rounded text-neutral-dark hover:bg-brandPrimary-light">
        Enviar
      </button>
      <div className='ml-10'>
          <Avatar
          notification
          size="lx"
          text="Perfil"
        />
    </div>
    </>

  )
}

export default App
