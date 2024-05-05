import React from "react";

const Button = ({ text, link }) => {
  return (
    <a href={link} className="text-lg font-semibold inline-block bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 rounded-lg text-white hover:opacity-75 transition-opacity duration-300">
      {text}
    </a>
  );
};

export default Button;
