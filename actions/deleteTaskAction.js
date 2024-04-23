'use server'

import { ref, remove } from 'firebase/database'

import { db } from '@/lib/firebase/firebaseInit'
import { revalidatePath } from 'next/cache'


export async function deleteAction(prevState, formData){
    const uid = formData.get('uid')
    const response = await RemoveFromRTDB(uid)

    revalidatePath('/demo')
    return {message: response}
}

async function RemoveFromRTDB(uid){
    const path = `todos/${uid}`
    const dbRef = ref(db, path)

    try{
        await remove(dbRef)
        return 'Success'
    } catch (error) {
        console.log('error')
        return 'Failed'
    }
}