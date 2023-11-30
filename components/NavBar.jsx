import React from 'react'
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import LinkIcons from './LinkIcons';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import IconButton from './IconButton';

export default function NavBar({ details }) {
    return (
        <nav className="w-[90%] lg:w-[75%]  m-auto my-5 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold ">
                Portfolio
            </h1>
            <div className="flex gap-2 items-center">
                <Link target='_blank' className='border-primary-color hover:bg-primary-color hover:text-[#252525] font-semibold border-[2px] text-primary-color rounded-md py-1 px-4 text-xs' href={"/atul_morchhlay_resume.pdf"}>
                    Resume
                </Link>

                <IconButton tooltip="Github" to={details.github}>
                    <Github size={22} />
                </IconButton>
                <IconButton tooltip="Linkedin" to={details.linkedin}>
                    <Linkedin size={22} />
                </IconButton>
            </div>
        </nav>
    )
}
