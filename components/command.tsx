import React from "react"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"

import { sidebar } from "@/lib/items"
import Link from "next/link"

function CommandMenu({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
    return (
        <CommandDialog
            className="bg-zinc-950 text-white "
            open={open}
            onOpenChange={setOpen}
        >
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {sidebar.map((section, idx) => (
                    <React.Fragment key={section.title}>
                        <CommandGroup heading={section.title}>
                            {section.items.map((item) => (
                                <CommandItem key={item.title} asChild>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                    >
                                        <span>
                                            {item.title}
                                          
                                        </span>
                                    </Link>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                        {idx < sidebar.length - 1 && <CommandSeparator />}
                    </React.Fragment>
                ))}
            </CommandList>
        </CommandDialog>
    )
}

export default CommandMenu