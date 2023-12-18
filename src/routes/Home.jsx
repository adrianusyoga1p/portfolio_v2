import Profile from '../assets/photo.jpg'
const Home = () => {
  return (
    <>
      <section className="py-20 px-4 h-full md:mr-6">
        <div className="grid grid-cols-2 h-full items-center">
          <div className="max-md:col-span-full col-span-1 max-md:mb-8 mb-0 max-md:text-center">
            <h1 className="text-6xl max-md:text-5xl font-extrabold text-primary mb-6">HELLO</h1>
            <h3 className="text-3xl max-md:text-2xl">My Name is Adrianus Yoga as a <span className="text-primary font-bold">Front End</span> Developer</h3>
          </div>
          <div className="max-md:col-span-full col-span-1">
            <div className="flex max-md:justify-center justify-end gap-20">
              <div className="relative">
                <img src={Profile} className="rounded-xl max-w-full h-auto w-[314px] max-md:w-[280px]" />
                <div className="absolute w-[314px] max-md:w-[280px] h-full shadow-picture rounded-xl max-md:top-8 top-14 max-md:left-6 left-10 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home