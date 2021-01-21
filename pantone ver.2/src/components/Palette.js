import React from 'react';
import './Palette.css';

const Color = ({ color, select, onChange, onRevert  }) => {
    return (
        <div className={`color ${select && 'active'}`} style={{ backgroundImage:`radial-gradient(${color} 30%, rgba(0,0,0,0) 70%)`}} onClick={onChange} onMouseDown={onRevert}> 
        
        </div>
    )
    }

const Palette = ({colors, selected, onSelect, onRevert}) => {
    const colorList = colors.map(
        (color) => (<Color onRevert={onRevert} color={color} select={selected===color} onChange={() => onSelect(color)} key={color} onRevert={onRevert}/>)
    );
    return (
        <div className="palette-base">
            <div className="palette">
                {colorList}
            </div>
            <div className="palette1">
                {colorList}
            </div>
            <div className="palette2">
                {colorList}
            </div>
            <div className="palette3">
                {colorList}
            </div>
            <div className="palette4">
                {colorList}
            </div>
            <div className="palette5">
                {colorList}
            </div>
            <div className="palette6">
                {colorList}
            </div>
        </div>
    );
};

export default Palette;