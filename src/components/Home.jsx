import Header from "./Header.jsx"
import Presentation from "./Home/Presentation.jsx"
import Us from "./Home/Us.jsx"
import Contact from "./Home/Contact.jsx"
import Footer from "./Footer.jsx"

import '../styles/App.css'

import { motion, useScroll } from "framer-motion"
import { useEffect } from "react"

function Home() {

  useEffect(() => {
    document.title = 'Code Match | Inicio'
  }, [])

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Header></Header>
      <Presentation></Presentation>
      <Us></Us>
      <Contact></Contact>
      <Footer></Footer>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  )
}

export default Home
