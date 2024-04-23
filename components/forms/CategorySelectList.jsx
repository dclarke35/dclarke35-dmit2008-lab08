import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { cn } from "@/lib/utils/mergeCss"

function CategorySelectList({ children, className, selectedDefault, disabledYes }) {

 return (<Select id="category" name="category" disabled={disabledYes} defaultValue={selectedDefault}>
            <SelectTrigger>
            <SelectValue placeholder="Select..."/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Personal">Personal</SelectItem>
              <SelectItem value="Home">Home</SelectItem>
              <SelectItem value="School">School</SelectItem>
              <SelectItem value="Work">Work</SelectItem>
            </SelectContent>
        </Select>);
}
export { CategorySelectList }