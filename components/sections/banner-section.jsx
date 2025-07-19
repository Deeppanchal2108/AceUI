import React from 'react'

function BannerSection() {
  return (
    <div>
          <div

              className="bannner relative z-10 mt-20 mx-40   bg-[url(/background-optimized.jpg)] p-10 shadow-md "
          >
              <div className="w-full overflow-hidden  ">
                  <img
                      src="/banner-in.png"
                      alt="Landing page preview"
                      className="aspect-[16/9] h-auto w-full object-cover"
                      height={1000}
                      width={1000}
                  />
              </div>
          </div>
    </div>
  )
}

export default BannerSection;
