import { useState } from "react"

interface AuthUser {
    name: string
    email: string
}

export const User = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () =>{
        setUser({
            name: 'Folarin',
            email: 'thefolafolarin@gmail.com'
        })
    }

  return (
    <div>
        <button onClick={()=>{handleLogin}}>Login</button>
        <div>User name is {user.name}</div>
        <div>User email is{user.email}</div>

    </div>
  )
}
 
