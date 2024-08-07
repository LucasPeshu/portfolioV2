import Foto from '../assets/sobremi.jpg';
import Ovni from '../assets/ovnis.webp';
function AboutMe() {
  return(
        <div className='grid gap-8'>
          <div className="relative">
            <div
              className="bg-cover bg-center absolute inset-0 z-0 rounded-lg"
              style={{ backgroundImage: `url(${Ovni})` }}
            ></div>
            <div className="bg-zinc-900 bg-opacity-80 p-4 rounded-lg flex flex-col md:flex-row gap-3 items-center relative z-10">
              <img src={Foto} alt="" className="rounded-lg w-48"></img>
              <div className='text-center md:text-left'>
                <div className="text-4xl text-sky-400 font-bold">¡Hola, soy Lucas! 🖖</div>
                <div className="text-white text-2xl">Soy un estudiante avanzado de la carrera de Ingeniería en Sistemas. Aquí encontrarás una muestra de mis proyectos. ¡Gracias por visitar y espero que disfruten explorando mi trabajo!</div>
              </div>
            </div>
          </div>
          </div>
  )
}
export default AboutMe