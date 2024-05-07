import { VscVscode } from "react-icons/vsc";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from 'react';
import { FaPython, FaHtml5, FaCss3, FaJava, FaJs, FaReact, FaNodeJs, FaDocker, FaFigma, FaWordpress  } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMysql, SiTailwindcss, SiGithub } from "react-icons/si";
import { DiGit } from "react-icons/di";

const Tech = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="relative">
      <div
        className="p-4 text-neutral-900 hover:text-neutral-800 rounded-lg w-full h-full flex justify-center items-center bg-gradient-to-r from-rose-400 to-rose-700 hover:from-rose-400 hover:to-rose-600 cursor-pointer"
        onClick={togglePopup}>
        <VscVscode className="text-9xl" />
      </div>
      
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50">
          <div className="text-white p-4 rounded-lg relative bg-neutral-800">
            <div className="flex justify-between items-center gap-24">
              <div className="text-xl font-bold">Tecnologías</div>
              <div>
                <FaTimes className="cursor-pointer" onClick={togglePopup} />
              </div>
            </div>
            <hr className="my-2" />
            <ul className=" overflow-y-auto rounded-b-lg text-white" style={{ maxHeight: '220px' }}>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><FaPython />Python</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><FaHtml5 />HTML</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><FaCss3 />CSS</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><FaJava />Java</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><FaJs />JavaScript</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><SiTypescript />Typescript</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><FaReact />React</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><SiPostgresql />PostgreSQL</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><SiMysql />MySQL</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><SiTailwindcss />Tailwindcss</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><FaNodeJs />NestJS</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><DiGit />Git</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><SiGithub />GitHub</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><FaDocker />Docker</li>
              <li className="text-xl flex gap-2 items-center p-2 border-b border-zinc-700"><FaWordpress   /> WordPress</li>
              <li className="text-xl flex gap-2 items-center p-2"><FaFigma  /> Figma</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tech;

