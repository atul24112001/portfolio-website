import { startCase } from 'lodash';
import Image from 'next/image';
import React from 'react'
import Chip from './Chip';
import Link from 'next/link';

export default function Projects({ projects = [], type }) {
    console.log(projects)
    return projects.length ? (
        <div className='w-[90%] lg:w-[75%]  m-auto my-5'>
            <h2 className='text-2xl font-bold border-b-[2px] pb-2 text-primary-color'>{startCase(type)} Projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
                {projects.map((project, i) => {
                    const src = type + "Project" + 0;
                    return (
                        <Link href={project.url} target='_blank' key={`${i + 1}`}>
                            <div className='flex flex-col ease-in-out  border-[2px] rounded-md border-primary-color hover:scale-105 transition-all hover:shadow-3xl hover:shadow-primary-lite-color cursor-pointer'>
                                <Image
                                    width={500}
                                    height={500}
                                    quality={100}
                                    alt={src}
                                    src={`/Images/${src}.png`}
                                    className='w-[100%]  h-auto rounded-t-md '
                                />
                                <div className='p-2 border-t-primary-color border-t-[2px]  flex flex-col flex-1 justify-between gap-2'>
                                    <h3 className='font-bold text-xl'>{project.title}</h3>
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
                        </Link>
                    )
                })}
            </div>
        </div>
    ) : null;
}
