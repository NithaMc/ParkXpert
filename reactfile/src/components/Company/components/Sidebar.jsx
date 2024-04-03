import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
// import { GiSecurityGate } from 'react-icons/gi';
import { MdViewCompact, MdOutlineRealEstateAgent } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosNotificationsOutline } from "react-icons/io";
// import './Home.css';
// import Createcompany from '../Adminpages/Company/Createcompany.jsx';
// import welcom from '../image/welcome.png'

const Sidebar = () => {
  const Menus = [
    { name: 'User',
     icon: FaRegUser,
     submenus:[
      { name: 'User Details' , link: 'user/userdetails'}

     ]
    
    },


    // { name: 'Security', link: '/', icon: GiSecurityGate },
    {
      name: 'Slots',
      icon: MdViewCompact,
      submenus: [
        { name: 'AddSlots', link: 'Slots/addslots' },
        { name: 'View', link: 'Company/viewcompany/:companyId' },
      ],
    },
    {
      name: 'Agency',
      icon: MdOutlineRealEstateAgent,
      submenus: [
        { name: ' Agency Request',icon: IoIosNotificationsOutline , link: 'Agency/agencyrequest' },
        { name: 'View', link: 'Agency/viewagency' },
      ],
    },
    { name: 'Settings',
    icon: IoSettingsOutline,
  submenus:[
    { name: 'Your Profile', link: 'settings/profile' },
    { name: 'Terms and Policy' },
    { name: 'About' },



  ] },
  ];

  const [open, setOpen] = useState(true);

  return (
    <>
      <div className='container-fluid border-r-4 contain'>
        {/* <img src={welcom} alt="ADMINSS" className='contain'/> */}
     
        <h1 className='text-orange-400 ml-72 head'>Park <span>X</span>pert</h1>
      </div>
      <section className='flex gap-6 '>
        <div
          className={`bg-black mt-5 min-h-screen ${open ? 'w-72' : 'w-16'}
     duration-500 text-gray-100 px-4`}
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
          
        </div>
      </section>
      
    </>
  );
};

export default Sidebar;