import React from 'react'
import { Info, Ban, TriangleAlert, Lightbulb } from 'lucide-react'

interface InfoOutProps {
    children: React.ReactNode
    variant?: 'info' | 'warning' | 'error' | 'success'
    className?: string
}

const variantClasses = {
    info: 'bg-blue-950/10 text-blue-500 border-blue-400',
    warning: 'bg-yellow-950/10 text-yellow-500 border-yellow-400',
    error: 'bg-red-950/10 text-red-500 border-red-400',
    success: 'bg-green-950/10 text-green-500 border-green-400',
}

const icons = {
    info: <Info className="w-5 h-5 text-blue-500" />,
    warning: <TriangleAlert className="w-5 h-5 text-yellow-500" />,
    error: <Ban className="w-5 h-5 text-red-500" />,
    success: <Lightbulb className="w-5 h-5 text-green-500" />,
}

function InfoOut({ children, variant, className }: InfoOutProps) {
    return (
        <div
            className={`w-[310px] sm:w-full max-w-full mx-auto
        border rounded-lg p-4 flex flex-col sm:flex-row my-4 items-start sm:items-center
        space-y-2 sm:space-y-0 sm:space-x-3 backdrop-blur-md
        ${variant ? variantClasses[variant] : variantClasses.info} ${className}`}
        >
            <span className="text-xl sm:text-lg mx-1 sm:mx-2">
                {icons[variant || 'info']}
            </span>
            <div className="text-sm sm:text-base">{children}</div>
        </div>
    )
}

export default InfoOut
