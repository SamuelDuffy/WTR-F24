import { BrowserRouter as Router } from "react-router-dom";
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
        <Home />
        <Experience />
        <SideQuests />
      </div>
    </Router>
    
  )
}

export default App
