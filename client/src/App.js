import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Loading from "./pages/Loading/Loading";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

/*

about-us
terms-and-conditions
contact us
disclaimer
refund-policy
shipping policy

order confirm page
order failed
order tracking
thank you

privacy-policy

homepage
product description
product collection
product search
coming soon

sitemap.xml

unauthorized
auth-page
user profile
*/
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
