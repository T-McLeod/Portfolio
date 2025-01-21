import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Interests from './components/Interests';
import Navbar from './components/Navbar';
import WhatsNew from './components/WhatsNew';

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
