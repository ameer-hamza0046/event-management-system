import React from "react";
import FootComp from "./misc/FootComp";

const Footer = () => {
  return (
    <FootComp
      footList={[
        { location: "/", text: "Home" },
        { location: "/about", text: "About" },
        { location: "/contact", text: "Contact" },
      ]}
    />
  );
};

export default Footer;
