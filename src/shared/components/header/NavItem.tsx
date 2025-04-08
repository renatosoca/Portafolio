import { FC, MouseEvent, RefObject } from 'react'
import { NavLink } from 'react-router-dom'

interface NavItemProps {
  pathname: string
  pathLabel: string
  defaultMenuItemRef?: RefObject<HTMLLIElement | null>
  handleMouseEnter?: (event: MouseEvent<HTMLLIElement>) => void
  handleMouseLeave?: () => void
}

export const NavItem: FC<NavItemProps> = ({
  pathname,
  pathLabel,
  defaultMenuItemRef,
  handleMouseEnter,
  handleMouseLeave
}) => {
  return (
    <li ref={defaultMenuItemRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavLink to={pathname} className={({ isActive }) => `w-full px-4 py-2 ${isActive ? 'bg-black/10' : ''}`}>
        {pathLabel}
      </NavLink>
    </li>
  )
}
