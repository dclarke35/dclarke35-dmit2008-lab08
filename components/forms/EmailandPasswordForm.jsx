'use client'

import { cn } from "@/lib/utils/mergeCss"
import { FormControl, Label, Input } from "."
import { SignUpInButton } from "../buttons/SignUpInButton"
import { signUpAction } from "@/actions/signUpAction"

function EmailAndPasswordForm({ children, className }) {

    return (<form action={signUpAction} className={(cn("space-y-8"),className)}>
        <FormControl className="flex flex-col">
            <Label htmlFor="email">Enter email Address</Label>
            <Input type="text" id="email" name="email" placeholder="youremail@gmail.com"/>
        </FormControl>
        <FormControl className="flex flex-col">
            <Label htmlFor="password">Enter a password</Label>
            <Input type="text" id="password" name="password" placeholder="**********"/>
        </FormControl>
        <FormControl>
            <SignUpInButton type="submit" className="w-full">Sign Up</SignUpInButton>
        </FormControl>
    </form>)
}
export default EmailAndPasswordForm