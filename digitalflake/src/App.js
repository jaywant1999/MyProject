import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Products from "./Pages/Product";
import AddCategory from "./Pages/Addcategory";
import AddProduct from "./Pages/AddProduct";
import { Routes, Route } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Logo from "./Images/Logo.png";

const App = () => {
  return (
    <>
      <div className="App">
        <div id="topbar">
          <img id="top-logo" alt="logo" src={Logo} />
          <a href="/" id="aprofile">
            <CgProfile id="profile" />
          </a>
        </div>

        <div className="div2">
          <div className="app-navbar">
            <Navbar />
          </div>

          <div className="pages">
            <Routes>
              <Route path="Home" element={<Home />} />
              <Route path="Category" element={<Category />} />
              <Route path="Product" element={<Products />} />
              <Route path="AddCategory" element={<AddCategory />} />
              <Route path="AddProduct" element={<AddProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
