import { FaRegStar,FaStar } from "react-icons/fa";

export default function Star({selected = false, onSelect = f => f}) {
    return (
        <>
        {selected ? <FaStar color="red" size={25} onClick={onSelect}/> : <FaRegStar color="grey" size={25} onClick={onSelect}/>}
        </>
    )
}