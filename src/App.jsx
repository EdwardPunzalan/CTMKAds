import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Body from "./Body/Body.jsx"
import Footer from "./Footer/Footer.jsx"
import MetaPixel from './MetaPixel.jsx';


function App() {
  return (
    <>
      <Router>
        <Body />
        <Footer />
      </Router>
      <MetaPixel />
    </>
  )
}

export default App
