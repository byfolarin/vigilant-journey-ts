import './App.css'
// import { Greet } from './Components/Greet'
// import { Person } from './Components/Person'
// import { PersonList } from './Components/PersonList'
// import { Status } from './Components/Status'
// import { Heading } from './Components/Heading'
// import { Oscar } from './Components/Oscar'
// import Button from './Components/Button'
  //  import Input from './Components/Input'
  import Container from './Components/Container'

function App() {

  // const personName= {
  //   first: 'Bruce',
  //   last: 'Wayne',
  // }

    // const nameList = [ 
    //   {
    //     first: 'Bruce',
    //     last: 'Wayne',
    //   },
    //   {
    //     first: 'Clark',
    //     last: 'Kent',
    //   },
    //   {
    //     first: 'Princess',
    //     last: 'Diana',
    //   },
    // ]
  

  return (
    <>
    {/* <Button handleClick={() =>{
      console.log('Button Clicked')
    }}/> */}

   {/* <Input value='' handleChange={(event)=> console.log(event)}/> */}
 
    {/* <Greet name ='Folarin'   isLoggedIn={true} /> */}


 {/* <Person name ={personName} /> */}


    {/* <PersonList name={nameList}/> */}


    {/* <Status status='error' />

{/*  */}
    {/* <Heading>
        Placeholder text
    </Heading> */}
{/* 

     <Oscar>
      <Heading>
        Oscar goes to Leonardo DiCaprio!
      </Heading>
    </Oscar>  */}

    <Container styles={{border:'1px solid black',padding:'1rem'}} />

    </>
  )
}

export default App
