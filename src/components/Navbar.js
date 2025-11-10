import React from "react";
import logoS from "../pages/logoS.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar ">
        <a className="navbar-brand">
          <img src={logoS} alt="logo" />
          Monthly Journey Plan
        </a>
      </nav>
    </>
  );
};

export default Navbar;
