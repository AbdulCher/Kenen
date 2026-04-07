import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Music from "./pages/music/Music"
import Photos from "./pages/Photos.jsx";



export default function App() {
  return (
   <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </>
  )
}

 