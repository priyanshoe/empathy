import LandingPage from "./components/LandingPage"
import Navbar from "./components/Navbar"
import Page2 from "./components/Page2/Page2"

export default function homePage(){
  return(
    <div className="main h-screen relative bg-[#181C22] text-white">
      <Navbar/>
      <LandingPage/>
      <Page2/>
    </div>
  )
}