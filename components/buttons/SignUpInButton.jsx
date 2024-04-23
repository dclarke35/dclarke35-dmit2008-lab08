import {cn} from '@/lib/utils/mergeCss'

function SignUpInButton({children, className, ...props}) {
	return (
		<button {...props} className={cn('bg-indigo-500 font-medium text-white py-2.5 px-9 rounded-md', className)}>
			{children}
		</button>
	)
}
export {SignUpInButton}
