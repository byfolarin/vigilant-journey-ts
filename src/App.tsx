import './App.css'
import { Greet } from './Components/Greet'
import { Person } from './Components/Person'

function App() {

  const personName= {
    first: 'Bruce',
    last: 'Wayne',
  }


  return (
    <>
    <Greet name ='Folarin' messageCount={20} isLoggedIn={false} />
    <Person name ={personName} />
    </>
  )
}

export default App
