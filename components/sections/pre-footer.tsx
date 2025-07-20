import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button"
import { ChevronRightIcon } from "lucide-react"
export function AnimatedGridPatternDemo() {
    return (
        <div className="absolute flex h-[300px] w-full items-center justify-center overflow-hidden bg-black">
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

export function AnimatedSubscribeButtonDemo() {
    return (
        <AnimatedSubscribeButton className="w-50">
            <span className="group inline-flex items-center text-sm  font-jost ">
                Connect with me 
                <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center text-sm  font-jost ">
                Connect with me 
                <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
        </AnimatedSubscribeButton>
    );
}
function PreFooter() {
    return (
        <div className="my-20  h-[300px] w-full">
            <AnimatedGridPatternDemo />

            <h1 className='  font-jost pt-14 text-white text-3xl md:text-5xl font-semibold leading-tighter text-center  tracking-tight mb-4 text-white relative flex flex-col justify-center items-center'>
                <span> Where beautiful UIs begin </span><br />
                <span> Start Today</span>
            </h1>
            
            <div className='flex flex-row gap-3 relative flex justify-center '>
                <AnimatedSubscribeButtonDemo />

                <Button className='bg-white text-black hover:bg-white hover:text-black text-[15px] font-md font-pop'>Read the docs  </Button>
               
            </div>
        </div>
    )
}

export default PreFooter
