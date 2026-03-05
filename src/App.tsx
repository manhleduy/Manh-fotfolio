import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from "./pages/HomePage"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Notfound from "./pages/Notfound"
function App() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.995 },
    in: { opacity: 1, y: 0, scale: 1 },
    out: { opacity: 0, y: -20, scale: 0.995 },
  };

  const pageTransition = {
    duration: 0.55,
    ease: [0.2, 0.9, 0.25, 1],
  };

  return (
    <div className="min-h-screen w-full">
      
      <Navbar />
      
      <div className="w-full h-full ">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition as any}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<Notfound/>}/>
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>

    
  )
}

export default App
