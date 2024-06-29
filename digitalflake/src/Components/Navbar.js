import React from "react";
import "../css/Navbar.css";
import { FaCaretRight } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { PiSquaresFourLight } from "react-icons/pi";
import { TbBoxSeam } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul id="nav-list">
          <li className="nav-items">
            <a className="nav-links" href="/App/Home">
              <IoHomeOutline />
              Home
            </a>
            <FaCaretRight className="link-icon" />
          </li>

          <li className="nav-items">
            <a className="nav-links" href="/App/Category">
              <PiSquaresFourLight />
              Category
            </a>
            <FaCaretRight className="link-icon" />
          </li>

          <li className="nav-items">
            <a className="nav-links" href="/App/Product">
              <TbBoxSeam />
              Products
            </a>
            <FaCaretRight className="link-icon" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
