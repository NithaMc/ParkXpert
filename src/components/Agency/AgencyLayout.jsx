import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { GiSecurityGate } from 'react-icons/gi';
import { MdViewCompact, MdOutlineRealEstateAgent } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
// import '../Home.css';
import './Agency.css'

const Agencies = () => {
  
    const Menus = [
    
    
    
        { name: 'Security', link: '/', icon: GiSecurityGate },
        {
          name: 'Company',
          icon: MdViewCompact,
          submenus: [
            { name: 'Createcompany', link: 'Company/createcompany' },
            { name: 'View', link: 'Company/viewcompany' },
          ],
        },
        {
          name: 'Agency',
          icon: MdOutlineRealEstateAgent,
          submenus: [
            { name: 'Link with Agency', link: 'Agency/createagency' },
            { name: 'View', link: 'Agency/viewagency' },
          ],
        },
        { name: 'Settings', link: '/', icon: IoSettingsOutline },
      ];
    
      const [open, setOpen] = useState(true);
    
      return (
        <>
        <div className='backimage'>
          <div className='container-fluid bg-gray-950 h-48 border-r-4 contain'>
            <h1 className='text-orange-400 ml-72 head'>Park <span>X</span>pert</h1>
          </div>
          <section className='flex gap-6 '>
            <div
              className={ `bg-black mt-5 min-h-screen ${open ? 'w-72' : 'w-16'}
         duration-500 text-gray-100 px-4` }
            >
              <div className='py-3 flux justify-end'>
                <HiMenuAlt3
                  size={26}
                  className='cursor-pointer'
                  onClick={() => setOpen(!open)}
                />
              </div>
              <div className='mt-4 flex flex-col gap-4 relative '>
                {Menus?.map((menu, i) => (
                  <div key={i} className='relative'>
                    {menu.submenus ? (
                      // Render dropdown menu for Company and Agency
                      <div className='group'>
                        <div className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md'>
                          <div>{React.createElement(menu.icon, { size: '20' })}</div>
                          <h2
                            className={`whitespace-pre duration-500 ${
                              !open && 'opacity-0 translate-x-28 overflow-hidden'
                            }`}
                          >
                            {menu.name}
                          </h2>
                        </div>
                        <div className='absolute left-full top-0 mt-4 bg-black min-w-56 text-gray-100 p-2 rounded-md hidden group-hover:block'>
                          {menu.submenus.map((submenu, j) => (
                            <Link
                              key={j}
                              to={submenu.link}
                              className='block py-1 hover:bg-gray-800'
                            >
                              {submenu.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Render regular menu items
                      <Link
                        to={menu.link}
                        className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md'
                      >
                        <div>{React.createElement(menu.icon, { size: '20' })}</div>
                        <h2
                          className={`whitespace-pre duration-500 ${
                            !open && 'opacity-0 translate-x-28 overflow-hidden'
                          }`}
                        >
                    {menu.name}
                      </h2>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
    
            <div className='flex-grow'>
              <Outlet />
            </div>
          </section>
          </div>
        </>
      );
  
}

export default Agencies