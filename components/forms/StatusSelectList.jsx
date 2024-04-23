import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { cn } from "@/lib/utils/mergeCss"

function StatusSelectList({ children, className, selectedDefault, disabledYes }) {
 return (<Select id="status" name="status" disabled={disabledYes} defaultValue={selectedDefault}>
            <SelectTrigger>
            <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="In-Progress">In-Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
        </Select>);
}
export { StatusSelectList }