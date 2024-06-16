import Image from "next/image"
import { useState } from "react"
import Banner from "./Banner"
import EventDetails from "../side-detail/EventDetails"
import CollectionDetails from "../side-detail/CollectionDetails"
import MainView from "../main-view/MainView"

export default function Dashboard(){
    // type events = "events"
    // type collections = "collections"
    const [view, setView]: [view: string, any] = useState('events')

    const data = {
        'collections': new Array(5).fill(0).map((v,i) => ({
                    name: 'Lunar Palace',
                    owner: 'ft. Kanye West',
                    imageSrc: 'https://picsum.photos/400/600?blur=2'
        })),
        'events': new Array(5).fill(0).map((v,i) => ({
                    name: 'Event Name',
                    imageSrc: 'https://picsum.photos/450/700?blur=2',
                    location: 'Location'
        })),
        'eventData': {
            name: 'Event Name',
            location: 'Venue',
            time: '04/03/2024@19:00',
            description: 'Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pallentesque mattis condimentum ut nulla.',
            artists: [
                {imageSrc: 'https://picsum.photos/seed/dfsdsf/150/150'},
                {imageSrc: 'https://picsum.photos/seed/sdas/200/225'},
                {imageSrc: 'https://picsum.photos/seed/qwe/150/150'}
            ]
        },
        'collectionData': {
            name: {line1: 'Meta', line2: 'Lives'},
            location: 'Astrix',
            description: 'Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pallentesque mattis condimentum ut nulla.',
            interested: {
                total: '22k',
                sample: [
                    {imageSrc: 'https://picsum.photos/seed/dfsdsf/150/150'},
                    {imageSrc: 'https://picsum.photos/seed/dsfewq/150/150'},
                    {imageSrc: 'https://picsum.photos/seed/hgdsf/150/150'},
                    {imageSrc: 'https://picsum.photos/seed/sadweq/150/150'},
                    {imageSrc: 'https://picsum.photos/seed/daswqe/150/150'}
                ]
            },
            collectibles: [
                {name: 'Collectible Name', year: 2024, artist: 'Pablo', imageSrc: 'https://picsum.photos/seed/fsa/150/200'},
                {name: 'Collectible Name', year: 2024, artist: 'Pablo', imageSrc: 'https://picsum.photos/seed/fsa/150/200'},
                {name: 'Collectible Name', year: 2024, artist: 'Pablo', imageSrc: 'https://picsum.photos/seed/fsa/150/200'},
                {name: 'Collectible Name', year: 2024, artist: 'Pablo', imageSrc: 'https://picsum.photos/seed/fsa/150/200'}
            ]
        }
    }

    const isEventsView = view === 'events'
    const isCollectionsView = view === 'collections'

    return(
        <div className="grid md:grid-cols-[minmax(500px,10fr)_100px_minmax(375px,6fr)] md:h-full">
            
            <div className="relative bg-[#15181B] max-w-[100vw]">
                <MainView
                    view={view}
                    setView={setView}
                    data={data}
                />
            </div>
            <div className="bg-[#B9A0FF] max-w-[100vw] flex">
                <Banner/>
            </div>
            <div className="bg-[#15181B] max-w-[100vw]">
                <div>
                    <div className="h-full flex flex-col justify-between">
                        <section className="mx-[10%]">
                            <div className="text-4xl mt-12 font-semibold">
                                {isEventsView && <><h1>Explore Your First</h1><h1>Event</h1></>}
                                {isCollectionsView && <><h1>Explore Your First</h1><h1>Collectible</h1></>}
                            </div>
                        </section>
                        {isEventsView && <EventDetails eventData={data.eventData}/>}
                        {isCollectionsView && <CollectionDetails collectionData={data.collectionData}/>}
                        <section className="mx-[10%] flex flex-row items-end">
                            {isEventsView && <Image className="rounded-lg mr-auto float-left" width='100' height='100' src="https://picsum.photos/seed/picsum/100/100" alt=""></Image>}
                            <div className="grow">
                                <button className="float-right mt-auto rounded-full bg-[#FFCA5F] w-56 text-black font-bold text-3xl h-16">Join Waitlist</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}