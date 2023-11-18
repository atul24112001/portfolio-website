import Image from 'next/image';
import React from 'react'
import Chip from './Chip';
import LinkIcons from './LinkIcons';
import { RiLink, RiGithubFill } from "react-icons/ri";

export default function Projects({ projects = [] }) {



    return projects.length ? (
        <div className='w-[90%] lg:w-[75%]  m-auto my-5'>
            <h2 className='text-2xl font-bold border-b-[2px] border-b-slate-800 pb-2 text-primary-color'>Projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
                {projects.map((project, i) => {
                    const src = "Project-" + i;
                    return (
                        <div key={`${i + 1}`} className='flex flex-col ease-in-out bg-slate-800   rounded-md border-primary-color hover:scale-105 transition-all shadow-lg hover:shadow-3xl  shadow-primary-lite-color cursor-pointer'>
                            <Image
                                width={500}
                                height={500}
                                quality={100}
                                alt={src}
                                src={`/Images/${src}.png`}
                                className='w-auto  h-[150px] bg-contain rounded-t-md '
                            />

                            <div className='p-3 border-t-primary-color flex flex-col flex-1 justify-between gap-2'>
                                <div className='flex items-center gap-1 justify-between'>
                                    <h3 className='font-bold text-xl'>{project.title}</h3>
                                    <div className='flex items-center gap-1'>
                                        <LinkIcons tooltip="Website" Icon={RiLink} link={project.url} color="#6a8aff" />
                                        <LinkIcons tooltip="Github" Icon={RiGithubFill} link={project.github} color="#ccc" />
                                    </div>
                                </div>
                                <div className={`font-bold ${project.type == "Easy" ? "text-green-400" : project.type === "Intermediate" ? "text-yellow-400" : "text-red-400"}`}>{project.type}</div>
                                <p>{project.description}</p>
                                <div className='flex flex-wrap gap-1'>
                                    {project.stack.map((s, i) => {
                                        return (
                                            <Chip font="xs" key={`${i + 1}`} title={s} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        // </Link>
                    )
                })}
            </div>
        </div>
    ) : null;
}
