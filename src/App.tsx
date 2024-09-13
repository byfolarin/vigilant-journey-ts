import './App.css'
import { Greet } from './Components/Greet'

function App() {


  return (
    <>
    <Greet name='Folarin' messageCount={20} isLoggedIn={false} />
    </>
  )
}

export default App
