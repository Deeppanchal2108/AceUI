"use client";
import { cn } from "@/lib/utils";
import { useMDXComponent } from "@content-collections/mdx/react"; // OR "@mdx-js/react" depending
// import * as UI from "../components/ui";
 import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import InfoOut from "./InfoOut";


const components = {
ComponentPreview,
    ComponentSource,
    InfoOut,
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        <h1 className={cn("font-heading mt-2 scroll-m-20 text-4xl font-bold", className)}
        

            {...props}
            
       />
    },
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

export function Mdx({ code }: { code: string }) {
    const Component = useMDXComponent(code);
    return <Component components={components} />;
}
