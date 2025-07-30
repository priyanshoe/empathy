export default function Title(props:{name:String}){
    return(
        <div className="text-[11px] uppercase tracking-[5] font-[demo4] font-bold">
            <h3>/{props.name}</h3>

        </div>
    )
}