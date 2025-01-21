import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Interests from './pages/Interests';
import Navbar from './components/Navbar';
import WhatsNew from './pages/WhatsNew';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/whats-new" element={<WhatsNew />} />
      </Routes>
    </Router>
  )
}

export default App
