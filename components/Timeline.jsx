import React from 'react';
import { ModifyDate } from './common';

export default function Timeline({ timeline }) {
    return (
        <section >
            <h2 className='text-xl font-bold'>Work Timeline</h2>
            <div className='ml-2 mt-2'>
                <div>
                    {timeline.map((t, i) => {
                        return (
                            <div className={`relative after:content-[""] after:absolute after:w-[10px] after:h-[100%] after:bg-primary-color after:top-0 after:left-0 before:content-[""] before:w-[13px] before:h-[13px]  before:z-10 before:bg-primary-color  before:-translate-y-[50%] before:rotate-45 before:absolute before:left-[3px] before:top-[50%]  pl-8 py-8 ${i === 0 ? "after:rounded-t-full" : i === timeline.length - 1 ? "after:rounded-b-full" : ""}`} key={`${i + 1}`}>
                                <div className='font-bold text-lg'>{t.position}  <span className='text-gray-400 text-sm font-normal'>({t.company})</span></div>
                                <div className='text-primary-color'>{ModifyDate(t.form)} - {t.to ? ModifyDate(t.to) : "Present"}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
