import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {FaBlog,FaBarsStaggered, FaXmark} from "react-icons/fa6"
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false);
    const [isSticky, setIsSticky]=useState(false);

    const {user} =useContext(AuthContext);


    //toggle menu

    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll",handleScroll);

        return ()=>{
            window.addEventListener("scroll",handleScroll)
        }    
    },[])

    //navitems here

    const navItems=[
        {link: "Home", path:"/"},
        {link: "About", path:"/about"},
        {link: "Shop", path:"/shop"},
        {link: "Sell Your Book", path:"/admin/dashboard"},
        {link: "Blog", path:"/blog"},
    ]

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 z-50 transition-all ease-in duration-300">
  <nav className={`py-4 px-4 lg:px-24 ${isSticky ? "sticky top-0 bg-blue-300 shadow-lg" : ""}`}>
    <div className="flex justify-between items-center gap-8">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
        <FaBlog className="inline-block text-blue-700" /> Book Haven
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            className="text-base text-black uppercase cursor-pointer hover:text-blue-700"
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Desktop Extra Options */}
      <div className="hidden lg:flex items-center space-x-4">
        <button>
          <FaBarsStaggered className="w-5 h-5 text-black hover:text-blue-700" />
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
        >
          {isMenuOpen ? (
            <FaXmark className="h-6 w-6 text-blue-700" />
          ) : (
            <FaBarsStaggered className="h-6 w-6 text-blue-700" />
          )}
        </button>
      </div>
    </div>

    {/* Mobile Navigation */}
    <div
      className={`md:hidden space-y-4 px-4 py-7 bg-blue-700 text-white transition-all duration-300 ${
        isMenuOpen ? "block fixed top-16 left-0 right-0 z-40" : "hidden"
      }`}
    >
      {navItems.map(({ link, path }) => (
        <Link
          key={path}
          to={path}
          className="block text-base uppercase cursor-pointer hover:underline"
        >
          {link}
        </Link>
      ))}
    </div>
  </nav>
</header>


  )
}

export default Navbar