import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components/macro';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Friends from './pages/Friends';
import FishLog from './pages/FishLog';
import Events from './pages/Events';
import Notifications from './pages/Notifications';

const Container = styled.div`
    width: 100%;
    background-color: var(--gray);
`

const App = () => {
  return (
    <Container>
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
    </Container>
  );
}

export default App;