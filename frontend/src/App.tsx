import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Friends from './pages/Friends';
import FishLog from './pages/FishLog';
import Events from './pages/Events';
import Notifications from './pages/Notifications';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/fish-log' element={<FishLog />} />
          <Route path='/events' element={<Events />} />
          <Route path='/notifications' element={<Notifications />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;