import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

import { cn } from "@/lib/utils/mergeCss"
import { EditTaskForm } from "../forms/EditTaskForm";

function EditTask({ children, className, uid, payload }) {
 return (
    <Dialog className="">
        <DialogTrigger className={cn("bg-neutral-500 text-white px-2 py-0.5 rounded w-full", className)}>
            Edit
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="text-center mb-3">Edit Task</DialogTitle>
                <EditTaskForm uid={uid} payload={payload} />
            </DialogHeader>
        </DialogContent>
    </Dialog>
    );
}
export { EditTask }