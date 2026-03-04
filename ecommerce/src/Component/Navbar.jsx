import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { ThemeContext } from "../theme/ThemeProvider";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  const {theme, toggleTheme} = useContext(ThemeContext)

  // const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://dummyjson.com/products/categories"
  //       );
  //       setCategories(res.data);
  //     } catch (error) {
  //       console.log("Category fetch error:", error);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  return (
    <nav className={`navbar navbar-expand-lg 
    ${theme == 'light' ? 'navbar-light' : 'navbar-dark bg-dark'}
    `}>
      
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/dashboard">
          ShopCart
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Home
              </Link>
            </li>

            {/* Categories Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </span>

              <ul className="dropdown-menu">
                {categories.map((cat, index) => (
                  <li key={index}>
                    <Link
                      className="dropdown-item"
                      to={`/category/${cat}`}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex gap-2">
            <Link
              to="/CartPage"
              className="btn btn-outline-light position-relative"
            >
              🛒 Cart
              {/* {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )} */}
            </Link>

            <Link to="/" className="btn btn-warning">
              Login
            </Link>
            <button className="btn btn-light" onClick={toggleTheme}>
             
              {theme == 'light' ? <FaLightbulb /> : <FaRegLightbulb />}
              
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;