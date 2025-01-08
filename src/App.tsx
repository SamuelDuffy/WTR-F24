import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBanner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import Home from './components/pages/Home/Home';
import Experience from './components/pages/Experience/Experience';
import SideQuests from './components/pages/SideQuests/SideQuests';

const App = () => {
  return (
    <Router>
      <div>
        <TopBanner />
        <NavBar />
        <Routes>
          <Route path="/WTR-F24/" element={<Home />} />
          <Route path="/WTR-F24/experience" element={<Experience />} />
          <Route path="/WTR-F24/side-quests" element={<SideQuests />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
