import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Loading from "./pages/Loading/Loading";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
