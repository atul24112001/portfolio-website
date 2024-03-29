import Image from 'next/image'
import React, { useMemo } from 'react'
import Chip from './Chip'
import Timeline from './Timeline';

export default function Introduction({ details }) {

    const fullTime = useMemo(() => {
        const today = new Date().getTime();
        const startDate = new Date(details.experience.fullTime).getTime();
        let experience = ((today - startDate) / 31536000000).toFixed(1);
        // console.log({ today, startDate, experience })
        const experienceArr = `${experience}`.split(".");

        return `${experienceArr[0] === "0" ? "" : experienceArr[0] + " years and"} ${experienceArr[1]} Months`
    }, [])

    return (
        <div className="lg:w-[75%] m-auto mt-5 lg:flex lg:justify-between">
            <Image
                alt="Profile"
                src="/Images/Profile.jpg"
                width={1000}
                height={1000}
                className="w-[90%] rounded-full lg:w-[50%] object-cover h-auto m-auto lg:m-0 "
                quality={90}
            />
            <div className="flex flex-col justify-center gap-4 items-start w-[90%] lg:w-[45%] h-auto m-auto lg:m-0">
                <h2 className="text-2xl mt-5 lg:mt-0">Hello, I&apos;m&nbsp;
                    <span className="text-primary-color font-bold">{details.firstName + " " + details.lastName}</span>,
                </h2>
                <div className='-translate-y-2'>
                    <p className="text-sm text-gray-300"><span className='text-white font-bold'>Mobile&nbsp;:&nbsp;</span><a href={`tel:+919669801746}`}>{details.contact}</a></p>
                    <p className="text-sm text-gray-300"><span className='text-white font-bold'>Email&nbsp;:&nbsp;</span><a href={`mailto:${details.email}`}>{details.email}</a></p>
                    <p className="text-sm text-gray-300"><span className='text-white font-bold'>Degree&nbsp;:&nbsp;</span>{details.graduation}</p>
                </div>
                <p className="text-xl">
                    I possess a solid foundation in software development, having completed an
                    &nbsp;<span className="font-bold text-primary-color">{details.experience.internship}</span>&nbsp;
                    internship followed by
                    &nbsp;<span className="font-bold text-primary-color">{fullTime}</span>&nbsp;
                    of full-time employment as a full-stack developer.
                </p>
                <div className="flex flex-wrap gap-1 items-center">
                    <h2 className="text-xl font-semibold">Skill : </h2>
                    {details.skills.map((skill, i) => <Chip key={`${i + 1}`} title={skill} />)}
                </div>
                <Timeline timeline={details.timeline} />
            </div>
        </div>
    )
}
