'use server'

import { ref, set, push } from 'firebase/database'

import { db } from '@/lib/firebase/firebaseInit'
import { revalidatePath } from 'next/cache'


export async function addAction(prevState, formData){
    const todo = formData.get('todo')
    const category = formData.get('category')
    const finish = formData.get('finish')
    const start = formData.get('start')
    const status = formData.get('status')
    const newTask   = {
        category,
        finish,
        start,
        status,
        todo
    }

    const response = await AddTask(newTask)
    
    revalidatePath('/demo')
    return {message: response}
}

async function AddTask(task){
    const rootPath = ref(db)

    // generate a new unique key
    const key = push(rootPath).key
    const path = `todos/${key}`

    try{
        await set(ref(db, path), task)
        return 'Success'
    } catch (error) {
        console.log('error')
        return 'Failed'
    }

}