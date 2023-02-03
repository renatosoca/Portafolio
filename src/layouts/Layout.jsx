import { Outlet, Link } from 'react-router-dom';
import CV from '../assets/renato.pdf'
import { AiFillMessage } from 'react-icons/ai';
import { MdFileDownload } from "react-icons/md";

const Layout = () => {
  return (
    <>
      <header className="bg-white border-b-2">
        <div className="w-full container flex justify-between items-center px-10 py-3 mx-auto">
          <Link
            to={'/'}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-[400ms] font-bold text-3xl"
          >
            <span className='italic'>{'<'}RenatoSoca {'/>'}</span>
          </Link>
      
          <nav className="flex gap-3 text-gray-500 font-medium ">
            <Link
              to="/" 
              className="relative hover:text-gray-700 transition-all duration-[400ms] after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-gray-700 after:duration-[400ms] hover:after:w-full"
            >
              Inicio
            </Link>
            <Link
              to="/informacion" 
              className="relative hover:text-gray-700 transition-colors duration-[400ms] after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-gray-700 after:duration-[400ms] hover:after:w-full"
            >
              Sobre Mí
            </Link>
            <Link 
              to="/proyecto" 
              className="relative hover:text-gray-700 transition-colors duration-[400ms] after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-gray-700 after:duration-[400ms] hover:after:w-full"
            >
              Proyectos
            </Link>
            <Link 
              to="#" 
              className="relative hover:text-gray-700 transition-colors duration-[400ms] after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-gray-700 after:duration-[400ms] hover:after:w-full"
            >
              Habilidades
            </Link>
            <Link 
              to="#" 
              className="relative hover:text-gray-700 transition-colors duration-[400ms] after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-gray-700 after:duration-[400ms] hover:after:w-full"
            >
              Contacto
            </Link>
          </nav>
          
          <div className="flex gap-3 text-white font-medium">
            <Link
              to="/contacto"
              className="flex items-center gap-2 border border-transparent bg-[#4DB5FF] text-white px-4 py-2 rounded  hover:bg-transparent hover:border-[#4DB5FF] hover:text-[#4DB5FF] transition-colors duration-[400ms]"  
            >
              <span>Contáctame</span>
              <AiFillMessage className='text-[1.35rem]'/>
            </Link>

            <a
              href={CV}
              download
              className="flex items-center gap-2 border border-[#4DB5FF] text-[#4DB5FF] px-4 py-2 rounded hover:bg-[#4DB5FF] hover:text-white transition-colors duration-[400ms]"
            >
              Descargar CV
              <MdFileDownload className='text-[1.5rem]'/>
            </a>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="w-full bg-white border-t-2">
        <div className="container mx-auto px-10 ">

          <div className="text-center">
            <small className="text-gray-500 font-medium text-sm">&copy; Renato Soca. Todos los derechos reservado.</small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;