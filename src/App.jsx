import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/:id" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
