import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;