import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Header from "./Header/Header.jsx"
import Body from "./Body/Body.jsx"
import Footer from "./Footer/Footer.jsx"


function App() {
  return (
    <Router>
      <Body />
      <Footer />
    </Router>
  )
}

export default App
