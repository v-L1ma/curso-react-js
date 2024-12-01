import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import Home from './pages/Home'
import { ImAirplane } from "react-icons/im";

function App() {  
  const meusItems = ['React', 'Vue', 'Angular']

  return (
    <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Empresa">Empresa</Link>
      </li>
      <li>
        <Link to="/Contato">Contato</Link>
      </li>
      <ImAirplane />
    </ul>

    <Routes>
      <Route exact path="/" element={<Home />}  />
      <Route path='/Empresa' element={<Empresa />} />
      <Route path='/Contato' element={<Contato />} />
    </Routes>

    </Router>
  );
}

export default App;
