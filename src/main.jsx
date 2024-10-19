import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.tsx'
import './index.css'
import Galleri from './pages/Galleri.tsx'
import Innslag from './pages/Innslag.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Galleri />
  </StrictMode>,
)

//<Home />
//<Galleri />
*/


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Galleri />} />
        <Route path="/Innslag" element={<Innslag />} />
      </Routes>
    </Router>
  </StrictMode>,
)

