import details from "@/data/details.json"
import NavBar from "@/components/NavBar";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
export default function Home() {

  return (
    <main className="w-screen h-screen overflow-auto bg-[#252525] p-2 border-[0px] border-primary-color">
      <NavBar details={details} />
      <Introduction details={details} />
      <Projects projects={details.projects} type="Advance" />
    </main>

  )
}