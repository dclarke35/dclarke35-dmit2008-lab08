'use server'

import { ref, update } from 'firebase/database'

import { db } from '@/lib/firebase/firebaseInit'
import { revalidatePath } from 'next/cache'


export async function editAction(prevState, formData){
    const todo = formData.get('todo')
    const category = formData.get('category')
    const finish = formData.get('finish')
    const start = formData.get('start')
    const status = formData.get('status')

    const uid = formData.get('uid')

    const updatedTask   = {
        category,
        finish,
        start,
        status,
        todo
    }

    const response = await EditTask(updatedTask, uid)
    
    revalidatePath('/demo')
    return {message: response}
}

async function EditTask(task, uid){
    const path = `todos/${uid}`
    const dbRef = ref(db, path)

    try{
        await update(dbRef, task)
        return 'Success'
    } catch (error) {
        console.log('error')
        return 'Failed'
    }

}