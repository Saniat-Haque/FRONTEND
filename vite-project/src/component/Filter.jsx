import React, { useState, useEffect, useRef } from 'react';
import { IoIosClose } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";

function Filter(props) {







    
    const [selectedOption, setSelectedOption] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility
    const dropdownRef = useRef(null); // Ref for dropdown

    useEffect(() => {
        // Function to handle click outside dropdown
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        // Add event listener when component mounts
        document.addEventListener("mousedown", handleClickOutside);

        // Remove event listener when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Function to handle option selection
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setDropdownVisible(false); // Close dropdown after selecting an option
    };

    // Function to reset selected option and close dropdown
    const resetSelection = () => {
        setSelectedOption("");
        setDropdownVisible(false);
    };

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div id="maindiv">
            <div id="dateposteddiv" className=" flex m-2 ">
                <button id="buttondate" className={` flex mb-[px] border pr-[15px] pl-[15px] pt-[8px] pb-[8px] ${selectedOption ? 'rounded-l-[7px]' : 'rounded-[7px]'}  place-content-around gap-5 mr-[px] cursor-pointer hover:bg-blue-500/10  duration-200 hover:border-blue-500 relative inline-block `} onClick={toggleDropdown}>
                  {selectedOption ? selectedOption : props.buttonText}
                  <div>
                    <RiArrowDropDownFill size={20}/>
                  </div>
                </button>
                <div className={selectedOption ? ' cursor-pointer closeicon text-red-600 h-[100%px] w-[] bg-gray-200 rounded-r-[7px] p-[10px] flex justify-center items-center' : 'hidden closeicon text-red-600 h-[100%px] w-[] bg-gray-200 rounded-r-[7px] p-[10px] flex justify-center items-center'} onClick={resetSelection}>
                    <IoIosClose size={20} color='' />
                </div>
            </div>

            <div ref={dropdownRef} id="dropdowndiv" className={dropdownVisible ? "mt-[10px] absolute bg-white shadow-lg shadow-gray-400 rounded-[7px] w-[250px] p-[10px] z-20" : "hidden mt-[10px] absolute bg-white shadow-lg shadow-gray-400 rounded-[7px] w-[250px] p-[10px] z-20"}>
                <ul id="uldiv" className="cursor-pointer">

                    {props.options.map((option, index) => (
                        <li key={index} className="dropdownMenuItemDesing" onClick={() => handleOptionSelect(option)}>
                          {option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Filter;
