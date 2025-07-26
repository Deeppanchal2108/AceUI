// components/ImageText.tsx
import React from 'react'
import clsx from 'clsx'

type TextImageMaskProps = {
    text: string
    backgroundImage: string
    fontSizeClasses?: string 
    fontWeight?: string 
    align?: 'left' | 'center' | 'right'
    className?: string
   
}

export default function ImageText({
    text,
    backgroundImage,
    fontSizeClasses = 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl',
    fontWeight = 'font-extrabold',
    align = 'center',
    className = '',
  
}: TextImageMaskProps) {
    return (
        <div
            className={clsx(
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
