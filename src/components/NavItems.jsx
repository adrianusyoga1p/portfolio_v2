import { string } from "prop-types";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const NavItems = ({className, ...props}) => {
  NavItems.propTypes = {
    className: string
  }

  const navLink = [
    {
      id: 1,
      href: '',
      label: 'Home'
    },
    {
      id: 2,
      href: 'about',
      label: 'About'
    },
    {
      id: 3,
      href: 'projects',
      label: 'Projects'
    },
  ];

  return (
    <>
      {navLink.map(nav => (
        <NavLink className={twMerge('py-4 text-dark px-2 nav-link font-semibold', className)} {...props} key={nav.id} to={nav.href}>{nav.label}</NavLink>
      ))}
    </>
  )
}

export default NavItems