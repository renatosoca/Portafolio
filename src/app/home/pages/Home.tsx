import { Button } from '@/shared/components'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import FondoSVG from '@/shared/assets/svgs/bg-fondo.svg'

const HomePage = () => {
  return (
    <>
      <section className="-z-10 grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div className="flex h-full flex-col items-start justify-center px-4 pr-8">
          <div className="flex flex-col gap-4 font-satoshi">
            <h1 className="font-francois text-4xl font-bold">Soy Renato Soca.</h1>
            <h2 className="font-francois text-6xl font-bold">FullStack develop.</h2>
            <p className="pr-10 text-base text-gray-500">
              Soy un apasionado de la programación y desarrollo web, mis frameworks/librerías son React js y .Net. Me
              encanta aprender y mejorar mis habilidades a diario. Siempre estoy dispuesto a explorar nuevos lenguajes,
              librerías y frameworks.
            </p>
          </div>

          <div className="pt-8">
            <Button className="px-12 font-semibold">Ver proyectos</Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 right-0 flex gap-8">
            <div className="relative overflow-hidden rounded-b-primary bg-primary px-56 py-72">
              <img
                className="absolute -bottom-30 left-1/2 -translate-x-1/2 object-cover text-9xl"
                src={FondoSVG}
                alt=""
              />
            </div>
            <div>
              <div className="flex flex-col items-center gap-4 rounded-b-primary bg-primary px-4 pb-8">
                <div className="h-[10rem] w-[.2rem] rounded-b-primary bg-white" />
                <BsGithub className="text-2xl text-white hover:cursor-pointer" />
                <BsLinkedin className="text-2xl text-white" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 flex w-full flex-col items-center gap-3 p-6">
            <div className="mr-auto ml-20 flex gap-2 rounded bg-white px-4 py-3 outline outline-primary">
              <div>Logo</div>
              <div>
                <h3>Desarrollador React js</h3>
                <p>2 años de exp.</p>
              </div>
            </div>
            <div className="ml-auto flex gap-2 rounded bg-white px-4 py-3 outline outline-primary">
              <div>Logo</div>
              <div>
                <h3>Desarrollador React js</h3>
                <p>2 años de exp.</p>
              </div>
            </div>
            <div className="mr-auto ml-auto flex gap-2 rounded bg-white px-4 py-3 outline outline-primary">
              <div>Logo</div>
              <div>
                <h3>Desarrollador React js</h3>
                <p>2 años de exp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
