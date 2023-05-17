import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import details from "@/data/details.json"
import Chip from "@/components/Chip";
import NavBar from "@/components/NavBar";
import Introduction from "@/components/Introduction";
import Timeline from "@/components/Timeline";
export default function Home() {

  return (
    <main className="w-screen h-screen overflow-auto bg-[#252525] p-2 border-[4px] border-primary-color">
      <NavBar details={details} />
      <Introduction details={details} />
      {/* <Timeline timeline={details.timeline} /> */}
    </main>
  )
}