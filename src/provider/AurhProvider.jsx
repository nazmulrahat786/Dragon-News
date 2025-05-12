import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../Firebase/firebase";
export const AuthContext = createContext()

const auth = getAuth(app);

const AurhProvider = ({children}) => {
    const [user, setUser]= useState(null)

console.log(user);
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
useEffect(()=>{
 const unsubcribe =   onAuthStateChanged(auth, (currentUser) => {
setUser(currentUser)
        return () => {
            unsubcribe()
        }
    })


},[])
const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
const logOut = () => {
    return signOut(auth)
}


    const autData = {
        user,
        setUser,
        creatUser,
        signIn,
        logOut
    }




    return <AuthContext value={autData}>
{children}
    </AuthContext>
};

export default AurhProvider;