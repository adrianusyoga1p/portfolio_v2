import { AnimatePresence, motion } from 'framer-motion'
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import BulletLink from '../components/BulletLink'
import useMediaQuery from '../hooks/useMediaQuery'
// import dotsImg from '../assets/dots.png'

const Front = () => {
  const animations = {
    initial: {opacity: 0, x: -100},
    in: {opacity: 1, x: 0},
    out: {opacity: 0, x: -100},
  }

  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Header/>
      <AnimatePresence mode='wait'>
        <main className='max-md:mt-[88px] md:h-[calc(100vh-88px)]'>
          <div className="container mx-auto md:h-full">
            <div className="flex md:h-full">
              {matches ? (
                <motion.div
                  className='flex-1'
                  variants={animations}
                  initial='initial'
                  animate='in'
                  exit='out'
                  transition={{transition: .8}}
                >
                  <Outlet/>
                </motion.div>
              ) : (
                <motion.div
                  className='flex-1'
                  variants={animations}
                  initial='initial'
                  animate='in'
                  exit='out'
                  transition={{transition: .8, delay: 2}}
                >
                  <Outlet/>
                </motion.div>
              )}
              <div className="flex flex-col max-md:hidden gap-2 justify-center px-4 self-center">
                <BulletLink />
              </div>
            </div>
          </div>
        </main>
      </AnimatePresence>
      {/* <Footer/> */}
    </>
  )
}

export default Front