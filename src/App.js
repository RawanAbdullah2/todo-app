import "./App.css";
import Registerss from "./components/Registerss";
import LogIn from './components/LogIn';
import ToDo from "./components/ToDo";
import { Routes, Route,Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
      <Route path="/Registerss" element={<Registerss />}></Route>
      <Route path="/LogIn" element={<LogIn />}></Route>
      <Route path="/ToDo" element={<ToDo />}></Route>
      </Routes>
      <button><Link to='/Registerss'>Register</Link></button>
      <button><Link to='/LogIn'>LogIn</Link></button>
    </div>
  );
}

export default App;
