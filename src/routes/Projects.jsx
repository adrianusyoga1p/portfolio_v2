import { Card, CardBody } from "../components/Card";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Disclosure, Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useMemo, useState } from "react";
import Pagination from "../components/Pagination";

const filter = [
  { name: 'Sorting A - Z' },
  { name: 'Sorting Z - A' },
];

let PageSize = 6;

const Projects = () => {
  const [selected, setSelected] = useState(filter[0]);
  const [dataProjects, setDataProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('http://127.0.0.1:1337/api/project')
      .then(response => response.json())
      .then(result => setDataProjects(result?.data));
  },[])

  const currentData = useMemo(() => {    
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const initialPage = dataProjects.slice(firstPageIndex, lastPageIndex);
    return initialPage
  }, [currentPage, dataProjects]);

  return (
    <>
      <section className="py-6 max-md:pt-3 px-4 md:h-full">
        <div className="mb-3">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex gap-2 items-center bg-gradient-to-r from-primary to-secondary py-2 ps-4 pe-3 rounded-lg ms-auto">
                  <span className="text-white text-base font-medium">Filter</span>
                  <Icon icon="majesticons:filter" width={12} className={'text-white'}/>
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-200 ease-in"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition duration-200 ease-in"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className={'mt-4'}
                >
                  <Disclosure.Panel>
                    <div className="grid grid-cols-4 gap-6">
                      <div className="col-span max-md:col-span-2 max-sm:col-span-full">
                        <div className="relative">
                          <input type="text" className="border border-gray-300 rounded-full bg-white shadow-sm text-gray-500 text-base ps-4 pe-9 py-2 focus:outline-none w-full" placeholder="Cari kata kunci" />
                          <div className="absolute right-3 text-gray-500 top-1/2 -translate-y-1/2">
                            <Icon icon="uil:search" width={18}/>
                          </div>
                        </div>
                      </div>
                      <div className="col-span max-md:col-span-2 max-sm:col-span-full">
                        <Listbox value={selected} onChange={setSelected}>
                          <div className="relative">
                            <Listbox.Button className={'border border-gray-300 bg-white shadow-sm py-2 px-4 text-gray-500 rounded-full w-full flex items-center justify-between'}>
                              <span>{selected.name}</span>
                              <Icon icon="uil:angle-down" height={20}></Icon>
                            </Listbox.Button>
                            <Transition
                              as={Fragment}
                              enter="transition duration-200 ease-in"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition duration-200 ease-in"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                              className={'absolute z-10 w-full'}
                            >
                              <Listbox.Options className={'border border-gray-300 bg-white shadow-sm p-2 mt-2 rounded-2xl flex flex-col gap-1 w-full'}>
                                {filter.map((person, personIdx) => (
                                  <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                      `relative cursor-pointer select-none py-2 pl-10 pr-4 rounded-lg ${
                                        active ? 'bg-primary/10 text-primary' : 'text-gray-900'
                                      }`
                                    }
                                    value={person}
                                  >
                                    {({ selected }) => (
                                      <>
                                        <span
                                          className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                          }`}
                                        >
                                          {person.name}
                                        </span>
                                        {selected ? (
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                            <Icon icon="uil:check" width={24}/>
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                  </Disclosure.Panel>  
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
        <h1 className="text-2xl font-bold mb-3">All Project</h1>
        <div className="py-4 pr-4 pl-0 content">
          <div className="grid grid-cols-6 gap-4">
            {currentData.map(item => {
              return (
                <div key={item?.attributes?.id_project} className="max-sm:col-span-full max-lg:col-span-3 col-span-2">
                  <Card className={`p-4 shadow-sm border border-light relative ${item?.id%2 === 0 ? 'sm:mt-20' : ''}`}>
                    <CardBody className={'flex-col shadow-lg items-center gap-3 rounded-md relative bg-white'}>
                      <div className="overflow-hidden w-full rounded-t-md relative">
                        <img src={item?.attributes?.link_img} className="max-w-full h-auto object-cover md:max-h-60 scale-105 max-h-48 w-full duration-500 ease-in-out" />
                      </div>
                      <h4 className="font-semibold mb-8 text-lg">{item?.attributes?.project_name}</h4>
                      <div className="absolute -bottom-5 shadow-lg">
                        <motion.a whileTap={{scale: 0.8}} style={{transform: 'translateZ(75px)'}} href="#" className="py-2 flex items-center gap-2 ps-6 pe-6 hover:pe-10 shadow-sm rounded bg-gradient-to-r from-primary to-secondary hover-transform-icon">
                          <span className="font-semibold text-base text-white">Lihat Detail</span>
                          <Icon icon="uil:arrow-right" color="white" width="24" height="24" className="icon" />
                        </motion.a>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              )
            })}
          </div>
          <Pagination
            currentPage={currentPage}
            totalCount={dataProjects.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      </section>
    </>
  )
}

export default Projects