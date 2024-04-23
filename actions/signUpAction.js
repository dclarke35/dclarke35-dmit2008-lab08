'use server'
import { redirect } from "next/navigation"


import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth } from "@/lib/firebase/firebaseInit"

/*
    Every Action function needs to be ASYNC
*/


/*
    Task:
    - Take Email & Password name value pairs and use firebase auth to sign in the user.
        Google & Github sign up providers
    Call the firebase createuser(auth, email, password)

    Sign In - same but signInwith(auth, email, password)
    
    Demo Page
        Protected Route - only authenticated users can access
        form - serverAction - redirect

*/


export async function signUpAction(formdata){
    const email = formdata.get('email')
    const password = formdata.get('password')

    try {
        const userObj = await createNewUser(email, password)
        redirect('/demo')
    } catch (error){
        console.log(error)
    }

    return null
}


async function createNewUser(email, password){
    return await createUserWithEmailAndPassword(auth, email, password)
}
