import { useEffect } from "react";

function Toggle({toggle, handleToggle, handleAnimationEnd}){
        // useEffect(() => {
        //         document.querySelector('.toggle__container').addEventListener('animationend', () => {
        //                 handleAnimationEnd();
        //         })
        // }, [])
        return <div  >
                {/* <div className="toggle__container on" onClick={handleToggle}> */}
                <div className={toggle ? 'toggle__container on' : 'toggle__container off'} onTransitionEnd={handleAnimationEnd} onClick={handleToggle}>
                    <div  className="toggle" >
                    {/* <div className="detail"></div>
                    <div className="detail"></div>
                    <div className="detail"></div> */}
                    <h1 className="text3d">3D</h1>
                    </div>
                </div>
                
        </div>  
                
}

export default Toggle;