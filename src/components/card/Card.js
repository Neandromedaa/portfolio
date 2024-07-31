import { useState } from "react";
import OpenedCard from "./OpenedCard";

function Card({src, link, description, type}){
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(true);

    function openHandle(){
        if(loading) return;
        setOpen(!open);
    }

    function handleImageLoad() {
        setLoading(false);
    }

    return <>
        <div className="card" onClick={openHandle}>
            {loading ? <div className="load"></div> : <></>}
            <img src={`/images/${type}/${src}.jpg` } onLoad={handleImageLoad} alt={'pic'}></img>
            <p>{description}</p>
            {open ? <OpenedCard type={type} src={src} link={link} open={open}/> : <></>}
        </div>
    </>
}

export default Card;