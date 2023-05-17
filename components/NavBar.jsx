import React from 'react'
import { RiInstagramFill, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import LinkIcons from './LinkIcons';

export default function NavBar({ details }) {
    return (
        <nav className="w-[90%] lg:w-[75%]  m-auto my-5 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold ">
                {details.firstName}
                <i>
                    <span className="text-primary-color">&apos;s Portfolio </span>
                </i>
            </h1>
            <div className="flex gap-2">
                <LinkIcons Icon={RiInstagramFill} link={details.instagram} color="#d62976" />
                <LinkIcons Icon={RiLinkedinBoxFill} link={details.linkedin} color="#0a66c2" />
                <LinkIcons Icon={RiGithubFill} link={details.github} color="#ccc" />
            </div>
        </nav>
    )
}
