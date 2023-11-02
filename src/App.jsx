import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Card from "./components/Card";
import Card_details from "./components/Card_details";
import Checkout from "./components/Checkout";
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
        <Route path="/card" element={<Card />} />
        <Route path="/card/:id/*" element={<CardDetailsRouter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// Component for handling nested routes under /card/:id
function CardDetailsRouter() {
  return (
    <Routes>
      <Route
        path="/*"
        element={<Card_details />} // Pass the id as a prop here if needed
      />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
