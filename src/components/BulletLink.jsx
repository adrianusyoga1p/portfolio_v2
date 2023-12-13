import { string } from "prop-types";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const BulletLink = ({className, ...props}) => {
  BulletLink.propTypes = {
    className: string
  }

  const navLink = [
    {
      id: 1,
      href: '',
    },
    {
      id: 2,
      href: 'about',
    },
    {
      id: 3,
      href: 'projects',
    },
  ];

  return (
    <>
      {navLink.map(nav => (
        <NavLink className={twMerge('bullets', className)} {...props} key={nav.id} to={nav.href}/>
      ))}
    </>
  )
}

export default BulletLink