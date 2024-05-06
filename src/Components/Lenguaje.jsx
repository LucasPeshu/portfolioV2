import { FaReact, FaNodeJs, FaJs, FaCss3, FaHtml5, FaDocker, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiGithub, SiMysql, SiPostgresql } from 'react-icons/si';
import { DiGit } from 'react-icons/di';

function Lenguaje () {
  return (
    <div className="container text-white rounded-lg text-2xl">
      <h2 className="text-neutral-900 flex items-center justify-center gap-2 text-2xl font-bold p-2 border-2 border-zinc-800 border-b-zinc-600 rounded-t-lg bg-gradient-to-r from-red-500 to-red-700">Mis tecnologías</h2>
      <ul className="bg-neutral-800 p-2 overflow-y-auto rounded-b-lg" style={{ maxHeight: '220px' }}>
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
      </ul>
    </div>
  );
}

export default Lenguaje