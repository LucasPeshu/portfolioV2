import React from 'react';
import { SiGithub } from 'react-icons/si';

const GithubLogoComponent = () => {
  return (
    <a href="https://github.com/LucasPeshu" target="_blank" rel="noopener noreferrer" className="rounded-lg w-full h-full flex justify-center items-center bg-blue-500">
      <SiGithub className="text-black text-8xl" />
    </a>
  );
};

export default GithubLogoComponent;
