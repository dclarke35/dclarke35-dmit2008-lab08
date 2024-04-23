import { Toaster } from "@/components/ui/toaster"

import { ToDoList } from "@/components/todos/ToDoList";
import { ToDoListItem } from "@/components/todos/ToDoListItem";
import { AddTask } from "@/components/dialogs/AddTask"
import { getToDoItems } from "@/lib/firebase/api"

async function DemoPage({children}) {
	const payload = await getToDoItems()
	const tasks = Object.entries(payload.todos).reverse()

	return (
		<>
			<header className="text-center pt-16">
				<h2 className="text-5xl text-slate-900">Demo Page Component </h2>
			</header>
			<main className=" max-w-2xl mx-auto  py-16">
				<ToDoList>
					{tasks.map((task) => (
						<ToDoListItem key={task[0]} payload={task[1]} uid={task[0]}/>
					))}
				</ToDoList>
				<AddTask className="mt-8"/>
			</main>
		</>
	)
}
  export default DemoPage