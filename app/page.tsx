import Navbar from "./components/Navbar"

export default function homePage(){
  return(
    <div className="main h-screen bg-[#181C22] text-white">
      <Navbar/>
      <h1 className="bg-red-700 md:bg-yellow-700 lg:bg-green-700">Home page</h1>

    </div>
  )
}