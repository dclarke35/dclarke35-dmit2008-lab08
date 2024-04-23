
import { ScrollArea } from "@/components/ui/scroll-area"
import {cn} from '@/lib/utils/mergeCss'

function ToDoList({children, className}) {
	return (
		<ScrollArea className="border border-neutral-200 rounded p-1 h-[471px]">
			<section className={cn('bg-white', className)}>{children}</section>
		</ScrollArea>
	) 
}

export {ToDoList}
