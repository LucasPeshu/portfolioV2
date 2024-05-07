import { IoPersonSharp } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
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
          <div className="bg-neutral-800 text-white p-4 rounded-lg relative flex flex-col gap-2">
            <div>
              <div className="font-semibold">Nombre:</div>
              <div>Lucas Pereira Da Silva</div>
            </div>
            <div>
              <div className="font-semibold">Estudiando:</div>
              <div>Ing. en sistemas, UTN FRVM</div>
            </div>
            <div>
              <div className="font-semibold">Edad:</div>
              <div>22 años</div>
            </div>
            <div>
              <div className="font-semibold">Ubicación:</div>
              <div>Villa María, Córdoba, Argentina</div>
            </div>
            <div>
              <div className="font-semibold">Intereses:</div>
              <div>Desarrollo web, programación, tecnología, música, deportes.</div>
            </div>
            <div className="absolute top-0 right-0 p-2">
              <FaTimes className="cursor-pointer" onClick={togglePopup} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
