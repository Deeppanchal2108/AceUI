import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
export function AnimatedGridPatternDemo() {
    return (
        <div className="absolute flex h-[300px] w-full items-center justify-center overflow-hidden bg-black">
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.5}
                duration={2}
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
        <AnimatedSubscribeButton className="w-full max-w-[160px] sm:max-w-[250px] md:max-w-[250px] ">
            <span className="group inline-flex items-center text-xs sm:text-sm md:text-base font-jost">
                <Link href={"https://x.com/deepp2108"}>Connect with me</Link>
                <ChevronRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="group inline-flex items-center text-xs sm:text-sm md:text-base font-jost">
                <Link href={"https://x.com/deepp2108"}>Connect with me</Link>
                <ChevronRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
        </AnimatedSubscribeButton>
    );
}

function PreFooter() {
    return (
        <div className="my-20  h-[300px] w-full flex justify-center items-center flex-col ">
            <AnimatedGridPatternDemo />


            <h1 className="font-jost pt-10 sm:pt-14 text-white text-2xl sm:text-4xl md:text-5xl font-semibold leading-snug sm:leading-tight text-center tracking-tight mb-6 relative flex flex-col justify-center items-center">
                <span>Where beautiful UIs begin</span>
                <span className="">Start Today</span>
            </h1>

            
            <div className='flex flex-row gap-3 relative flex justify-center '>
                <AnimatedSubscribeButtonDemo />

                <Button className='bg-white text-black hover:bg-white hover:text-black text-[13px] md:text-[15px] font-md font-pop'>
                    <Link href={"/components/installation"}>Read the docs  </Link>
                </Button>

            </div>
        </div>
    )
}

export default PreFooter
