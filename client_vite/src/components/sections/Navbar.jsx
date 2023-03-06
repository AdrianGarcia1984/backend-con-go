import React from 'react'
import { NavLink} from 'react-router-dom';

const Navbar = () => {

  return (
    <>
    <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded text-gray-800">
      <ul className="flex flex-wrap">
        <NavLink to="/">
                <li className="m-3 lg:mx-5">        
                Home</li>
            </NavLink>
            <NavLink to="/portfolio">
            <li className="m-3 lg:mx-5">        
                Portfolio</li>
            </NavLink>
            <NavLink to="/notes">
            <li className="m-3 lg:mx-5">        
                Usuarios</li>
            </NavLink>
            <NavLink to="/RickAndMortyApp">
            <li className="m-3 lg:mx-5">        
            Rick And Morty App</li>
                </NavLink>
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

