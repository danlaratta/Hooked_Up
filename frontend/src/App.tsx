import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
      
    </div>
  );
}

export default App;