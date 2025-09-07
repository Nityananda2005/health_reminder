import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './footer.jsx'
import About from './About.jsx'
import Tips from './Tips.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About />
    <Tips />     {/* ✅ Capitalized */}
    <Footer />
  </StrictMode>,
)
