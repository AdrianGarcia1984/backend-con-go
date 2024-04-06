import React, {useState} from 'react'
import { NavLink} from 'react-router-dom';

const Navbar = () => {

    const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

  const toggleAvatarDropdown = () => {
      setOpenAvatarDropdown(!openAvatarDropdown);
  };

  return (
    <>
    <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded text-gray-800">
      <ul className="flex flex-wrap">
        <NavLink to="/">
                <li className="m-3 lg:mx-5">        
                Home</li>
            </NavLink>
            {/* <NavLink to="/notes">
            <li className="m-3 lg:mx-5">        
                Usuarios</li>
            </NavLink>
            <NavLink to="/RickAndMortyApp">
            <li className="m-3 lg:mx-5">        
            Rick And Morty App</li>
                </NavLink> */}

            <div onClick={toggleAvatarDropdown} className="m-3 lg:mx-5 relative transition-all duration-500">
                  <span className="cursor-pointer">Proyectos</span>
                  <div className={`absolute ${openAvatarDropdown ? 'block' : 'hidden'} bg-slate-300 rounded shadow-md mt-2 space-y-2`}>
                      <div className='p-4 flex flex-col '>
                          <NavLink to="/notes">Usuarios</NavLink>
                          <NavLink to="/RickAndMortyApp">Api</NavLink>
                          <NavLink to="https://github.com/AdrianGarcia1984?tab=repositories" target="_blank">Mas proyectos</NavLink>
                      </div>
                  </div>
              </div>
              <NavLink to="/contact">
            <li className="m-3 lg:mx-5">        
                Contacto</li>
            </NavLink>
        </ul>
    </nav>


  </>
  )
}

export default Navbar

// const Navbar = () => {
//   const [openNav, setOpenNav] = useState(false);
//   const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

//   const toggleNav = () => {
//       setOpenNav(!openNav);
//       setOpenAvatarDropdown(false);
//   };

//   const toggleAvatarDropdown = () => {
//       setOpenAvatarDropdown(!openAvatarDropdown);
//   };

//   const navList = () => {
//       return (
//           <>
//               <NavLink
//                   to="/"
//                   className={({ isActive, isPending }) =>
//                       isPending ? "pending" : isActive ? "text-blue-900" : ""
//                   }
//               >
//                   Home
//               </NavLink>
//               <NavLink
//                   to="/event"
//                   className={({ isActive, isPending }) =>
//                       isPending ? "pending" : isActive ? "text-blue-900" : ""
//                   }
//               >
//                   Event
//               </NavLink>
//               <NavLink
//                   to="/services"
//                   className={({ isActive, isPending }) =>
//                       isPending ? "pending" : isActive ? "text-blue-900" : ""
//                   }
//               >
//                   Services
//               </NavLink>
//               <NavLink
//                   to="/registration"
//                   className={({ isActive, isPending }) =>
//                       isPending ? "pending" : isActive ? "text-blue-900" : ""
//                   }
//               >
//                   Registration
//               </NavLink>
//           </>
//       );
//   };

//   return (
//       <header className="bg-slate-200 border-b-2 border-gray-200 font-DM">
//           <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
//               <div className="flex items-center justify-between">
//                   <a href="#" className="text-2xl font-semibold text-gray-800">
//                       <img className='w-20' src="WellnessFusion.png" alt="" />
//                   </a>
//                   <button
//                       onClick={toggleNav}
//                       className="block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
//                   >
//                       <svg
//                           className={`w-6 h-6 ${openNav ? 'hidden' : 'block'}`}
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                       >
//                           <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M4 6h16M4 12h16m-7 6h7"
//                           ></path>
//                       </svg>
//                       <svg
//                           className={`w-6 h-6 ${openNav ? 'block' : 'hidden'}`}
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                       >
//                           <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M6 18L18 6M6 6l12 12"
//                           ></path>
//                       </svg>
//                   </button>
//               </div>
//               <nav className="hidden md:flex space-x-4">
//                   {navList()}
//               </nav>
//               <div
//                   className={`${openNav ? '' : 'hidden'
//                       } mt-4  bg-slate-400 flex flex-col gap-4 p-6  rounded `}
//               >
//                   {navList()}
//               </div>
//               <div onClick={toggleAvatarDropdown} className="relative transition-all duration-500">
//                   <span className="cursor-pointer">Proyectos</span>
//                   <div className={`absolute ${openAvatarDropdown ? 'block' : 'hidden'} bg-slate-300 rounded shadow-md mt-2 space-y-2`}>
//                       <div className='p-4 flex flex-col '>
//                           <NavLink to="/notes">Usuarios</NavLink>
//                           <NavLink to="/RickAndMortyApp">Api Rick and Morty</NavLink>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </header>
//   );
// };

// export default Navbar;

