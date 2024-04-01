import React from "react";
import NavComp from "./misc/NavComp"

const Navbar = () => {
  return (
    <NavComp
      homeAddress="/"
      navList={[
        { location: "/", text: "Home" },
        { location: "/about", text: "About" },
        { location: "/contact", text: "Contact" },
      ]}
    />
  );
};

export default Navbar;
