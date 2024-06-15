import Image from "next/image"
import { useState } from "react"
import Cards from "./Cards"
import SideDetail from "./SideDetail"
import Banner from "./Banner"

export default function Dashboard(){
    const [view, setView] = useState('events')

    const cards = new Array(5).fill(0).map((v,i) => (
        <>
            <div className="text-3xl h-28 pt-4">{view==="collections" && <><h1 className="font-medium">Lunar Palace: </h1><h1>(ft. Kanye West)</h1></>}</div>
            
            <div className="relative">
                <Image width='400' height='600' src={`https://picsum.photos/400/600?blur=2`} alt=""></Image>
                {view==="events" && <div className="text-3xl h-20 absolute bottom-20 ml-8"><h1 className="text-5xl font-bold mb-8">Event Name</h1><p><Image className="inline" width="32" height='32' src="location.svg" alt=""/>Location</p></div>}
            </div>
        </>
        ))
    
    console.log(cards)
    return(
        <div className="grid md:grid-cols-[minmax(500px,10fr)_120px_minmax(600px,6fr)] md:h-full">
            <div className="relative bg-[#15181B] max-w-[100vw]">
                <div className="relative z-10 pointer-events-none">
                    <Cards 
                        cards={cards}
                        focusable={true}
                    />
                </div>
                <div className="relative flex bg-[#282B30] w-fit rounded-full m-8 z-10 font-semibold">
                    <button className={`${view === 'events' ? 'bg-[#484E56]': 'bg-[#282B30]'} text-white p-3 px-10 rounded-full`} onClick={() => setView("events")}>Events</button>
                    <button className={`${view === 'collections' ? 'bg-[#484E56]': 'bg-[#282B30]'} text-white p-3 px-10 rounded-full`} onClick={() => setView("collections")}>Collections</button>
                </div>
                <div className="absolute inset-y-0">
                    <div className="h-fit py-8 mx-8 w-1/2 flex flex-col justify-around">
                            <div className="mb-20"><Image width='200' height='100' src="/generic_logo.png" alt=""></Image></div>
                            <div className="my-auto flex flex-col h-3/4">
                                <div className=" text-appBackground text-[#444649] font-bold mb-8">
                                    <div>ASTR</div>
                                    <div>IX</div>
                                </div>
                                <div className="text-appBackground text-[#444649] font-bold mt-8">
                                    {   view === 'events' ? 
                                            (<><div>EVE</div>
                                            <div>NTS</div></>)
                                            : (<><div>COLL</div>
                                                <div>ECTI</div>
                                                <div>BLE</div>
                                            </>)
                                    }
                                </div>
                            </div>
                    </div>    
                </div>
            </div>
            <div className="bg-[#B9A0FF] max-w-[100vw] flex">
                <Banner/>
            </div>
            <div className="bg-[#15181B] max-w-[100vw]">
                <div>
                    <SideDetail view={view}/>
                </div>
            </div>
        </div>
    )
}