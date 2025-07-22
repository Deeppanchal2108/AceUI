import React from 'react'
import Image from 'next/image'

function BannerSection() {
  return (
    <div>
      <div
        className="bannner relative z-10 mt-10 sm:mt-16 lg:mt-20 mx-2 sm:mx-8 lg:mx-24 xl:mx-40 bg-[url(/background-optimized.jpg)] p-4 sm:p-8 lg:p-10 shadow-md rounded-xl"
      >
        <div className="w-full overflow-hidden rounded-lg">
          <Image
            src="/banner-in.png"
            alt="Landing page preview"
            className="aspect-[16/9] h-auto w-full object-cover"
            width={1200}
            height={675}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
          />
        </div>
      </div>
    </div>
  )
}

export default BannerSection