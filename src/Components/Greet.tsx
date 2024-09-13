type GreetProps ={
    name: string
    messageCount: number
    isLoggedIn: boolean
}


export const Greet =(props: GreetProps)=>{
    return(
        
            <div><h2 className="text-black">{ props.isLoggedIn ? `Hello ${props.name}! You have ${props.messageCount} new messages`: `Chief`}</h2></div>
        
    )
}