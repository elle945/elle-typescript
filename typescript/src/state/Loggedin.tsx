//arrow rafce
import { useState } from 'react'

//     const [IsLoggedIn, setIsLoggedIn] = useState<boolean>(false)

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const Login = () => {
        setIsLoggedIn(true)
    }
    const Logout = () => {
        setIsLoggedIn(false)
    }

    return (
        <>
            <button onClick={Login}>Login</button>
            <button onClick={Logout}>Logout</button>
            <h4>Person is: {isLoggedIn ? 'logged in' : 'logged out'}</h4>
        </>
    )
}
