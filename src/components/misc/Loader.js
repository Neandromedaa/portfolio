import { useState } from "react";
function Loader(){
    const[loaded, setLoaded] = useState(false);
    loaded ? document.querySelector('html').style.overflow = '' : document.querySelector('html').style.overflow = 'hidden';
    setTimeout(() => setLoaded(true), 4000);
    
    return <div className={`loader ${loaded ? 'hidden' : ''}`}>
        <video id="player" src="/video/2.webm" type="video/webm" autoPlay loop muted playsInline/>
    </div>
}

export default Loader;