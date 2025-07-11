import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hook from './pages/Hook';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hook" element={<Hook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
