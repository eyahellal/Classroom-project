export function Button(props){
    return(
        <div className="flex gap-5 items-center ml-5">
        {props.icon}
        <p>{props.title}</p>
        </div>
    )
}