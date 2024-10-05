interface GreetProps {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}


export const Greet =(props: GreetProps)=>{

    const {messageCount = 0} = props

    return(
      <div><h2 className="text-black text-4xl font-semibold">
        { props.isLoggedIn ? `Hello ${props.name}! You have ${messageCount} 
        new messages`: `Welcome Guest`}</h2></div>
    )
}