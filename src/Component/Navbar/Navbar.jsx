import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Services', path: '/services' },
        { id: 5, name: 'NotFound', path: '*' },
      ];
      
    return (
        <nav className='text-black p-6 bg-yellow-200'>
          <div className='' onClick={()=>setOpen(!open)}>
            {
              open===true ? 
              <AiOutlineMenu></AiOutlineMenu>:
              <AiOutlineMenu className=''></AiOutlineMenu>
            }
            

          </div>
          <ul className={`md:flex duration-1000
          ${open?'top-16':'-top-60'}
          font-bold absolute bg-yellow-200 px-6 shadow-xl`}>
          {
                routes.map(route=><Link key={route.id} route={route}></Link>
            )}
          </ul>
            
        </nav>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;