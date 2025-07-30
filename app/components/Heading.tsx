export default function Heading(props:{name:String}){
    return(
        <div className="text-4xl font-bold font-[base] leading-11">
            <h1>{props.name}</h1>
        </div>
    )
}