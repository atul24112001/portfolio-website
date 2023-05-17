import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import details from "@/data/details.json"
import Chip from "@/components/Chip";
import NavBar from "@/components/NavBar";
import Introduction from "@/components/Introduction";
import Timeline from "@/components/Timeline";

const timelineItems = [
  {
    title: "First event",
    date: "January 01, 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper convallis quam sed consectetur."
  },
  {
    title: "Second event",
    date: "February 01, 2022",
    content: "Duis semper convallis quam sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Third event",
    date: "March 01, 2022",
    content: "Consectetur adipiscing elit. Duis semper convallis quam sed consectetur. Lorem ipsum dolor sit amet."
  },
];

export default function Home() {

  return (
    <main className="w-screen h-screen overflow-auto bg-[#252525] p-2 border-[4px] border-primary-color">
      <NavBar details={details} />
      <Introduction details={details} />
      <Timeline timeline={details.timeline} />
    </main>
  )
}
{/* <div className="divide-y divide-gray-400">
  {timelineItems.map((item, index) => (
    <div key={index} className="py-4 flex items-center">
      <div className="flex items-center w-20">
        <div className="bg-gray-400 rounded-full h-8 w-8" />
        <div className="ml-4 font-bold">{item.date}</div>
      </div>
      <div className="ml-4">
        <div className="text-lg font-bold">{item.title}</div>
        <div className="mt-2">{item.content}</div>
      </div>
    </div>
  ))}
</div> */}