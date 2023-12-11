import { Navbar } from "../components/Navbar"
import { Heropage } from "./Heropage"
import { Services } from "./Services"
import { About } from "./About"

export const Mainpage = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-secondaryColor to-stone-100">
        <Navbar />
        <Heropage />
        <Services />
        <About />
      </div>
    </>
  )
}