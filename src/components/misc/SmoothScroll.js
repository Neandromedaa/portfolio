import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { useEffect } from "react";
import { AnchorPlugin } from './anchor-plugin';

function SmoothScroll(){
    // const overscrollOptions = {
    //     enable: true,
    //     effect: 'glow',
    //     damping: 0.15,
    //     maxOverscroll: 150,
    //     glowColor: '#fff',
    // };
    const options = {
        syncCallbacks: true,
        damping: 0.04,
        alwaysShowTracks: true,
        // plugins: {overscroll: { ...overscrollOptions },},
    };
    console.log()
    useEffect(() => {
      if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
        .test(navigator.userAgent))){
          Scrollbar.use(AnchorPlugin);
          Scrollbar.init(document.querySelector('.scroll'), options);
        }
      
      return () => {
        if (Scrollbar) Scrollbar.destroy(document.body);
      };
    }, []);
    return null;
}

export default SmoothScroll;