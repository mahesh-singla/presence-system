import React, { createContext, useState, useEffect } from 'react';
import firebaseDb from '../config/firebaseDb';

export const UserContext = createContext();

export default function UserContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    const [pending, setPending] = useState(true)

    const onLogout = () => {
        firebaseDb.auth().signOut().then(res => {
            setCurrentUser(null)
            alert("You are successfully logged out")
        })
    }

    useEffect(() => {
        firebaseDb.auth().onAuthStateChanged(user => {
            setCurrentUser(user)
            setPending(false)
        })
    })

    if (pending) {
        return <div>Loading...</div>
    }

    return (
        <UserContext.Provider
            value={{
                currentUser,
                onLogout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
