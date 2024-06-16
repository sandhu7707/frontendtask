import Image from "next/image"
import { useEffect, useState } from "react";

export default function EventDetails ({eventData}: {eventData: any}){

    const [heights, setHeights] = useState(new Array(eventData.artists.length))

    const widthForCenterElement = function(){
        const mid = eventData.artists.length/2
        let factor;

        const calculateFactorDenominator = (num: number): number => {
            if(num === 0){
                return 0
            }
            else {
                return 0.75 + 0.75*(calculateFactorDenominator(num-1))
            }
        }

        if(mid !== Math.ceil(mid)){
            factor = 90/(1 + 2*calculateFactorDenominator((eventData.artists.length-1)/2))
        }
        else{
            factor = 90/(2 + 2*calculateFactorDenominator((eventData.artists.length-2)/2))
        }

        return factor
    }()

    const getDimensionPercents = (i:number) => 
        eventData.artists.length/2 !== Math.ceil(eventData.artists.length/2) 
            ? widthForCenterElement*Math.pow(0.75, ((Math.abs(i+1-(eventData.artists.length + 1)/2))))
            : widthForCenterElement*Math.pow(0.75, (Math.floor(Math.abs(i+1 - (eventData.artists.length+1)/2))))

    const widths = new Array(eventData.artists.length).fill(0).map((v:number, i:number) => `${getDimensionPercents(i)}%`)
    // const heights = new Array(eventData.artists.length).fill(0).map((v:number, i:number) => `${225*window.innerWidth*getDimensionPercents(i)/(1920*36)}px`)

    useEffect(() => {
        console.log("useEffect")
        setHeights(new Array(eventData.artists.length).fill(0).map((v:number, i:number) => `${225*window.innerWidth*getDimensionPercents(i)/(1920*36)}px`))
    }, [])

    const getCornerStyle = (i: number) => 
        eventData.artists.length/2 !== Math.ceil(eventData.artists.length/2)
            ? i+1 > (eventData.artists.length+1)/2 ? 'rounded-l-none' : i+1 < (eventData.artists.length+1)/2 ? 'rounded-r-none' : ''
            : i+1 === eventData.artists.length/2 || i+1 === eventData.artists.length/2 + 1 ? '' : i+1 < eventData.artists.length/2 ? 'rounded-r-none' : i+1 > eventData.artists.length/2 ? 'rounded-l-none' : ''
    

    return (
        <section>
            <h1 className="text-6xl font-bold mx-[10%]">{eventData.name}</h1>
            <div className="mx-[10%] text-2xl font-semibold my-4">
                <h1 className="flex justify-between">
                    <div className="inline"><Image className="inline mr-2" width="32" height='32' src="location.svg" alt=""/>{eventData.location}</div>
                    <div className="inline"><Image className="inline mr-2" width="32" height='32' src="alarm.svg" alt=""/> {eventData.time}</div>
                </h1>
            </div>
            <p className="text-2xl mb-12 font-semibold mx-[10%]">{eventData.description}</p>
            <section>
                <h1 className="text-3xl mb-12 mx-[10%]">Artist Lineup</h1>
                <div className="relative flex mx-[5%] items-center justify-center">
                    {eventData.artists.map((x: any, i: number) => {
                        return (<div key={i} style={{'width': widths[i], 'height': heights[i]}} className={`relative rounded-xl ${getCornerStyle(i)}`}>
                            <Image className={`rounded-xl ${getCornerStyle(i)}`} fill={true} src={x.imageSrc} alt=""></Image>
                        </div>)
                    })}
                </div>
            </section>
        </section>
    )
}