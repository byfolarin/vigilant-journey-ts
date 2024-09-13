type GreetProps ={
    name: string
}


export const Greet =(props: GreetProps)=>{
    return(
        
            <div><h2 className="text-black">Hello {props.name}! You have 10 new messages</h2></div>
        
    )
}