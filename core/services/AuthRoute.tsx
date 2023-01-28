import React, { useEffect, useState } from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router';

export default function AuthRoute({props}) {


    const auth = getAuth();
    const navigate = useNavigate();
    const [loading,  setLoading] =  useState(false)

    useEffect(() => {
        AuthCheck
    }, [auth])

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user) {
            setLoading(false)
        } else {
            console.log("unauthorized")
            navigate("/auth")
    }
    })

    if (loading) return <p>Loading...</p>

  return <>{props}</>
}
