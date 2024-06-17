import Cards from "./Cards"
import Image from "next/image"

export default function MainView ({view, setView, data}: {view: string, setView: (view: string) => any, data: any}) {
    
    const isEventsView = view === 'events'
    const isCollectionsView = view === 'collections'


    return (
        <>
            <div className="relative z-10 pointer-events-none">
                <Cards 
                    data={data[view]}
                    view={view}
                />
            </div>
            <div className="relative flex bg-[#282B30] w-fit rounded-full m-8 z-10 font-semibold">
                <button className={`${isEventsView? 'bg-[#484E56]': 'bg-[#282B30]'} text-white p-3 px-10 rounded-full`} onClick={() => setView("events")}>Events</button>
                <button className={`${isCollectionsView? 'bg-[#484E56]': 'bg-[#282B30]'} text-white p-3 px-10 rounded-full`} onClick={() => setView("collections")}>Collections</button>
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
        </>
    )
}