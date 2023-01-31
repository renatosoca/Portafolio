import {TbSend} from 'react-icons/tb'

const Header = () => {
  return (
    <header className="min-h-fit bg-white border-b-2">
      <div className="w-full container flex justify-between items-center px-10 py-3 mx-auto">
        <h1
          href="#"
          className="text-gray-700 font-bold text-3xl"
        >
          {'<'}RenatoSoca {'/>'}
        </h1>
    
        <nav className="flex gap-5 text-gray-500 font-medium">
          <a
            href="#" 
            className="relative  hover:text-gray-700 transition-colors duration-500 after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-slate-500 after:transition-{w} after:duration-500 hover:after:w-full"
          >
            Sobre Mí
          </a>
          <a 
            href="#" 
            className="relative hover:text-gray-700 transition-colors duration-500 after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-slate-500 after:transition-{w} after:duration-500  hover:after:w-full"
          >
            Proyectos
          </a>
          <a 
            href="#" 
            className="relative hover:text-gray-700 transition-colors duration-500 after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-slate-500 after:transition-{w} after:duration-500  hover:after:w-full"
          >
            Tecnologías
          </a>
          <a 
            href="#" 
            className="relative hover:text-gray-700 transition-colors duration-500 after:absolute after:content-[''] after:w-0 after:left-0 after:h-0.5 after:-bottom-1 after:bg-slate-500 after:transition-{w} after:duration-500  hover:after:w-full"
          >
            Contacto
          </a>
        </nav>
        
        <div className="flex gap-3 text-white font-medium">
          <a
            href="#"
            className="bg-gray-700 px-4 py-2 rounded-md -skew-x-[10deg] flex items-center gap-2 hover:-translate-y-1 hover:transition-transform hover:duration-500 ease-in-out"  
          >
            <TbSend />
            <span>Contáctame</span>
          </a>

          <button
            className="bg-indigo-500 px-4 py-2 rounded-md -skew-x-[10deg] hover:-translate-y-1 hover:transition-transform hover:duration-500 ease-in-out"
          >
            Descargar CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;