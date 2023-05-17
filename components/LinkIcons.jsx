import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'

export default function LinkIcons({ link, Icon, color }) {
    const [hover, setHover] = useState(false);
    const [currentColor, setColor] = useState(color);

    useEffect(() => {
        if (hover) {
            setColor("#fff");
        } else {
            setColor(color)
        }
    }, [hover])

    return (
        <Link onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} href={link} target="_blank">
            <Icon fontSize="20px" color={currentColor} className={`cursor-pointer hover:text-white`} />
        </Link>
    )
}
