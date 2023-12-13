import './App.css'
import AboutLittleLemon from './AboutLittleLemon'
import HomePage from './HomePage'
import Contact from './Contact'
import LoginButton from './Login'
import LoginoutButton from './Loginout'
import { Routes, Route, Link } from "react-router-dom";
function App() {


  return (
    <>
      <nav>
        <Link to="/" className="nav-item">HomePage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/Contact" className="nav-item">Contact</Link>
        <Link to="/LoginButton"className="nav-item">LoginButton</Link>
        <Link to="/LoginoutButton"className="nav-item">LoginoutButton</Link>
        
        
      </nav>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutLittleLemon />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/LoginButton" element={<LoginButton />}></Route>
          <Route path="/LoginoutButton" element={<LoginoutButton />}></Route>
          
      </Routes>
    </>
  )
}

export default App
