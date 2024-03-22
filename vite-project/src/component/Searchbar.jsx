import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

function Searchbar(props) {
    return (

        <div>
            <div className="h-[60px] m-auto w-[900px]  flex mt-[20px] border border-black rounded-[5px]  justify-between items-center shadow-lg shadow-gray-200">
                <div className=" flex items-center m-1 mb-0 ">
                    
                    <div className=' m-[10px] '>
                        <IoSearchOutline size={20} />
                    </div>
                    <input  className=" flex m-0 p-0  w-[300px] h-[50px] outline-none " type="search" placeholder="Job title, Keywords, or Company" />
                    
                </div>

                <div className=" m-0 p-0 h-[30px] w-[1px] bg-black"></div>

                <div className=" flex items-center ">
                <div className=' m-[10px] '>
                    <IoLocationSharp />
                </div>
                    
                    <input className="w-[300px] h-[50px] ml-[5px] mr-[30px] outline-none  " type="search" placeholder="City,state,zip code, or Remote" />
                    
                    <button className="  mr-[30px] bg-blue-500 text-white border-black rounded-[5px] pt-[8px] pb-[8px] pl-[20px] pr-[20px]">Search</button>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;
