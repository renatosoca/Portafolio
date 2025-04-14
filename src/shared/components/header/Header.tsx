import { MouseEvent, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BiTerminal } from 'react-icons/bi'
import { NavItem } from './NavItem'
import { InputComponent } from '@/shared/components'
import { AiOutlineMenu } from 'react-icons/ai'

export const Header = () => {
  const menuBackDropRef = useRef<HTMLDivElement | null>(null)
  const defaultMenuItemRef = useRef<HTMLLIElement | null>(null)

  const setBackdropFromItem = (item: HTMLLIElement | HTMLDivElement) => {
    const { left, top, width, height } = item.getBoundingClientRect()

    if (menuBackDropRef.current) {
      menuBackDropRef.current.style.setProperty('--left', `${left / 16}rem`)
      menuBackDropRef.current.style.setProperty('--top', `${top / 16}rem`)
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
    <header className="fixed z-100 w-full bg-[var(--background)]/80">
      <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-8 ">
          <Link to={'/'} className="font-bold text-black dark:text-white">
            <BiTerminal className="text-4xl" />
          </Link>

          <nav className="hidden font-medium text-black md:block dark:text-white">
            <ul className="flex h-full gap-4">
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
              className="invisible absolute top-0 left-0 z-[-1] rounded bg-black/10 p-4 py-2 opacity-0 backdrop-blur-2xl transition-[transform,width,height,opacity,visibility] duration-[300ms,400ms,300ms,400ms,400ms] ease-initial dark:bg-white/10"
              style={{
                transform: 'translate(var(--left), var(--top))',
                width: 'var(--width)',
                height: 'var(--height)'
              }}
            />
          </nav>
        </div>

        <div className="w-full md:w-max">
          <form action="">
            <InputComponent placeholder="Buscar" name="search" type="search" />
          </form>
        </div>

        <div className="flex cursor-pointer items-center gap-8 px-1 md:hidden">
          <AiOutlineMenu className="text-2xl" />
        </div>
      </div>
    </header>
  )
}
