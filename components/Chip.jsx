import Link from 'next/link'
import React from 'react'

export default function Chip({ title, font }) {
    return (
        <Link className={`break-all border-[1px] text-xs font-semibold lg:text-${font || "xs"} border-primary-color text-primary-color hover:bg-primary-color hover:text-[#252525] rounded-full p-2 px-4`} target='_blank' href={`https://www.google.com/search?q=what+is+${title}`}>
            <span>
                {title}
            </span>
        </Link>
    )
}
