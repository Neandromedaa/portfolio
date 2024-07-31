import { useState } from "react";

function ShowReel(){
    const [loading, setLoading] = useState(true);

    function handleVideoLoad() {
        setLoading(false);
    }

    return <div className="content__profile-showreel">
        {loading ? <div className="load"></div> : <></>}
        <video id="player" type="video/webm" onLoadedData={handleVideoLoad} autoPlay loop muted playsInline>
            <source src="/video/videoplayback.mp4"/>
        </video>
    </div> 
}

export default ShowReel; 