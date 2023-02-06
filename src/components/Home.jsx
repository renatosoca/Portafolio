import { Link } from 'react-router-dom';
import renato from '../assets/renato.png';
import Circles from '../components/Circles';
import { BiMailSend, BiBriefcase } from 'react-icons/bi';

const Home = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <Circles />

        <div className='container pt-24 min-h-screen flex gap-8'>
          <div className="flex-1 relative pt-16">
            <small className='text-[1rem] font-medium'>Hola! mi nombre es</small>

            <h1 className='font-anton text-8xl'>Renato Soca <span className='text-[#B887FD]'>.</span></h1>
            
            <h2 className='-rotate-90 font-bold absolute left-[-30%] bottom-[26%] text-xl uppercase'>Desarrollador Full Stack</h2>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center relative">
            <img className='absolute bottom-[-1rem] w-[50rem] object-cover h-full select-none pointer-events-none' src={renato} alt="Renato Soca" />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            <h2 className="uppercase font-bold">Sobre Mí</h2>

            <p className='py-6 text-center'>
              ¡Hola! Soy estudiante de ingeniería de sistemas de VIII ciclo y una persona apasionada por el mundo tecnológico. Actualmente desarrollo con la tecnología GeneXus, tanto para el frontend, como para la parte lógica. Asu ves, también cuento con conocimientos en las siguientes tecnologías: SASS, Tailwind, Javascript y React Js para el frontend, y Php y Node Js para el lado del servidor.
            </p>

            <div className='flex gap-2 justify-center pt-2'>
              <Link
                to="/contacto"
                className="flex items-center gap-2 text-white font-medium px-4 py-2 border border-transparent rounded bg-[#B887FD] hover:bg-transparent hover:border-[#B887FD] hover:text-[#B887FD] transition-colors duration-[400ms]"  
              >
                <span>Contáctame</span>
                <BiMailSend className='text-2xl'/>
              </Link>

              <Link
                to="/proyecto"
                className="flex items-center gap-2 text-black first-letter font-medium  px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-[400ms]"
              >
                <span>Proyectos</span>
                <BiBriefcase className='text-2xl'/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home