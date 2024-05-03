import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Logo from "../Utils/Img/Primary_logo.png";
import { Container } from "react-bootstrap";

const FooterContainer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-8 border-t-4">
      <Container className="max-w-4xl mx-auto flex flex-col">
        <div className="flex space-x-4 mb-4">
          <img src={Logo} alt="Logo" className="max-h-[60px]" />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <FiMapPin className="h-6 w-6 mr-2" />
            <span>123 Main Street, City, Country</span>
          </div>
          <div className="flex items-center">
            <FiPhone className="h-6 w-6 mr-2" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center">
            <FiMail className="h-6 w-6 mr-2" />
            <span>info@example.com</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterContainer;
