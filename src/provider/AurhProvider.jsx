import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../Firebase/firebase";
export const AuthContext = createContext()

const auth = getAuth(app)

const AurhProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)

// console.log(user,loading);
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
useEffect(()=>{
 const unsubcribe =   onAuthStateChanged(auth, (currentUser) => {

setUser(currentUser)
setLoading(false)
return () => {
    unsubcribe()
}
       
    })



},[])
const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const updateUser = (updatedData) => {

    return updateProfile(auth.currentUser, updatedData)
}







const logOut = () => {
    return signOut(auth)
}


    const autData = {
        user,
        setUser,
        creatUser,
        signIn,
        logOut,
        loading,
        setLoading,
        updateUser
    }




    return <AuthContext value={autData}>
{children}
    </AuthContext>
};

export default AurhProvider;