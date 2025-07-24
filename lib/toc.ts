
import { remark } from "remark";
import { visit } from "unist-util-visit";
import {toString} from "mdast-util-to-string";

interface Toc {
    title : string,
    url: string
}

export function getToc(markdown: string): Promise<Toc[]> {

    const tree = remark().parse(markdown);
    const headings: Toc[] = [];
    visit(tree, "heading", (node: any) => {

        if(node.depth === 2){
            const title = toString(node);
        
            const url =
                "#" +
                title
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, "") 
                    .replace(/\s+/g, "-"); 

            headings.push({ title, url });
        }
    });

    return Promise.resolve(headings);
} 


