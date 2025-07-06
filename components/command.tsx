import React from "react"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

function CommandMenu({ open, setOpen }: { open: boolean, setOpen:(open:boolean)=>void }) {
  

    // React.useEffect(() => {
    //     const down = (e: KeyboardEvent) => {
    //         if (e.key === "d" && (e.metaKey || e.ctrlKey)) {
    //             e.preventDefault()
    //             setOpen((open: any) => !open)
    //         }
    //     }
    //     document.addEventListener("keydown", down)
    //     return () => document.removeEventListener("keydown", down)
    // }, [])

    return (
      <CommandDialog open={open}  onOpenChange={setOpen}>
     
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                </CommandGroup>
            </CommandList>
           
        </CommandDialog>
        
    )
}
  
export default CommandMenu