import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
const S2 = () => {
    const [openSections, setOpenSections] = useState({});
 

    const handleToggle = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };


    const sections = [
        { title: 'Gender', items: ['Women (926,340)', '  Men (2,779)', 'Girls (274)', 'Tech (12)', 'Boys (1)'] },
        { title: 'Category', items: ['Sarees (133,468)', 'Shirts', 'Tops & Tunics (71,317)', ' Kurtas & Kurtis (56,276)', 'Earrings (56,117)', 'Dresses (55,624)'] },
        { title: 'Price', items: ['Below Rs.500 (164,840)', 'Rs.500-1000 (330,068)', 'Rs.1001-1500 (173,061)', 'Rs.1501-2000 (90,020)', 'Rs.2001-2500 (44,395)'] },
        { title: 'Brands', items: ['14 FAB (273)', '250 DESIGNS (217)', '3buddy Fashion (108)', '3I (109)', '4U FASHION (81)'] },
        { title: 'Occasion', items: ['Active (25,216)', 'ACTIVE (55)', 'Casual (582,209)', 'CASUAL (1,265)', 'Evening (30,495)'] }
    ]

    return (
        <div className='pt-[66px]'>
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
        </div>
    )
}

export default S2