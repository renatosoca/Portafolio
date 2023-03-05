import { Link, NavLink } from 'react-router-dom';

import { styles } from '../../styles';
import { BiMailSend, BiDownload, BiTerminal } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="bg-white fixed w-full z-10">
      <div className=" w-full container flex justify-between items-center py-3">
        <Link
          to={'/'}
          className=" flex justify-center items-center gap-2 text-black font-bold text-2xl py-2"
        >
          <BiTerminal className='text-3xl' />
          <span className=''>DevRena</span>
        </Link>
    
        <nav className="flex gap-3 text-gray-500 font-medium ">
          <NavLink
            to="/"
            className={ ({isActive}) => `${ styles.links } ${isActive? 'text-black' : ''}`}
          >
            Inicio
          </NavLink>

          <NavLink 
            to="/proyecto"
            className={ ({isActive}) => `${ styles.links } ${isActive? 'text-black' : ''}`}
          >
            Proyectos
          </NavLink>

          <NavLink
            to="/informacion" 
            className={ ({isActive}) => `${ styles.links } ${isActive? 'text-black' : ''}`}
          >
            Sobre Mí
          </NavLink>

          <NavLink 
            to="/habilidades" 
            className={ ({isActive}) => `${ styles.links } ${isActive? 'text-black' : ''}`}
          >
            Habilidades
          </NavLink>

          <NavLink 
            to="/contacto" 
            className={ ({isActive}) => `${ styles.links } ${isActive? 'text-black' : ''}`}
          >
            Contacto
          </NavLink>
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
            href={''}
            download
            className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-[400ms]"
          >
            Descargar CV
            <BiDownload className='text-2xl'/>
          </a>
        </div>
      </div>
    </header>
  );
}

export { Header }