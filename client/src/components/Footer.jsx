import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white  py-6  text-center text-gray-600 text-sm border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="flex justify-center items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            Build by : arun & jay
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
