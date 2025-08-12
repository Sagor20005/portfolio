import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar.js"
import Home from "./Components/Home.js"
import Footer from "./Components/Footer.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
