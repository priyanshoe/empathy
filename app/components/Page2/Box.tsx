import { CiPaperplane, CiMicrochip  } from "react-icons/ci"
export default function Box(props:{name:String, desc:String, icon:React.ReactNode}){
    return(
        <div className="w-full h-90 relative border-[#fcfcfc22] border-1 mb-6">
            <div className="w-3/4 h-1/1000 absolute bg-[#fcfcfc22] right-0 top-15">
                <div className="absolute top-0 -translate-y-[50%] left-0 -translate-x-[100%] rounded-full p-3 border-[#fcfcfc22] border-1 ">
                    {props.icon}
                </div>
            </div>

            <div className="font-[base] px-9 absolute bottom-9">
                <h1 className="font-medium text-2xl pb-4 capitalize">{props.name}</h1>
                <p className="text-lg font-[demo4]">{props.desc}</p>
            </div>
        </div>
    )
}