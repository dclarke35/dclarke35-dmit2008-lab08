import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

import { cn } from "@/lib/utils/mergeCss"
import { AddTaskForm } from "../forms/AddTaskForm";

function AddTask({ children, className, uid, payload }) {
 return (
    <Dialog className="">
        <DialogTrigger className={cn("bg-indigo-500 text-white py-2.5 px-9 w-full rounded-lg mt-3 font-semibold", className)}>Add New</DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-center mb-3">Add New Task</DialogTitle>
                <AddTaskForm/>
            </DialogHeader>
        </DialogContent>
    </Dialog>
    );
}
export { AddTask }