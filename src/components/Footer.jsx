import React from "react";
import { BsGithub } from "react-icons/bs";
import DAOMLOGO from "../images/DAOMLOGO.png";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="md:border-t md:border-gray-400 mx-16">
        <div className="containe r px-5 py-6 mx-auto flex items-center sm:flex-row flex-col mx-20">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={DAOMLOGO} alt="DAOMLOGO" className="w-6" />
            <span className="ml-3 text-xl dao-market">DAO MARKET</span>
          </div>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 flex">
            © {new Date().getFullYear()} DAO MARKET BCS4 PROJECT TEAM 4 —
            <a
              href="https://github.com/daomarket4/daomarket"
              rel="noopener noreferrer"
              className="text-blue-700 ml-1"
              target="_blank"
            >
              @ BCS4 - PROJECT TEAM 4 GITHUB
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center mr-8 sm:justify-start">
            <a
              href="https://github.com/daomarket4/daomarket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-xl" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
