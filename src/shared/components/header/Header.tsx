import { MouseEvent, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BiMailSend, BiDownload, BiTerminal } from 'react-icons/bi'
import { NavItem } from './NavItem'

export const Header = () => {
  const menuBackDropRef = useRef<HTMLDivElement | null>(null)
  const defaultMenuItemRef = useRef<HTMLLIElement | null>(null)

  const setBackdropFromItem = (item: HTMLLIElement | HTMLDivElement) => {
    const { left, top, width, height } = item.getBoundingClientRect()

    if (menuBackDropRef.current) {
      menuBackDropRef.current.style.setProperty('--left', `${left / 16}rem`)
      menuBackDropRef.current.style.setProperty('--top', `${top / 18}rem`)
      menuBackDropRef.current.style.setProperty('--width', `${width / 16}rem`)
      menuBackDropRef.current.style.setProperty('--height', `${height / 16}rem`)
    }
  }

  const handleMouseEnter = ({ currentTarget }: MouseEvent<HTMLLIElement>) => {
    const item = currentTarget as HTMLLIElement
    setBackdropFromItem(item)

    if (menuBackDropRef.current) {
      menuBackDropRef.current.style.opacity = '1'
      menuBackDropRef.current.style.visibility = 'visible'
    }
  }

  const handleMouseLeave = () => {
    if (menuBackDropRef.current) {
      menuBackDropRef.current.style.opacity = '0'
      menuBackDropRef.current.style.visibility = 'hidden'
    }
  }

  useEffect(() => {
    if (defaultMenuItemRef.current) {
      setBackdropFromItem(defaultMenuItemRef.current)
    }
  }, [])

  return (
    <header className="fixed z-10 w-full bg-white">
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-4 py-4">
        <div className="flex items-center gap-8">
          <Link to={'/'} className="flex items-center justify-center gap-2 py-2 text-2xl font-bold text-black">
            <BiTerminal className="text-4xl" />
          </Link>

          <nav className="flex gap-3 font-medium text-gray-500">
            <ul className="flex list-none gap-4">
              <NavItem
                pathname="/project"
                pathLabel="Proyectos"
                defaultMenuItemRef={defaultMenuItemRef}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />

              <NavItem
                pathname="/social-medias"
                pathLabel="Redes Sociales"
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            </ul>

            <div
              ref={menuBackDropRef}
              className="invisible absolute top-0 left-0 z-[-1] bg-black/10 p-4 opacity-0 backdrop-blur-2xl transition-transform duration-300 ease-in-out"
              style={{
                transform: 'translate(var(--left), var(--top))',
                width: 'var(--width)',
                height: 'var(--height)',
                transition:
                  'transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
              }}
            />
          </nav>
        </div>

        <div className="flex gap-3 font-medium text-white">
          <Link
            to="/contacto"
            className="flex items-center gap-2 rounded border border-transparent bg-black px-4 py-2 text-white transition-colors duration-[400ms] hover:border-black hover:bg-transparent hover:text-black">
            <span>Contácteme</span>
            <BiMailSend className="text-2xl" />
          </Link>

          <a
            href={''}
            download
            className="flex items-center gap-2 rounded border border-blue-500 px-4 py-2 text-blue-500 transition-colors duration-[400ms] hover:bg-blue-500 hover:text-white">
            Descargar CV
            <BiDownload className="text-2xl" />
          </a>
        </div>
      </div>
    </header>
  )
}
