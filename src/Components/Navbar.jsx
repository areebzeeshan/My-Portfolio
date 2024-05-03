import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './index.css'

const Navbar = () => {

  const navigation = [
    { name: 'Home', href: '#header', current: true },
    { name: 'About', href: '#about', current: false },
    { name: 'Education', href: '#education', current: false },
    { name: 'Skills', href: '#skills', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Contact', href: '#contact', current: false },
  ]
  const [state, setState] = useState(false)

  // const windowHeight = window.innerHeight();

  return (
    // {
    //   navLinks.map((item) => {
    //     return (
    //       <li key={item} className={`${item === 'Home' ? '' : 'text-white'} hover:text-[#387E9E]`}>
    //         <a href={item}>
    //           {item}
    //         </a>
    //       </li>
    //     )
    //   })
    // }

    // position: fixed;
    // backdrop-filter: blur(7px);
    // width: 100%;

    <Disclosure as="nav">
      {({ open }) => (
        <>
        <div className="fixed top-0 z-50 w-[100%] backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                <div className="flex items-center text-3xl text-white font-bold me-auto">
                  Areeb.
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`${item.current ? 'text-[#00A1E4]' : 'text-white'} px-3 py-2 hover:text-[#00A1E4]`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 text-white">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white',
                    'block rounded-md px-3 py-2 text-md'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
        </>
      )}
    </Disclosure>

  )
}

export default Navbar
