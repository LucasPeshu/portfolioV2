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
            <div className="bg-zinc-900 bg-opacity-90 p-4 rounded-lg xl:flex gap-4 relative z-10">
              <img src={Foto} alt="" className="rounded-lg w-60"></img>
              <div>
                <div className="text-4xl text-sky-400 font-bold">¡Hola, soy Lucas! 🖖</div>
                <div className="text-white text-2xl">Desde mi nave espacial digital, he viajado a través de incontables sistemas estelares en busca de inspiración, y ahora estoy aquí para compartir contigo los frutos de mi odisea intergaláctica. Prepárate para explorar un cosmos de proyectos, donde la creatividad no tiene límites y la imaginación es nuestra brújula.</div>
              </div>
            </div>
          </div>
          </div>
  )
}
export default AboutMe