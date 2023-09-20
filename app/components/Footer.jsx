"use client";
import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="copyright-container">
            <BiCopyright className="icon-copyright" /> 
            <p>copyright</p>
          </div>
          <div className="text-footer">
          <p>créé par éric castets</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
