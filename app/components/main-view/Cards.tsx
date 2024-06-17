import { DOMElement, useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image";

export default function Cards ({view, data: {name, owner, cards}}: {view: string, data: {name: string, cards: any, owner: string}}) {

    const [focusedIndex, setFocusedIndex] = useState(-1);
    const cardRefs = new Array(cards.length).fill(useRef<HTMLElement>(null));

    const scrollToCard = useEffect(() => {
        let cardsContainer = document.getElementById("cards-container")
        let card = document.getElementById(`card-${focusedIndex}`)

        let cardBoundingRect = card?.getBoundingClientRect()
        let cardsContainerBoundingRect = cardsContainer?.getBoundingClientRect()
        if(cardsContainerBoundingRect && cardBoundingRect){
            let x = (cardBoundingRect.x + cardBoundingRect.width/2) - (cardsContainerBoundingRect.x + cardsContainerBoundingRect.width/2)
            cardsContainer?.scrollTo(cardsContainer.scrollLeft + x, 0)
        }
        
        if(cardsContainer){
        
            let nextCardStartX = document.getElementById(`card-${(focusedIndex === cards.length - 1 ? focusedIndex + 2: focusedIndex + 1)%cards.length}`)?.getBoundingClientRect().x    
            let headingContainerX = document.getElementById(`headingContainer`)?.getBoundingClientRect().x
            if(headingContainerX){
                cardsContainer.onscroll = () => {
                    
                    let heading1 = document.getElementById(`heading1`)
                    let heading2 = document.getElementById(`heading2`)
                    let card = document.getElementById(`card-${focusedIndex}`)
                    let nextCard = document.getElementById(`card-${(focusedIndex === cards.length - 1 ? focusedIndex + 2: focusedIndex + 1)%cards.length}`)

                    heading1?.classList.remove("hidden")
                    heading2?.classList.remove("hidden")

                    let finalX = cardsContainerBoundingRect!.x + cardsContainerBoundingRect!.width/2 - cardBoundingRect!.width/2
                    let cardStartX = cardBoundingRect!.x

                    if(heading1 && card) {
                        if(heading1.getBoundingClientRect().x < card.getBoundingClientRect().x){
                            heading1.style.transform = `translateX(${finalX + cardStartX - card.getBoundingClientRect().x - headingContainerX}px)`
                        }
                        else{
                            heading1.style.transform = `translateX(${card.getBoundingClientRect().x - headingContainerX}px)`
                        }
                    }

                    if(heading2 && nextCard && nextCardStartX) {
                        if(focusedIndex === cards.length - 1){
                            console.log(nextCard.getBoundingClientRect())
                            heading2.style.transform = `translate(-200px, -200px)`
                            heading2.style.opacity = '0'
                        }
                        else if(focusedIndex === 0){
                            heading2.style.transform = `translateX(${document.getElementById(`card-1`)?.getBoundingClientRect().x}px)`
                            heading2.style.opacity = '1'
                        }
                        else{
                            if(heading2.getBoundingClientRect().x < nextCard.getBoundingClientRect().x){
                                heading2.style.transform = `translate(${cardStartX + nextCardStartX - nextCard.getBoundingClientRect().x - headingContainerX}px)`
                            }
                            else{
                                heading2.style.transform = `translateX(${nextCard.getBoundingClientRect().x - headingContainerX}px)`
                            }
                        }
                    }
                    
                }

                cardsContainer.onscrollend = () =>{
                    let heading1 = document.getElementById(`heading1`)
                    let card = document.getElementById(`card-${focusedIndex}`)
                    let heading2 = document.getElementById(`heading2`)
                    let nextCard = document.getElementById(`card-${(focusedIndex === cards.length - 1  ? focusedIndex + 2: focusedIndex + 1)%cards.length}`)
                    
                    if(heading1 && card)
                        heading1.style.transform = `translateX(${card.getBoundingClientRect().x - headingContainerX}px)`
                    if(heading2 && nextCard)
                        heading2.style.transform = `translate(${nextCard.getBoundingClientRect().x - headingContainerX}px)`

                }
            }
        }
    }, [focusedIndex, cards.length, cardRefs])
    
    useEffect(() => {
        const interval = setInterval(() => {
            
            let newFocusedIndex = (focusedIndex + 1)%cards.length
            setFocusedIndex(newFocusedIndex)
        }, 2000)

        return () => clearInterval(interval)
    }, [scrollToCard, focusedIndex])

    return (
        <div className="z-20 w-full flex flex-col w-full max-w-[100vh] md:max-w-none">
            
            <div id='headingContainer' className="relative h-28 mt-60 pt-4 flex flex-col">
                        {view==="collections" && <div id="heading1" className="absolute hidden duration-100" style={{left: '0px'}}>
                            <h1 className="text-4xl font-bold mt-auto">{name}</h1>
                            <h1 className="text-3xl font-bold">({owner})</h1>
                        </div >}
                        {view==="collections" && <div id="heading2" className="absolute hidden duration-100" >
                            <h1 className="text-4xl font-bold mt-auto">{name}</h1>
                            <h1 className="text-3xl font-bold">({owner})</h1>
                        </div >}
            </div>
            <div id="cards-container" className="flex flex-row w-full scrollbar-width-none overflow-scroll scroll-smooth">
                <div className="w-[400px] grow-0 shrink-0 pt-12"></div>
                    {cards.map((x: any, i) => (
                        <div key={i} id={`card-${i}`} ref={cardRefs[i]} className={`transition duration-500 ${focusedIndex === i ?  "brightness-100" : " brightness-[70%]"} ${i===0 && focusedIndex === i ? 'opacity-80': ''} h-full grow-0 shrink-0 mr-10`}>         
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