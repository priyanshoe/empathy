export default function LandingPage(){
    return(
        <div className="main h-[95vh] md:h-screen w-full bg-[url(@/public/Images/BackGround.jpg)] bg-center bg-cover font-[base]">
            <div className="relative bg-[#01010165] h-full w-full flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-5xl stroke text-transparent font-[stroke-bold] text-nowrap">Based in New York . Based in New York . Based in New York . Based in New York </h1>
                </div>

                <div className="absolute bottom-24 flex justify-between items-center text-xs tracking-[5]">
                    <button className="border-b-1 pb-2 border-[#ffffff37]">OUR  PROJECTS</button>
                    <div className="w-1.5 h-1.5 rounded bg-white mx-3"></div>
                    <button className="border-b-1 pb-2 border-[#ffffff37]">VIEW  SERVICES</button>
                </div>


            </div>
        </div>
    )
}