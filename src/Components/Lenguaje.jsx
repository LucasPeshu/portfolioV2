import { FaReact, FaNodeJs, FaJs, FaCss3, FaHtml5, FaDocker, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiGithub, SiMysql, SiPostgresql } from 'react-icons/si';
import { DiGit } from 'react-icons/di';

function Lenguaje () {
  return (
    <div className="rounded-lg bg-gray-200 p-2">
      <h2 className="text-2xl font-bold mb-4 text-center">Mis tecnologías</h2>
      <ul className="grid grid-cols-4 gap-4 text-4xl">
        <li className="flex items-center justify-center"><FaPython className="" /></li>
        <li className="flex items-center justify-center"><FaHtml5 className="" /></li>
        <li className="flex items-center justify-center"><FaCss3 className="" /></li>
        <li className="flex items-center justify-center"><FaJava className="" /></li>
        <li className="flex items-center justify-center"><FaJs className="" /></li>
        <li className="flex items-center justify-center"><SiTypescript className="" /></li>
        <li className="flex items-center justify-center"><FaReact className="" /></li>
        <li className="flex items-center justify-center"><SiPostgresql className="" /></li>
        <li className="flex items-center justify-center"><SiMysql className="" /></li>
        <li className="flex items-center justify-center"><SiTailwindcss className="" /></li>
        <li className="flex items-center justify-center"><FaNodeJs className="" /></li>
        <li className="flex items-center justify-center"><DiGit className="" /></li>
        <li className="flex items-center justify-center"><SiGithub className="" /></li>
        <li className="flex items-center justify-center"><FaDocker className="" /></li>
      </ul>
    </div>
  );
}

export default Lenguaje