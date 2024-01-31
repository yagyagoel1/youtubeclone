export function VideoCard(props : any){
    return <div className="p-3 cursor-pointer">
        <img className="rounded-xl" src={props.image} alt="didi" />
        <div className="grid grid-cols-12 pt-2">
        
        <div className="col-span-1">
            <img className="rounded-full w-12 h-12" src={props.thumbimage} alt="" />
        </div>
        <div className="col-span-11">
        <div className="col-span-11  ">
           {props.title}
        </div>
        
        <div className="col-span-11 text-gray-350 text-base">
            {props.author}
        </div>
        <div className="col-span-11 text-gray-350 text-base">
            {props.views} | {props.timestamp}
        </div>
        </div>
        </div>
    </div>
}
