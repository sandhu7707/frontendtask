import { DOMElement, useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image";

export default function Cards ({view, cards}: {view: string, cards: any[]}) {

    const [focusedIndex, setFocusedIndex] = useState(-1);

    const scrollToCard = useEffect(() => {
        let cardsContainer = document.getElementById("cards-container")
        let card = document.getElementById(`card-${focusedIndex}`)
        let cardBoundingRect = card?.getBoundingClientRect()
        let cardsContainerBoundingRect = cardsContainer?.getBoundingClientRect()
        if(cardsContainerBoundingRect && cardBoundingRect){
            let x = (cardBoundingRect.x + cardBoundingRect.width/2) - (cardsContainerBoundingRect.x + cardsContainerBoundingRect.width/2)
            cardsContainer?.scrollTo(cardsContainer.scrollLeft + x, 0)
        }
        

    }, [focusedIndex, cards.length])

    useEffect(() => {
        const interval = setInterval(() => {
            let newFocusedIndex = (focusedIndex + 1)%cards.length
            setFocusedIndex(newFocusedIndex)
        }, 2000)

        return () =>  clearInterval(interval)
    }, [scrollToCard, focusedIndex])

    return (
        <div className="z-20 w-full flex flex-col w-full max-w-[100vh] md:max-w-none">
            
            <div className="relative h-28 mt-60 pt-4 flex flex-col">
            </div>
            <div id="cards-container" className="flex flex-row w-full scrollbar-width-none overflow-scroll scroll-smooth">
                <div className="w-[400px] grow-0 shrink-0 pt-12"></div>
                    {cards.map((x: any, i) => (
                        <div key={i} id={`card-${i}`} className={`transition duration-500 ${focusedIndex === i ?  "brightness-100" : " brightness-[70%]"} ${i===0 && focusedIndex === i ? 'opacity-80': ''} h-full grow-0 shrink-0 mr-10`}>         
                            <div className="relative" style={{"width": "450px", "height": "700px"}}>
                                <Image fill={true} src={x.imageSrc} alt=""></Image>
                                {view==="events" && 
                                    <div tabIndex={i} className={`text-3xl h-20 absolute bottom-20 ml-8 transition ease-in duration-500 ${focusedIndex === i ? 'opacity-0 duration-100' : ''} ${focusedIndex+1===i ? 'translateY(20)': ''}`}>
                                        <h1 className="text-5xl font-bold mb-8">{x.name}</h1>
                                        <p><Image className="inline" width="32" height='32' src="location.svg" alt=""/>{x.location}</p>
                                    </div>}
                            </div>
                        </div>
                    ))}
                <div className="w-[400px] h-full grow-0 shrink-0 "></div>
            </div>
        </div>    
    )
}