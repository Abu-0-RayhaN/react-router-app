import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/nav";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
