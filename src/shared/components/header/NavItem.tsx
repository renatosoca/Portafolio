import { FC, MouseEvent, RefObject, memo } from 'react'
import { NavLink } from 'react-router-dom'

interface NavItemProps {
  pathname: string
  pathLabel: string
  defaultMenuItemRef?: RefObject<HTMLLIElement | null>
  handleMouseEnter?: (event: MouseEvent<HTMLLIElement>) => void
  handleMouseLeave?: () => void
}

const NavItemComponent: FC<NavItemProps> = ({
  pathname,
  pathLabel,
  defaultMenuItemRef,
  handleMouseEnter,
  handleMouseLeave
}) => {
  return (
    <li className="h-full" ref={defaultMenuItemRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavLink to={pathname} className={({ isActive }) => `block w-full rounded px-4 py-2 ${isActive ? '' : ''}`}>
        {pathLabel}
      </NavLink>
    </li>
  )
}

export const NavItem = memo(NavItemComponent)
