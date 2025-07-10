import { CSSProperties } from "react"
interface Pattern {
    id: string,
    name: string,
    label?: "New" | "",
    category: "gradients" | "geometric" | "simple",
    style: CSSProperties,
    description?: string,

    code: string
}


export const patterns: Pattern[] = [
    {
        id: "top-gradient-radial",
        name: "Top Gradient Radial",
        category: "simple",
        style: {
            background:
                "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        },
        code: `<div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />
         {/* Your Content/Components */}
    </div>`,
    },
    {
        id: "bottom-gradient-radial",
        name: "Bottom Gradient Radial",
        category: "simple",
        label: "New",
        description: "Radial gradient from white to purple starting from bottom",
        style: {
            background:
                "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        },
        code: `<div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        }}
      />
         {/* Your Content/Components */}
    </div>`,
    },
    {
        id: "bottom-violet-radial",
        name: "Bottom Violet Radial",
        category: "simple",
        label: "New",
        description: "Rich violet from bottom - luxury feel for premium brands",
        style: {
            background:
                "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
        },
        code: `<div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
        }}
      />
      {/* Your Content/Components */}
    </div>`,
    },
    {
        id: "bottom-slate-radial",
        name: "Bottom Slate Radial",
        category: "simple",
        label: "New",
        description: "Sophisticated slate from bottom - clean and professional",
        style: {
            background:
                "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
        },
        code: `<div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
        }}
      />
      {/* Your Content/Components */}
    </div>`,
    }
]