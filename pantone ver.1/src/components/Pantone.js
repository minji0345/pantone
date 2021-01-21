import React from 'react';
import './Pantone.css';

const Pantone = ({palette, color, ready, notReady}) => {


    return (
        <div className="pantoneback" id="pantoneback" style={{ background: color}}>
            <div className="Palette-wrapper" style={{ backgroundColor: 'black', zIndex:'4'}}
            >
                    {palette}
            </div>
            <div className="frame Pantone-box" id="frame-img" style={{ zIndex:'5'}} onClick={ready} onDoubleClick={notReady} >
                <div className="Colorbox-wrapper" >
                    <div className="ColorWindow-wrapper" id="ColorWindowWrapper" style={{ background: color, zIndex:'5'}}>
                    </div>
                    <div className="Colorname-wrapper">
                        <div className="title" id="ColornameWrapper" style={{ color }}>PANTONE</div>
                        <div className="Colorname" id="ColornameWrapper2" style={{ color }}>{color}</div>
                        <span>Find your color and <b>click!</b></span>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Pantone;