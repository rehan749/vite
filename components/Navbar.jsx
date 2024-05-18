// Navbar.js
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/services" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        {/* Logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <BookOpenIcon className='w-7 h-7 text-blue-600' />
          <span>Inscribe</span>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {
            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        {/* Link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {
            Links.map((link, index) => (
              <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                <Link to={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>
              </li>
            ))
          }
          <li className='md:ml-8 md:my-0 my-7'>
            <button className='bg-blue-600 text-white font-semibold px-3 py-1 rounded duration-500'>Get Started</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
