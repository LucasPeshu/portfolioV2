import Container from "./Container"
import Button from "./Button"


function Inicio() {
  return (
    <div className="bg-neutral-800">
      <Container>
        <div className="text-white flex flex-col items-center justify-center py-28 gap-3">
          <div className="text-5xl text-sky-400 font-bold">¡Bienvenido a mi mundo, terricola! 🚀🌎 </div>
          <div className="text-3xl font-semibold">Software Dev. 🧑‍💻</div>
          <div className="flex gap-4">
            <Button text='🔗 Descargar CV' link=''></Button>
            <Button text='Linkedin' link='https://www.linkedin.com/in/luucaas-pereira-da-silva/'></Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Inicio