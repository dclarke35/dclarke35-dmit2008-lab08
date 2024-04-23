import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

import { cn } from "@/lib/utils/mergeCss"
import { DeleteTaskForm } from "../forms/DeleteTaskForm";

function DeleteTask({ children, className, uid, payload }) {
 return (
    <Dialog className="">
        <DialogTrigger className={cn("border border-neutral-500 text-neutral-600 px-2 py-0.5 rounded", className)}>Delete</DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-center mb-3">Delete Task</DialogTitle>
                <DeleteTaskForm uid={uid} payload={payload}/>
            </DialogHeader>
        </DialogContent>
    </Dialog>
    );
}
export { DeleteTask }