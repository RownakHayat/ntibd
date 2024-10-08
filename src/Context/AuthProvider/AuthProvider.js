import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase';



export const AuthContex = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (profile) =>{
        return updateProfile(auth.currentUser, profile);

    }
    const  verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }
    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            
            setLoading(false);
        })
        return () => {
            unSubscribe();

        }
    }, [])


    const authInfo = { user, providerLogin, logOut, createUser, signIn, loading, updateUser,  verifyEmail, setLoading };

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;