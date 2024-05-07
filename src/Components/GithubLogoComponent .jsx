import { SiGithub } from 'react-icons/si';

const GithubLogoComponent = () => {
  return (
    <a href="https://github.com/LucasPeshu" target="_blank" rel="noopener noreferrer" className="p-4 text-neutral-900  hover:text-neutral-800 rounded-lg w-full h-full flex justify-center items-center bg-gradient-to-r from-fuchsia-400 to-fuchsia-800 hover:from-fuchsia-400 hover:to-fuchsia-600">
      <SiGithub className="text-9xl" />
    </a>
  );
};

export default GithubLogoComponent;
