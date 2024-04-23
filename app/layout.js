import {Advent_Pro} from 'next/font/google'
import {NavBar} from '@/components/navbar/NavBar'
import { Toaster } from "@/components/ui/sonner"
import '@/css/globals.css'
import { Toast } from '@radix-ui/react-toast'

// Different Styles of Fonts
const headingFont = Advent_Pro({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata = {
	title: 'To Do List App',
	description: 'Best To Do List of the year in DMIT',
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body>
				<NavBar className="bg-black"/>
				{children}
				<Toaster 
				position="top-center"
				visibleToasts={1}
				toastOptions={{
					unstyled: true,
					classNames: {
					  toast: 'bg-opacity-0',
					  title: 'text-red-400',
					  description: 'text-red-400',
					  actionButton: 'bg-zinc-400',
					  cancelButton: 'bg-orange-400',
					  closeButton: 'bg-lime-400',
					},
				  }}
				/>
			</body>
		</html>
	)
}
