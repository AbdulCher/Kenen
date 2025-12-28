import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Music from "./pages/Music"
import News from "./pages/News"
import Header from "./components/Haeder"


export default function App() {
  return (
   <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  )
}

 