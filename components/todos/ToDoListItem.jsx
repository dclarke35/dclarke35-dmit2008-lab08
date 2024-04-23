import {cn} from '@/lib/utils/mergeCss'
import { EditTask } from '../dialogs/EditTask'
import { DeleteTask } from '../dialogs/DeleteTask'

function ToDoListItem({children, className, uid, payload}) {
	const {category, finish, start, status, todo} = payload
	if (status == "In-Progress")
	{

	}
	if (status == "Completed")
	{
		className="bg-indigo-500"
	}
	if (status == "Cancelled")
	{
		
	}
	return (
		<aside className={cn('odd:bg-neutral-50 even:bg-gray-100 flex justify-between align-middle py-4 px-3 rounded', className)}>
			<div className="flex flex-col gap-y-1 text-[10px] items-center py-2">
				<DeleteTask uid={uid} payload={payload}/>
				<EditTask uid={uid} payload={payload}/>
			</div>
			<div className='align-top items-center'>
				<p className="text-xs text-center text-neutral-400">{category}</p>
				<p className="text-xl font-bold text-neutral-600">{todo}</p>
			</div>
			<div className="text-right py-2">
				<p className="text-sm text-neutral-600">Due: {finish}</p>
				<p className="text-xs">{status}</p>
			</div>
		</aside>
	)
}

export {ToDoListItem}
