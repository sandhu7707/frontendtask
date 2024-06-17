import Image from "next/image"

export default function Cover () {

    const imageContainer = (child: any, type: string) => {
        if(type === 'none')
            return (<div className="grow-0 shrink-0 w-9 md:w-1/5 text-center h-[30px] lg:h-[60px] overflow-hidden">{child}</div>)
        if(type === 'flexitem')
            return (<div className="grow shrink w-9 md:w-auto text-center h-[30px] lg:h-[60px]">{child}</div>)
        if(type === 'growshrink')
            return(<div className=" w-9 md:w-auto md:animate-growshrinkimage text-center h-[30px] lg:h-[60px]">{child}</div>)
        if(type === 'shrinkgrow')
            return(<div className=" w-9 md:w-auto md:animate-shrinkgrowimage text-center h-[30px] lg:h-[60px]">{child}</div>)
    }

    const headingContainer = (child: any, type: string) => {
        if(type === "growshrink")
            return(
            <div className="md:w-4/5">
                <h1 className="flex items-start md:animate-growshrink m-12">{child}</h1>
            </div>
            )
        if(type === "shrinkgrow")
            return(<h1 className="flex items-start md:w-full md:animate-shrinkgrow m-12">{child}</h1>)
    }

    return (
        <div className="flex flex-col h-full w-full bg-[#FFF4DF]">
            <div><Image className="h-[50px] w-[100px] lg:h-[100px] lg:w-[200px] ml-8 my-16" height='100' width='200' alt="ALTRIX" src="/generic_logo.png"></Image></div>
            <div className="flex bg-[#FFF4DF]">
                <div className="vertical-text md:horizontal-tb text-black m-auto md:w-4/5 text-3xl lg:text-6xl font-medium text-nowrap">
                    {headingContainer(<>WE {imageContainer(<Image className=" object-cover object-left h-full" width="1000" height='60' alt="ALTRIX" src="https://picsum.photos/seed/lkgfd/1000/60"></Image>, "flexitem")} ORGANIZE THE</>, "growshrink")}
                    {headingContainer(<>CONNECTION {imageContainer(<Image className=" object-cover object-left h-full" width="1000" height='60' alt="ALTRIX" src="https://picsum.photos/seed/jlkp/1000/60"></Image>, "flexitem")}</>, "growshrink")}
                    {headingContainer(<>{imageContainer(<Image className=" object-cover object-left h-full" width="1000" height='60' alt="ALTRIX" src="https://picsum.photos/seed/opik/1000/60"></Image>, "flexitem")} BETWEEN {imageContainer(<Image className=" object-cover object-left h-full" width="1000" height='60' alt="ALTRIX" src="https://picsum.photos/seed/agkernbera/1000/60"></Image>, "none")}</>, "shrinkgrow")}
                    {headingContainer(<>ARTIST{imageContainer(<Image className=" object-cover object-left h-full" width="1000" height='60' alt="ALTRIX" src="https://picsum.photos/seed/xzcz/1000/60"></Image>, "growshrink")}CULTURE{imageContainer(<Image className=" object-cover object-left h-full" width="1000" height='60' alt="ALTRIX" src="https://picsum.photos/seed/vnksdpo/1000/60"></Image>, "shrinkgrow")}</>, "shrinkgrow")}
                    {headingContainer(<>{imageContainer(<Image className=" object-cover object-left h-full" width="1000" height='60' alt="ALTRIX" src="https://picsum.photos/seed/asdd/1000/60"></Image>, "flexitem")}ART{imageContainer(<Image className=" object-cover object-left h-full" width="1000" height='60' alt="ALTRIX" src="https://picsum.photos/seed/mkpoj/1000/60"></Image>,"none")}& COLLECTIONS</>, "shrinkgrow")}
                </div>
            </div>
        </div>  
    )
}