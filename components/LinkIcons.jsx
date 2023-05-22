import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import Tooltip from './Tooltip';

export default function LinkIcons({ link, Icon, color, tooltip }) {
    const [hover, setHover] = useState(false);
    const [currentColor, setColor] = useState(color);
    // const [title, setTitle] = useState(null);

    // useEffect(() => {
    //     if (tooltip) {
    //         setTitle(tooltip)
    //     }
    // }, [tooltip])

    useEffect(() => {
        if (hover) {
            setColor("#fff");
        } else {
            setColor(color);
        }
    }, [hover, color])

    return (
        <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} href={link} target="_blank">
            {/* {title ? (
                <Tooltip text={title}>
                    <Icon fontSize="20px" color={currentColor} className={`cursor-pointer hover:scale-125 transition-all ease-out hover:text-white`} />
                </Tooltip>
            ) : ( */}
            <Icon fontSize="20px" color={currentColor} className={`cursor-pointer hover:scale-125 transition-all ease-out hover:text-white`} />
            {/* )} */}
        </Link>
    )
}
