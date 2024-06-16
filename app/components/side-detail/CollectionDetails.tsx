import Image from "next/image"
import Collectibles from "./Collectibles"

export default function CollectionDetails({collectionData}: {collectionData: any}) {

    return(
        <section className="mx-[10%]">
            <> 
                <h1 className="text-6xl font-bold">{collectionData.name.line1}</h1>
                <h1 className="text-6xl font-bold">{collectionData.name.line2}</h1>
            </>
            <div className="mt-8 text-2xl font-semibold">
                Live in {collectionData.location}
            </div>
            <p className="text-2xl mt-4 mb-12 font-semibold">{collectionData.description}</p>
            <>
                <div className="flex text-2xl font-semibold">
                    {
                        collectionData.interested.sample.map((x: any, i: number) => (
                            <div key={i} className="relative" style={{"left": `-${10*i}px`, width: '40px', height: '40px'}}>
                                <Image className="rounded-[40px]" src={x.imageSrc} fill={true} alt=""></Image>
                            </div>
                        ))
                    }
                    <span>{collectionData.interested.total} people interested</span>
                </div>
                <h1 className="text-lg mt-12 mb-2">Collectibles</h1>
                <Collectibles collectibles={collectionData.collectibles}/>
            </>
        </section>
    )
}