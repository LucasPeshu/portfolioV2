import { MdWork } from "react-icons/md";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import noticierovm from '../assets/noticierovm.png';
import rescaldaniwebpage from '../assets/RescaldaniWebPage.png';

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="relative z-40">
      <div
        className="p-4 text-neutral-900 hover:text-neutral-800 rounded-lg w-full h-full flex justify-center items-center bg-gradient-to-r from-orange-400 to-orange-700 hover:from-orange-400 hover:to-orange-600 cursor-pointer"
        onClick={togglePopup}
      >
        <MdWork className="text-9xl" />
      </div>
      
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center">
          <div className="bg-neutral-800 p-4 rounded-lg relative m-4 lg:m-64 text-white">
            <div className="flex justify-between items-center gap-24">
              <div className="text-xl font-bold">Mis Proyectos</div>
              <div>
                <FaTimes className="cursor-pointer" onClick={togglePopup} />
              </div>
            </div>
            <hr className="my-3" />
            <div className="flex flex-col sm:flex-row gap-3 items-center pb-4">
              <img src={ noticierovm } alt="" className="w-96 rounded-lg shadow-md" />
              <div>
              <div>Proyecto realizado con Django poniendo en práctica mis habilidades para el desarrollo back-end. Sistema de busqueda y gestión de publicaciones.</div>
                <a href="https://noticierovm.fly.dev/" className="flex gap-2 text-sky-600 hover:text-sky-800">NoticieroVM<FaExternalLinkAlt /></a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <img src={ rescaldaniwebpage } alt="" className="w-96 rounded-lg shadow-md" />
              <div>
              <div>Rescaldani Producciones es una empresa de eventos ubicada en San Marcos. Requerian una web para enseñar un poco de su trabajo así que la desarrolle con React, TailwindCSS, JavaScript, entre otras tecnologías</div>
                <a href="https://rescaldani-producciones.vercel.app/" className="flex gap-2 text-sky-600 hover:text-sky-800">NoticieroVM<FaExternalLinkAlt /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
