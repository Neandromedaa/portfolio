import { useState, useEffect, useContext } from "react";
import { hoverContext } from "./hoverContext";

function Tooltip(){
    const hoverTip = useContext(hoverContext);
    
    return <div style={{top: hoverTip.y + 5, left: hoverTip.x + 5}} className='tooltip'>
        <p>насос насос насос насос насос насос насос насос насос насос насоснасос</p>
    </div>
}

export default Tooltip;