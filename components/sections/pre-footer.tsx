import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { cn } from "@/lib/utils"

export function AnimatedGridPatternDemo() {
    return (
        <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-black">
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.5}
                duration={2}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-10",
                )}
            />
        </div>
    )
}

function PreFooter() {
    return (
        <div className="my-20">
            <AnimatedGridPatternDemo />
        </div>
    )
}

export default PreFooter
