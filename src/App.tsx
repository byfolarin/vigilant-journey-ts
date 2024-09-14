import './App.css'
import { Greet } from './Components/Greet'
import { Person } from './Components/Person'
import { PersonList } from './Components/PersonList'
import { Status } from './Components/Status'

function App() {

  const personName= {
    first: 'Bruce',
    last: 'Wayne',
  }

  
  
    const nameList = [ 
      {
        first: 'Bruce',
        last: 'Wayne',
      },
      {
        first: 'Clark',
        last: 'Kent',
      },
      {
        first: 'Princess',
        last: 'Diana',
      },
    ]
  



  return (
    <>
    <Greet name ='Folarin' messageCount={20} isLoggedIn={false} />
    <Person name ={personName} />
    <PersonList name={nameList}/>
    <Status status='loading' />
    </>
  )
}

export default App
