import React from 'react';
import './Pantone.css';
import back from './back.jpg';

const Pantone = ({palette, color}) => {


    return (
        <div className="pantoneback" id="pantoneback" style={{ backgroundImage:`linear-gradient(${color},black)`}}>
            <img className="back" id="frame-img" src={back}/>
            <div className="Palette-wrapper"
            // style={{ backgroundImage:`linear-gradient(${color},black)`}}
            >
                    {palette}
            </div>
            <div className="Pantone-box">
                <div className="Colorbox-wrapper" >
                    <div className="ColorWindow-wrapper" style={{ background: color}}>
                    </div>
                    <div className="Colorname-wrapper">
                        <div>PANTONE</div>
                        <div className="Colorname" style={{ color }}>{color}</div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Pantone;