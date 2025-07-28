
import React from 'react'
import { cn } from '@/lib/utils'

type TextImageMaskProps = {
    text: string
    backgroundImage: string
    fontSizeClasses?: string 
    fontWeight?: string 
    align?: 'left' | 'center' | 'right'
    className?: string
   
}

export  function ImageText({
    text="Ace UI",
    backgroundImage ="/image-text.jpg",
    fontSizeClasses = 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl',
    fontWeight = 'font-extrabold',
    align = 'center',
    className = '',
  
}: TextImageMaskProps) {
    return (
        <div
            className={cn(
                'text-transparent bg-clip-text bg-cover bg-center',
                fontSizeClasses,
                fontWeight,
                {
                    'text-left': align === 'left',
                    'text-center': align === 'center',
                    'text-right': align === 'right',
                },
                className
            )}
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {text}
        </div>
    )
}
