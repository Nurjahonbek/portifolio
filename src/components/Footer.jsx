import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/nurjahon_0305/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://www.t.me/nurjahonbek" target="_blank" rel="noopener noreferrer">
        <FaTelegram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/nurjahon-abdurashidov/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;