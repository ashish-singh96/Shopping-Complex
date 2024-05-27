import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const S1 = () => {
    const [openSections, setOpenSections] = useState({});

    const handleToggle = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const sections = [
        { title: 'Gender', items: ['Men (7)'] },
        { title: 'Category', items: ['shirts (71,406)', 'Shirts (63,678)', 'Jeans (16,486)', 'Sweatshirt & Hoodies (15,391)', 'Kurtas & Shirts (14,030)'] },
        { title: 'Price', items: ['Below Rs.500 (27,146)', 'Rs.500-1000 (84,126)', 'Rs.1001-1500 (34,676)', 'Rs.1001-1500 (34,676)', 'Rs.2001-2500 (3,736)'] },
        { title: 'Brands', items: ['5TH ANFOLD (1)', '69TH AVENUE (39)', '7shores (62)', '98°North (197)', 'A-MAN (12)'] },
        { title: 'Occasion', items: ['Casual (284)', 'Evening (9)', 'Universal (12)', 'Work'] },
        { title: 'Discount', items: ['51-80% (21)'] },
        { title: 'Colors', items: ['Aqua (1)', 'Black (2)', 'Blue (3)', 'Charcoal (1)', 'Green (1)', 'Pink (5)'] },
        { title: 'Size & Fit', items: ['M (7)', 'XL (10)', 'XXL (5)', 'L (6)', 'S (12)',] },
    ];


    const products = [
        {
            id: 1,
            name: '69TH AVENUE',
            href: '#',
            imageSrc: '../Images/-473Wx593H-466830289-charcoal-MODEL.avif',
            imageAlt: "Men Slim Fit Shirt with Patch Pocket",
            price: '₹564',
            discount: 'MRP₹1,199 (53% OFF)',
            color: 'Offer Price 496',
        },
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: '../Images/-473Wx593H-466830121-black-MODEL.avif',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '₹564',
            color: 'Black',
        },

        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: '../Images/-473Wx593H-466830276-blue-MODEL.avif',
            imageAlt: "Men Slim Fit Shirt with Patch Pocket",
            price: '₹564',
            color: 'Black',
        },

        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: '../Images/-473Wx593H-466830208-blue-MODEL3.jpg',
            imageAlt: "Men Geometric Print Slim Fit Shirt",
            price: '₹752',
            color: 'Black',
        },
    ]

    return (
        <div className='pt-[66px] flex'>
            <div className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0">
                <nav className="hs-accordion-group w-full flex flex-col flex-wrap">
                    <ul className="space-y-1.5 mx-6">
                        {sections.map((section, index) => (
                            <div key={index}>
                                <li>
                                    <a
                                        className="flex items-center border-b border-gray-300 gap-x-3.5 py-2 px-2.5 text-lg text-black"
                                        onClick={() => handleToggle(section.title)}
                                    >
                                        {openSections[section.title] ? <FaMinus /> : <FaPlus />} {section.title}
                                    </a>
                                </li>
                                {openSections[section.title] && section.items.length > 0 && (
                                    <ul className="pl-6">
                                        {section.items.map((item, idx) => (
                                            <li key={idx} className="py-1 flex items-center">
                                                <input type="checkbox" className="mr-2" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="bg-white flex-1">
                <div className=" mx-aut0  ">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="relative aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:h-auto group">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover lg:h-full lg:w-full"
                                    />
                                    <Link to={'/show-one-item'}>
                                    <button className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 bg-white font-medium py-2 px-4  w-full text-blue-400">
                                        Quick View
                                    </button>
                                    </Link>
                                </div>



                                <div className="mt-4 flex flex-col items-center">
                                    <div>
                                        <h3 className="text-sm text-gray-700 text-center">
                                            <a>
                                                <span aria-hidden="true" className=" text-center" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-center text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-center text-gray-900">{product.price}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default S1