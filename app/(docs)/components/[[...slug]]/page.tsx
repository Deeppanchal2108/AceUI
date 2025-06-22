import { notFound } from "next/navigation";
import { allDocs } from "content-collections"; // ✅ must be destructured
import { Mdx } from "@/components/mdx-components";

export default function TestComponentPage() {
  const doc = allDocs.find((d) => d.slug === "text-scramble"); // 👈 match the slug

  if (!doc || !doc.published) return notFound(); // ✅ correct way

  return (
      <div className="max-w-4xl mx-auto py-10">
          hello inside the page.tsx file
      <h1 className="text-4xl font-bold">{doc.title}</h1>
      <p className="text-muted-foreground mb-4">{doc.description}</p>

      {/* <Mdx code={doc.body.code} /> */}
    </div>
  );
}
