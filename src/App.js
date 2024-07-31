import Header from "./components/header/Header";
import AboutContainer from "./components/about/AboutContainer";
import CardContainer from "./components/card/CardContainer";
import Footer from "./components/footer/Footer";
import Loader from "./components/misc/Loader";
import UpButton from "./components/misc/UpButton";
import SmoothScroll from "./components/misc/SmoothScroll";
import { useEffect } from "react";
import './styles/openedCard.scss';
import './styles/cardContainer.scss';
import './styles/card.scss';
import './styles/header.scss';
import './styles/about.scss';
import './styles/footer.scss';
import './styles/upbutton.scss';
import './styles/loader.scss';
import './styles/windowed.scss';
import './styles/mobile.scss';
import './styles/scroll.scss';
import './styles/toggle.scss';
import './styles/tooltip.scss';

function App() {
  useEffect(() => {
    document.addEventListener('wheel', function(e) {
      e.preventDefault();
    }, {passive: false});
  });

  return <>
      {/* <Loader/> */}
      <div className='scroll'>
        <div id='start' className='anchor'></div>
        <Header/>
        <AboutContainer/>
        <CardContainer/>
        <Footer/>
        <SmoothScroll/>  
      </div> 
      <UpButton/>
  </>
}

export default App;
