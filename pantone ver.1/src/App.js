import React, { useState, useEffect } from 'react';
import './App.css';
import useMousePosition from './useMousePosition';
import Pantone from './components/Pantone';
import Palette from "./components/Palette";
import back0 from './components/back0.jpg';
import back1 from './components/back1.jpg';
import back2 from './components/back2.jpg';
import back3 from './components/back3.jpg';
import back4 from './components/back4.jpg';
import back5 from './components/back5.jpg';


const colors = [ "#92A8D1", "#88B04B", "#5F4B8B", "#FF6F61","#F7CAC9","#955251","#B163A3","#009473","#DD4124","#D94F70","#45B5AA","#F0C05A","#5A5B9F","#9B1B30","#DECDBE","#53B0AE"];

const App = () => {
  

  const [color, setColor] = useState("#PANTONE COLOR");
  const [imgIndex, setImgIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setImageIndex();
    }, 3000)
    return () => clearInterval(interval);
  }, [imgIndex]);

  const setImageIndex = () => {
    let idx = imgIndex;
    idx = (idx + 1) % 6;
    setImgIndex(idx);
  };

  const handleColor = (color) => {
    setColor(color);
  };

  const { x,y } = useMousePosition();

  useEffect(()=>{
    const frameImg = document.getElementById('frame-img');
    frameImg.style.position = 'absolute';
    if(!ready) {
      frameImg.style.top = (200)+'px';
      frameImg.style.left = (660)+'px';
    } else {
      frameImg.style.top = (y-180)+'px';
      frameImg.style.left = (x-170)+'px';
    }

  },[x,y])

  function getPosition( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { xPos: _x, yPos: _y,  };
  }

  useEffect(()=>{
    const colors = document.getElementsByClassName('color');
    let filteredColors = [];

    if(!ready) {
      for (let color of colors) {
        color.style.zIndex = 4;
        color.style.opacity = 1;
      }
    } else {
      for (let color of colors) {
        const { xPos,yPos }= getPosition(color);
        if (xPos<x+180 && xPos>=x-180 && yPos<y+180 && yPos>=y-180) {
          filteredColors.push(color)
        }
      }
      
      for (let color of colors) {
        if (filteredColors.includes(color)) {
          color.style.zIndex = 6;
          color.style.opacity = 0;
        }
        else {
          color.style.zIndex = 4;
          color.style.opacity = 1;
        }
      }
    }

  },[x,y])

  const onReady = () => {
    setReady(true);
    const colorWindow= document.getElementById('ColorWindowWrapper');
    colorWindow.style.opacity= 0.2;
  }

  const onNotReady = () => {
    const colorName= document.getElementById('ColornameWrapper');
    colorName.style.color= 'black';

    const colorName2= document.getElementById('ColornameWrapper2');
    colorName2.style.color= 'black';

    const colorWindow= document.getElementById('ColorWindowWrapper');
    colorWindow.style.opacity= 0;

    setReady(false);
    setColor("#PANTONE COLOR");
  }
  
  return (
    <body>
      
      <img className="life" id="life-img" src={back0} alt="img" style={imgIndex === 0 ? {zIndex:'3'} : {display: "none"}}/>
      <img className="life" id="life-img" src={back1} alt="img" style={imgIndex === 1 ? {zIndex:'3'} : {display: "none"}}/>
      <img className="life" id="life-img" src={back2} alt="img" style={imgIndex === 2 ? {zIndex:'3'} : {display: "none"}}/>
      <img className="life" id="life-img" src={back3} alt="img" style={imgIndex === 3 ? {zIndex:'3'} : {display: "none"}}/>
      <img className="life" id="life-img" src={back4} alt="img" style={imgIndex === 4 ? {zIndex:'3'} : {display: "none"}}/>
      <img className="life" id="life-img" src={back5} alt="img" style={imgIndex === 5 ? {zIndex:'3'} : {display: "none"}}/>

      <Pantone 
        color={color} 
        palette={
          <Palette colors={colors} selected={color} onSelect={handleColor}  className="frame" id="frame-img" notReady={onNotReady}/>
        }
        ready={onReady} notReady={onNotReady}
        >
      </Pantone>

    </body>
  )
  
}

export default App;