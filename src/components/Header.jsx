import useMediaQuery from "../hooks/useMediaQuery";
import NavItems from "./NavItems"
import Logo from "../assets/react.svg"
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  });
  const {pathname} = useLocation();

  useEffect(() => {
    const handleSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  useEffect(() => {
    if(size.width > 768 && menuOpen){
      setMenuOpen(false)
    }
  }, [size.width, menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname])

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p)
  };

  const matches = useMediaQuery("(min-width: 768px)");

  const navSocial = [
    {
      id: 1,
      icon: 'uil:github'
    },
    {
      id: 2,
      icon: 'uil:instagram'
    },
    {
      id: 3,
      icon: 'uil:linkedin'
    },
  ];

  return (
    <header className="sticky max-md:fixed left-0 right-0 top-0 bg-light shadow-sm z-50">
      <div className="w-full relative">
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-4 w-full min-h-[88px]">
            {!matches ? (
              <button className="py-4 px-2 cursor-pointer" onClick={menuToggleHandler}>
                <Icon icon={!menuOpen ? "uil:bars" : "uil:multiply"} height={24}/>
              </button>
              ):(
              null
            )}
            {matches ? (
              <div className="flex items-center gap-3">
                <NavItems className={'text-dark'}/>
              </div>
            ) : (
              <div className={`flex flex-col items-center w-full h-[calc(100vh-88px)] justify-center absolute -left-full -translate-x-full top-[88px] z-50 bg-cyan-900 ${menuOpen ? 'transition-all duration-500 opacity-1 translate-x-full' : '-translate-x-full opacity-0 transition-all duration-500'}`}>
                <NavItems className={'text-white'}/>
                <div className="flex gap-3 items-center py-4">
                  {navSocial.map(soc => {
                    return (
                      <Button key={soc?.id} className={`rounded-full bg-light text-primary hover:bg-primary hover:text-light`}>
                        <Icon icon={soc?.icon} height={20}></Icon>
                      </Button>
                    )
                  })}      
                </div>
              </div>
            )}
            <img src={Logo} />
            {matches ? (
              <div className="flex gap-3 items-center">
                {navSocial.map(soc => {
                  return (
                    <Button key={soc?.id} className={'rounded-full bg-light border-primary border text-primary hover:bg-primary hover:text-light'}>
                      <Icon icon={soc?.icon} height={18}></Icon>
                    </Button>
                  )
                })}      
              </div>
            ) : (null)}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header