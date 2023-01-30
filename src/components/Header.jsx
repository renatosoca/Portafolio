

const Header = () => {
  return (
    <header className="min-h-fit bg-white border-b-2">
        <div className="w-full container flex justify-between items-center px-10 py-5">
            <a
            href="#"
            className="text-gray-500 hover:text-gray-700 font-bold text-3xl transition-colors duration-500 cursor-pointer"
            >
              {'<'}RenatoSoca{'/>'}
            </a>
        
            <nav className="flex gap-5">
                <a 
                href="#" 
                className="text-gray-500 hover:text-gray-700 transition-colors duration-500 font-medium"
                >
                  Sobre Mí
                </a>
                <a 
                href="#" 
                className="text-gray-500 hover:text-gray-700 transition-colors duration-500 font-medium"
                >
                  Proyectos
                </a>
                <a 
                href="#" 
                className="text-gray-500 hover:text-gray-700 transition-colors duration-500 font-medium"
                >
                  Tecnologías
                </a>
                <a 
                href="#" 
                className="text-gray-500 hover:text-gray-700 transition-colors duration-500 font-medium"
                >
                  Contacto
                </a>
            </nav>
        </div>
    </header>
  )
}

export default Header