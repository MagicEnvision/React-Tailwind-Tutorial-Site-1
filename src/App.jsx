import Features from "./components/Features"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import WorkFlow from "./components/WorkFlow"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
export default function App() {
  return (
   <div>
     <NavBar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
     <HeroSection/>
     <Features/>
     <WorkFlow/>
     <Pricing/>
     <Testimonials/>
     <Footer/>
     </div>
   </div>
  )
}