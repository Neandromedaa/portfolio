import About from './About';
import ShowReel from './ShowReel';
import Toggle from './Toggle';
import Scene3D from './Scene3D';
import Tooltip from './Tooltip';
import { useState } from 'react';
import { hoverContext } from './hoverContext';

let x;
let y;

function AboutContainer(){
    const [hovered, setHovered] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [animation, setAnimation] = useState(false);
    
    window.addEventListener('mousemove', (event) => {
            x = event.clientX;
            y = event.clientY;
    })

    function handleToggle(){
        setToggle(!toggle);
    }

    function handleAnimationEnd(){
        setAnimation(!animation);
    }

    function handleHoveredF(){
        setHovered(false);
    }
    function handleHoveredT(){
        setHovered(true);
    }
    
    return <div className='content__profile'>
        <hoverContext.Provider value={{hovered, handleHoveredF, handleHoveredT, x, y}}>
            {toggle && animation ? <Scene3D/> : <><About/><ShowReel/></>}
        <Toggle toggle={toggle} handleToggle={handleToggle} handleAnimationEnd={handleAnimationEnd}/>
        {hovered ? <Tooltip/> : <></>}
        </hoverContext.Provider>
    </div>
}

export default AboutContainer;