'use client'

import { useFormState } from 'react-dom'
import { useState } from 'react'

import { toast } from 'sonner'

import { cn } from "@/lib/utils/mergeCss"
import { editAction } from '@/actions/editTaskAction'
import { FormControl, Label, Input } from "."
import { CategorySelectList } from "./CategorySelectList"
import { StatusSelectList } from './StatusSelectList'

const initialState = {
    message: "Default",
}

function EditTaskForm({ children, className, uid, payload }) {
    const [state, formAction] = useFormState(editAction, initialState)
    const [category, setCategory] = useState(payload.category)
    const [todo, setTask] = useState(payload.task)
    const [start, setStart] = useState(payload.task)
    const [finish, setFinish] = useState(payload.task)
    const [status, setStatus] = useState(payload.task)

    function handleInput(e) {
        switch (e.currentTarget.name) {
            case 'category':
                setCategory(e.currentTarget.value)
                break
            case 'task':
                setTask(e.currentTarget.value)
                break
            case 'start':
                setStart(e.currentTarget.value)
                break
            case 'finish':
                setFinish(e.currentTarget.value)
                break
            case 'status':
                setStatus(e.currentTarget.value)
                break
            default:
                null
        }
    }

        if(state.message === 'Success'){
            toast(
            <aside className='bg-green-500 text-lime-50 py-2.5 px-9 w-full rounded-lg mt-1 font-semibold'>
                <p>
                    Your task was saved successfully.
                </p>
            </aside>
            )
        }

 return (
    <section>
        <header>
            <h3 className='text-center text-xs mb-6 mt-0'>
                Form State: 
                <span className='ml-2 font-bold text-green-500'>{state.message}</span>
            </h3>
        </header>
        <form action={formAction} className={cn(" space-y-3 bg-white", className)}>
            <FormControl className="flex flex-col mb-6">
                <Input type="hidden" name ="uid" value={uid}/>
            </FormControl>
            <FormControl className="flex flex-col mb-6">
                <Label htmlFor="category" className="mb-1">Category</Label>
                <CategorySelectList onInput={handleInput} className="mb-6" selectedDefault={payload.category}/>
            </FormControl>
            <FormControl className="flex flex-col">
                <Label htmlFor="todo">Task</Label>
                <Input onInput={handleInput} id="todo" name="todo" defaultValue={payload.todo}></Input>
            </FormControl>
            <div className='flex justify-between space-x-10'>
                <FormControl className="flex flex-col w-full">
                    <Label htmlFor="start">Start Date</Label>
                    <Input onInput={handleInput} type="date" id="start" name="start" defaultValue={payload.start}
                    className=" bg-zinc-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 mb-6">
                    </Input>
                </FormControl>
                <FormControl className="flex flex-col w-full">
                    <Label htmlFor="finish">Due Date</Label>
                    <Input onInput={handleInput} type="date" id="finish" name="finish" defaultValue={payload.finish}
                    className=" bg-zinc-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 mb-6">
                    </Input>
                </FormControl>
            </div>
            <FormControl className="flex flex-col my-6">
                <Label htmlFor="status" className="mb-1">Status</Label>                
                <StatusSelectList onInput={handleInput} className="mb-6"  selectedDefault={payload.status}/>
            </FormControl>
            <FormControl className="flex flex-col mt-6">
                <button className="bg-indigo-500 text-white py-2.5 px-9 w-full rounded-lg mt-1 font-semibold" >Update Task</button>
            </FormControl>
        </form>

    </section>
 )
}
export {EditTaskForm}