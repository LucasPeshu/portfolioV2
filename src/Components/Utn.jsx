import utnlogo from '../assets/utnlogo.png'

function Utn() {
  return(
    <div className="rounded-lg grid place-content-center p-2 text-neutral-900 bg-gradient-to-r from-sky-300 to-sky-600">
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