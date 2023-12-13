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
        <main className='h-[calc(100vh-88px)]'>
          <div className="container mx-auto h-full">
            <div className="flex h-full items-center">
              {matches ? (
                <motion.div
                  className='h-full flex-1'
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
                  className='h-full'
                  variants={animations}
                  initial='initial'
                  animate='in'
                  exit='out'
                  transition={{transition: .8, delay: 2}}
                >
                  <Outlet/>
                </motion.div>
              )}
              <div className="flex flex-col gap-2 justify-center ml-6 px-4">
                <BulletLink />
              </div>
            </div>
          </div>
        </main>
        {/* <main className="container mx-auto relative h-full overflow-clip">
          <div className="flex h-full max-sm:flex-col flex-row">
            {matches ? (
              <motion.div
                className='h-full flex-1'
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
                className='h-full'
                variants={animations}
                initial='initial'
                animate='in'
                exit='out'
                transition={{transition: .8, delay: 2}}
              >
                <Outlet/>
              </motion.div>
            )}
            <div className="flex max-sm:hidden flex-col gap-2 justify-center ml-14 max-sm:mb-12 max-sm:ml-0 px-4">
              <BulletLink />
            </div>
          </div>
          <img src={dotsImg} className="absolute -bottom-8 -left-16 -z-10 opacity-40 rotate-45" width={250} />
        </main> */}
      </AnimatePresence>
      {/* <Footer/> */}
    </>
  )
}

export default Front