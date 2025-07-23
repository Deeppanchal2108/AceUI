"use client";
import { cn } from "@/lib/utils";
import { useMDXComponent } from "@content-collections/mdx/react";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import InfoOut from "./info-out";
import CopyCode from "./copy-code";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const components = {
    ComponentPreview,
    ComponentSource,
    InfoOut,
    CopyCode,
  Table: ({ className, ...props }: React.ComponentProps<typeof Table>) => (
      <div className="w-full  overflow-x-auto rounded-lg">
          <div className="w-[310px] sm:w-full mx-auto ">
      <Table
        className={cn(
          "w-full text-sm text-gray-100 rounded-lg bg-zinc-900 border-zinc-700 overflow-hidden shadow-sm",
          className
        )}
        {...props}
      />
    </div>
  </div>
),



    TableBody: ({ className, ...props }: React.ComponentProps<typeof TableBody>) => (
        <TableBody
            className={cn("divide-y divide-zinc-700", className)}
            {...props}
        />
    ),

    TableCaption: ({ className, ...props }: React.ComponentProps<typeof TableCaption>) => (
        <TableCaption
            className={cn("text-gray-400 text-sm py-2", className)}
            {...props}
        />
    ),

    TableCell: ({ className, ...props }: React.ComponentProps<typeof TableCell>) => (
        <TableCell
            className={cn("px-4 py-3 text-sm text-gray-200", className)}
            {...props}
        />
    ),

    TableHead: ({ className, ...props }: React.ComponentProps<typeof TableHead>) => (
        <TableHead
            className={cn("px-4 py-2 text-left font-semibold text-gray-200 text-sm", className)}
            {...props}
        />
    ),

    TableHeader: ({ className, ...props }: React.ComponentProps<typeof TableHeader>) => (
        <TableHeader
            className={cn("bg-zinc-800", className)}
            {...props}
        />
    ),

    TableRow: ({ className, ...props }: React.ComponentProps<typeof TableRow>) => (
        <TableRow
            className={cn("transition-colors hover:bg-zinc-700 odd:bg-zinc-900 even:bg-zinc-800", className)}
            {...props}
        />
    ),


    pre: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <pre
            className={cn(" bg-zinc-800 z-10 overflow-x-auto scroll-auto p-2 rounded-sm   text-white ", className)}
            {...props}
        />

    ),
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
        <Tabs
            className={cn("relative mt-6 w-full overflow-x-auto", className)}
            {...props}
        />
    ),
    TabsList: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsList>) => (
        <TabsList
            className={cn(
                "w-full flex justify-start rounded-none border-b bg-transparent p-0",
                className,
            )}
            {...props}
        />
    ),
    TabsTrigger: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
        <TabsTrigger
            className={cn(
                "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-all duration-400 ease-in-out data-[state=active]:bg-transparent   data-[state=active]:shadow-none data-[state=active]:text-white data-[state=active]:border-b-white ",
                "flex-shrink-0 flex-grow-0",
                className,
            )}
            {...props}
        />
    ),
    TabsContent: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsContent>) => (
        <TabsContent
            className={cn(
                "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
                className,
            )}
            {...props}
        />
    ),
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className={cn("font-heading mt-2 scroll-m-20 text-4xl font-bold", className)}


            {...props}

        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn(
                "font-heading mt-12 scroll-m-20 border-b  pb-4 mb-4 text-2xl font-semibold tracking-tight first:mt-0 border-slate-700",
                className,
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={cn(
                "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                className,
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={cn(
                "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className,
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
            className={cn(
                "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className,
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
            className={cn(
                "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
                className,
            )}
            {...props}
        />
    ),
    Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
        <h3
            className={cn(
                "font-heading mt-8 mb-2 scroll-m-20 text-xl font-semibold tracking-tight",
                className,
            )}
            {...props}
        />
    ),
    Steps: ({ ...props }) => (
        <div
            className="[&>h3]:step steps mb-12 relative
                   sm:ml-4 sm:pl-8 
                   sm:[counter-reset:step] 
                   sm:before:absolute 
                   sm:before:left-0 
                   sm:before:top-0 
                   sm:before:h-full 
                   sm:before:w-px 
                   sm:before:bg-gradient-to-b 
                   sm:before:from-transparent 
                   sm:before:via-muted-foreground/50 
                   sm:before:to-transparent"
            {...props}
        />
    ),



    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn("ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn("ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <blockquote
            className={cn("mt-6 border-l-2 pl-6 italic", className)}
            {...props}
        />
    ),
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto rounded-lg border dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <table
                className={cn("my-0 w-full overflow-hidden", className)}
                {...props}
            />
        </div>
    ),
    thead: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) => (
        <thead className={cn("border-b last:border-b-0", className)} {...props} />
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr className={cn("border-b last:border-b-0", className)} {...props} />
    ),
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={cn(
                "text-balance border-r px-6 py-3 text-left font-mono text-sm font-semibold tracking-tight last:border-r-0",
                className,
            )}
            {...props}
        />
    ),
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={cn(
                "border-r px-6 py-3 text-sm last:border-r-0 [&[align=center]]:text-center [&[align=right]]:text-right",
                className,
            )}
            {...props}
        />
    ),


};

export function Mdx({ code, className }: { code: string, className?: string; }) {
    const Component = useMDXComponent(code);
    return (<article className={cn("mx-auto max-w-[120ch] px-4 sm:px-6 lg:px-8", className)}>

        <Component components={components} />
    </article>);
}
