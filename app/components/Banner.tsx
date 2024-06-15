import {useEffect } from "react"

export default function Banner () {
    
    const autoScroll = () => {
        const bannerContainer = document.getElementById("banner-container")
        const bannerContainerBoundingRect = bannerContainer?.getBoundingClientRect()
        if(bannerContainer && bannerContainerBoundingRect && bannerContainerBoundingRect.width > bannerContainerBoundingRect.height){
            const scrollableWidth = bannerContainer.scrollWidth - bannerContainerBoundingRect?.width;
            if(Math.abs(bannerContainer.scrollLeft - scrollableWidth) < 5)
                bannerContainer.scrollTo(0,0)
            else
                bannerContainer?.scrollTo((bannerContainer.scrollLeft + scrollableWidth*(50)/20000), 0)
        }
        else if(bannerContainer && bannerContainerBoundingRect){
            const scrollableHeight = bannerContainer.scrollHeight - bannerContainerBoundingRect?.height;
            if(Math.abs(bannerContainer.scrollTop - scrollableHeight) < 5)
                bannerContainer.scrollTo(0,0)
            else
                bannerContainer?.scrollTo(0, (bannerContainer.scrollTop + scrollableHeight*(50)/20000))
        }
    }

    useEffect(() => {
        const interval = setInterval(autoScroll,10)
        return () => clearInterval(interval)
    })

    return (
        <div id="banner-container" className="h-14 md:h-full flex-grow overflow-x-scroll md:overflow-y-scroll text-nowrap md:vertical-rl scrollbar-width-none">
            <div id="banner" className="text-3xl md:text-5xl md:leading-[120px] leading-14 text-[#000000] font-bold">
                Event: Bus tour, JLM Stadium, Delhi * Collection Live: Meta Lives, Live in Astrix Lorem
            </div>
        </div>
    )
}