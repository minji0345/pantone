import React from 'react';
import './Palette.css';

const Color = ({ color, select, onChange, notReady  }) => {
    return (
        <div className={`color ${select && 'active'}`} style={{ background: 'black' }} onClick={onChange} onDoubleClick={notReady}> 
        
        </div>
    )
    }

const Palette = ({colors, selected, onSelect, notReady}) => {
    const colorList = colors.map(
        (color) => (<Color color={color} select={selected===color} onChange={() => onSelect(color)} key={color} notReady={notReady} />)
    );
    return (
        <div className="palette-base">
            <div className="palette">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette1">
                {colorList} {colorList}{colorList}
            </div>
            <div className="palette2">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette3">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette4">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette5">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette6">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette5">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette4">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette3">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette2">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette1">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette6">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette5">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette4">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette3">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette2">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette1">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette1">
                {colorList}{colorList}{colorList}
            </div>
            <div className="palette1">
                {colorList}{colorList}{colorList}
            </div>
            
        </div>
    );
};

export default Palette;