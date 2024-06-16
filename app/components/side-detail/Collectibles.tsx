import Image from "next/image"

export default function Collectibles ({collectibles}: {collectibles: any}) {

    const scrollOnClick = (i: number) => {
        const container = document.getElementById('collectibles-container')
        const collectibleBoundingRect = document.getElementById(`collectible-${i}`)?.getBoundingClientRect()
        const containerBoundingRect = container?.getBoundingClientRect()

        if(collectibleBoundingRect && containerBoundingRect){
            container?.scrollTo(container.scrollLeft + collectibleBoundingRect.x + collectibleBoundingRect?.width/2 - containerBoundingRect.x - containerBoundingRect?.width/2, 0)
        }
    }

    return (
        <div id="collectibles-container" className="flex w-full overflow-scroll scrollbar-width-none scroll-smooth">
            {collectibles.map((x: any,i: number) => (
                <div key={i} className={`relative h-[30%] grow-0 shrink-0 mr-[20px]`} style={{width: '150px', height: '200px'}} id={`collectible-${i}`} onClick={() => scrollOnClick(i)}>
                    <Image className="rounded-lg" src={x.imageSrc} fill={true} alt=""></Image>
                </div>
            ))}
        </div>
    )
}