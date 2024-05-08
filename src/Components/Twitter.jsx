import { FaTwitter } from "react-icons/fa";

const Twitter = () => {
  return (
    <a href="https://twitter.com/lucaspdsdev" target="_blank" rel="noopener noreferrer" className="p-4 text-neutral-900  hover:text-neutral-800 rounded-lg w-full h-full flex justify-center items-center bg-gradient-to-r from-teal-400 to-teal-800 hover:from-teal-400 hover:to-teal-600">
      <FaTwitter className="text-9xl" />
    </a>
  );
};

export default Twitter;