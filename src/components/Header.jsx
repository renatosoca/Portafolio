import { Link } from 'react-router-dom'
import CV from '../assets/renato.pdf';
import { BiMailSend, BiDownload } from 'react-icons/bi';

const Header = () => {
  return (
    <>
      <header className="bg-white fixed w-full z-10">
        <div className=" w-full container flex justify-between items-center py-3">
          <Link
            to={'/'}
            className="text-black font-bold text-3xl"
          >
            <span className='italic'>{'<'}RenatoSoca {'/>'}</span>
          </Link>
      
          <nav className="flex gap-3 text-black font-medium ">
            <Link
              to="/" 
              className="relative transition-[width] after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-black after:duration-[400ms] hover:after:w-full"
            >
              Inicio
            </Link>
            <Link 
              to="/proyecto" 
              className="relative transition-[width] after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-black after:duration-[400ms] hover:after:w-full"
            >
              Proyectos
            </Link>
            <Link
              to="/informacion" 
              className="relative transition-[width] after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-black after:duration-[400ms] hover:after:w-full"
            >
              Sobre Mí
            </Link>
            <Link 
              to="/habilidades" 
              className="relative transition-[width] after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-black after:duration-[400ms] hover:after:w-full"
            >
              Habilidades
            </Link>
            <Link 
              to="/contacto" 
              className="relative transition-[width] after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-black after:duration-[400ms] hover:after:w-full"
            >
              Contacto
            </Link>
          </nav>
          
          <div className="flex gap-3 text-white font-medium">
            <Link
              to="/contacto"
              className="flex items-center gap-2 border border-transparent bg-black text-white px-4 py-2 rounded hover:bg-transparent hover:border-black hover:text-black transition-colors duration-[400ms]"  
            >
              <span>Contáctame</span>
              <BiMailSend className='text-2xl'/>
            </Link>

            <a
              href={CV}
              download
              className="flex items-center gap-2 border border-[#B887FD] text-[#B887FD] px-4 py-2 rounded hover:bg-[#B887FD] hover:text-white transition-colors duration-[400ms]"
            >
              Descargar CV
              <BiDownload className='text-2xl'/>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;