import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Gallary from "./Pages/Gallary";
import Footer from "./Component/Footer";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
