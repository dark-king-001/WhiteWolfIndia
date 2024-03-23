import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from "axios";

// components
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import ShowAlert from "./components/ShowAlert/ShowAlert";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Loading from "./pages/Loading/Loading";

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
  const [isloaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={isloaded && <Home products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
