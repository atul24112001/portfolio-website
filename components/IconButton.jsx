import Link from 'next/link'
import React, { useState } from 'react'
import Chip from './Chip';

export default function IconButton({ children, to, onClick, tooltip }) {
    const [show, setShow] = useState(false);

    // const className = 'hover:bg-[#ffffff23] rounded-full p-1';
    return (
        <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} className='relative hover:bg-[#ffffff23] w-8 h-8 rounded-full flex justify-center items-center'>
            {to ? (
                <Link href={to} target='_blank'>{children}</Link>
            ) : (
                <div onClick={onClick}>{children}</div>
            )}
            {(tooltip && show) && <div className='absolute bottom-full  rounded-md'>
                {tooltip}
            </div>}
        </div>
    )
}
