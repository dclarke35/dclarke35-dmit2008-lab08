'use client'

import { useFormState } from 'react-dom'

import { toast } from 'sonner'

import { cn } from "@/lib/utils/mergeCss"
import { addAction } from "@/actions/addTaskAction"
import { FormControl, Label, Input } from "."
import { CategorySelectList } from "./CategorySelectList"
import { StatusSelectList } from './StatusSelectList'

const initialState = {
    message: "Default",
}

function AddTaskForm({ children, className }) {
    const [state, formAction] = useFormState(addAction, initialState)

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
                <Label htmlFor="category" className="mb-1">Category</Label>
                <CategorySelectList className="mb-6"/>
            </FormControl>
            <FormControl className="flex flex-col">
                <Label htmlFor="todo">Task</Label>
                <Input id="todo" name="todo" placeholder="enter a new todo"></Input>
            </FormControl>
            <div className='flex justify-between space-x-10'>
                <FormControl className="flex flex-col w-full">
                    <Label htmlFor="finish">Start Date</Label>
                    <input type="date" id="start" name="start" className=" bg-zinc-50 border   text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 mb-6"></input>
                </FormControl>
                <FormControl className="flex flex-col w-full">
                    <Label htmlFor="finish">Due Date</Label>
                    <input type="date" id="finish" name="finish" className=" bg-zinc-50 border   text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 mb-6"></input>
                </FormControl>
            </div>
            <FormControl className="flex flex-col my-6">
                <Label htmlFor="status" className="mb-1">Status</Label>                
                <StatusSelectList className="mb-6"/>
            </FormControl>
            <FormControl className="flex flex-col mt-6">
                <button className="bg-indigo-500 text-white py-2.5 px-9 w-full rounded-lg mt-1 font-semibold">Add New Task</button>
            </FormControl>
        </form>

    </section>
 )
}
export {AddTaskForm}