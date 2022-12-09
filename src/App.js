import {  Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";


// import components

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header/>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
     
      <Sidebar/>
      <Footer/>
    </div>
  );
};

export default App;
