import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
    const [hover, setHover] = useState(false);
    return (
        <div className="relative inline-block">
            <div className={`absolute z-10  ${hover ? "block" : "hidden"} bg-black text-white px-3 py-1 text-sm rounded whitespace-nowrap transform -translate-x-1/2 -top-8 left-1/2`}>
                <span className='text-xs'>{text}</span>
                <div className="absolute -z-1 bg-black w-3 h-3 transform rotate-45 bottom-[-5px] left-1/2 -translate-x-[50%]"></div>
            </div>
            <div onMouseOver={() => {
                setHover(true)
            }} onMouseLeave={() => {
                setHover(false);
            }}>
                {children}
            </div>
        </div>
    );
};

export default Tooltip;