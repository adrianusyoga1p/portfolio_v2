import Profile from '../assets/photo.jpg'
const Home = () => {
  return (
    <>
      <section className="py-20 px-4 max-md:py-0 h-full">
        <div className="grid grid-cols-2 h-full items-center">
          <div className="max-md:col-span-full col-span-1 max-md:mb-8 mb-0 max-md:text-center">
            <h1 className="text-6xl font-extrabold text-primary mb-6">HELLO</h1>
            <h3 className="text-3xl">My Name is Adrianus Yoga as a <span className="text-primary font-bold">Front End</span> Developer</h3>
          </div>
          <div className="max-md:col-span-full col-span-1">
            <div className="flex max-md:justify-center justify-end gap-20">
              <div className="relative">
                <img src={Profile} className="rounded-xl max-w-full h-auto" width={314} />
                <div className="relative w-[314px] h-full shadow-picture rounded-xl -top-72 left-10 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home