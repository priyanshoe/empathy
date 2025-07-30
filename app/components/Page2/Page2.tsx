import Heading from "../Heading"
import Title from "../Title"
import Box from "./Box"

import { CiMicrochip } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";


export default function Page2() {
    return (
        <div className=" bg-[#181C22]  px-5 pb-15">
            <div className="w-full pt-20 pb-13">
                <Title name='Services' />
            </div>
            <div className="pb-12">
                <Heading name='We help brand drive growth through digital experinces' />
            </div>
            <div className="h-full w-full">
                <Box
                    name='Websites'
                    icon={<CiMicrochip size={25} />}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <Box
                    name='Branding'
                    icon={<AiOutlineThunderbolt size={23} />}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                />
                <Box
                    name='Marketing'
                    icon={<GiNetworkBars size={25} />}
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                />
            </div>
        </div>
    )
}