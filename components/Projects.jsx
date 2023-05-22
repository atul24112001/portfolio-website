import { startCase } from 'lodash';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Chip from './Chip';
import Link from 'next/link';
import LinkIcons from './LinkIcons';
import { RiInstagramFill, RiLink, RiGithubFill } from "react-icons/ri";

export default function Projects({ projects = [], type }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(projects);
    }, [])

    return data.length ? (
        <div className='w-[90%] lg:w-[75%]  m-auto my-5'>
            <h2 className='text-2xl font-bold border-b-[2px] pb-2 text-primary-color'>{startCase(type)} Projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
                {data.map((project, i) => {
                    const src = type + "Project" + i;
                    return (
                        // <Link href={project.url} target='_blank' key={`${i + 1}`}>
                        <div key={`${i + 1}`} className='flex flex-col ease-in-out  border-[2px] rounded-md border-primary-color hover:scale-105 transition-all hover:shadow-3xl hover:shadow-primary-lite-color cursor-pointer'>
                            <Image
                                width={500}
                                height={500}
                                quality={100}
                                alt={src}
                                src={`/Images/${src}.png`}
                                className='w-[100%]  h-auto rounded-t-md '
                            />
                            <div className='p-2 border-t-primary-color border-t-[2px]  flex flex-col flex-1 justify-between gap-2'>
                                <div className='flex items-center gap-1 justify-between'>
                                    <h3 className='font-bold text-xl'>{project.title}</h3>
                                    <div className='flex items-center gap-1'>
                                        <LinkIcons tooltip="Website" Icon={RiLink} link={project.url} color="#6a8aff" />
                                        <LinkIcons tooltip="Github" Icon={RiGithubFill} link={project.github} color="#ccc" />
                                    </div>
                                </div>
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
