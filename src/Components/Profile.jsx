import { IoPersonSharp } from "react-icons/io5";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useState } from 'react';

const Profile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="relative">
      <div
        className="p-4 text-neutral-900 hover:text-neutral-800 rounded-lg w-full h-full flex justify-center items-center bg-gradient-to-r from-sky-400 to-sky-700 hover:from-sky-400 hover:to-sky-600 cursor-pointer"
        onClick={togglePopup}
      >
        <IoPersonSharp  className="text-9xl" />
      </div>
      
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <div className="flex justify-between items-center gap-24">
              <div className="text-xl font-bold">Mis Proyectos</div>
              <div>
                <FaTimes className="cursor-pointer" onClick={togglePopup} />
              </div>
            </div>
            <hr className="my-2" />
            <div className="flex gap-2">
              <a href="https://noticierovm.fly.dev/" className="flex gap-2 text-sky-600 hover:text-sky-800">NoticieroVM<FaExternalLinkAlt /></a>
              <div>Proyecto realizado con Django poniendo en práctica mis habilidades para el desarrollo back-end. Sistema de busqueda y gestión de publicaciones.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;