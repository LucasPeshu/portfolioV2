import utnlogo from '../assets/utnlogo.png'

function Utn() {
  return(
    <div className="bg-sky-400 rounded-lg grid place-content-center p-2">
      <div className='flex'>
        <div className='font-semibold text-xl'>Estudiando.</div>
        <div className='font-bold text-xl'>UTN</div>
      </div>
      <img src={utnlogo} alt="" className='w-36'/>
      <div className='font-semibold text-xl'>Ing. en sistemas</div>
    </div>
  )
}
export default Utn