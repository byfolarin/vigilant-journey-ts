import './App.css'
// import { Greet } from './Components/Greet'
// import { Person } from './Components/Person'
import { PersonList } from './Components/PersonList'
// import { Status } from './Components/Status'
// import { Heading } from './Components/Heading'
// import { Oscar } from './Components/Oscar'
// import Button from './Components/Button'

function App() {

  // const personName= {
  //   first: 'Bruce',
  //   last: 'Wayne',
  // }

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
    {/* <Button handleClick={()=>{
      console.log('Button Click')
    }} /> */}


    {/* <Greet name ='Folarin' messageCount={20} isLoggedIn={true} /> */}


 {/* <Person name ={personName} /> */}


    <PersonList name={nameList}/>


    {/* <Status status='success' />


    <Heading>
        Placeholder text
    </Heading>


    <Oscar>
      <Heading>
        Oscar goes to Leonardo DiCaprio!
      </Heading>
    </Oscar> */} 



    </>
  )
}

export default App
