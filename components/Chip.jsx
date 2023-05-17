import React from 'react'

export default function Chip({ title }) {
    return (
        <span className='break-all border-[1px] text-xs lg:text-sm border-primary-color text-primary-color hover:bg-primary-color hover:text-[#252525] rounded-full p-2 px-4'>
            {title}
        </span>
    )
}
