import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaBagShopping } from "react-icons/fa6";
const NavBar = () => {
    return (
        <header className="text-slate-700 shadow-xl container fixed top-0 left-0 right-0 mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center border-b border-gray-200 bg-white z-50">
             <Link to={'/'}
                className="flex items-center whitespace-nowrap text-2xl font-black"
            >
           
                <span className="mr-2 w-36">
                    <img className='mr-8 ' src="../Images/Ajio-Logo.svg" alt="Ajio Logo" />
                </span>
                
                </Link>

            <input type="checkbox" className="peer hidden" id="navbar-open" />
            <label
                className="absolute top-5 right-5 cursor-pointer lg:hidden"
                htmlFor="navbar-open"
            >
                <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </label>
            <nav
                aria-label="Header Navigation"
                className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
            >
                <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                    <Link to={'/shop/men'}>
                        <li className="lg:mr-12">
                            <span
                                className="rounded uppercase hover:outline-none  text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                            >
                                Men
                            </span>
                        </li>
                    </Link>
                    <li className="lg:mr-12">
                        <a
                            className="rounded uppercase text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                        >
                            Women
                        </a>
                    </li>
                    <li className="lg:mr-12">
                        <a
                            className="rounded uppercase text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                        >
                            Kids
                        </a>
                    </li>
                    <li className="lg:mr-12">
                        <a
                            className="rounded uppercase text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                        >
                            Beauty
                        </a>
                    </li>
                    <li className="lg:mr-12">
                        <a
                            className="rounded uppercase text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                        >
                            Home and Kitchen
                        </a>
                    </li>

                    <div className="bg-white flex rounded-full border border-black overflow-hidden max-w-md mx-auto font-[sans-serif]">
                        <input
                            placeholder="Search AJIO"
                            className="w-full outline-none pl-4 bg-[#fffded] text-sm"
                        />
                        <button
                            type="button"
                            className=" text-black transition-all bg-[#fffded]  text-lg rounded-full px-2 py-2"
                        >
                            <IoIosSearch />
                        </button>
                    </div>
                </ul>
                <hr className="mt-4 w-full lg:hidden" />
                <div className="bg-white mx-6 flex rounded-full border max-w-md items-center mr-10">
                    <img src='../Images/wishlistIcon.svg' alt='wishlistIcon' className="mr-4 cursor-pointer" /> {/* Add margin-right */}
                    <button
                        type="button"
                        className="bg-[#2C4152] text-white text-lg rounded-full px-2 py-2"
                    >
                        <FaBagShopping />
                    </button>
                </div>

            </nav>
        </header>


    )
}

export default NavBar