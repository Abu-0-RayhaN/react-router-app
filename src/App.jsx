import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Card from "./components/Card";
import Card_details from "./components/Card_details";
import Nav from "./components/nav";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Outlet />}>
          <Route index element={<Card />} />
          <Route path=":id" element={<Card_details />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
