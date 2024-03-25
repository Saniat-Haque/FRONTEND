import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { BiSolidBookmarkStar } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";



function Profilepopup() {


    const [myjobToggle,setMyjobToggle]=useState(false);

    const myJobHandler=()=>{
        setMyjobToggle(true)
    }

    return (
        <div className=' w-[350px] shadow-lg absolute right-28  border  bg-white z-40 '> 
            <div className='chatProfileNotificationsPopupScreenHeaderDesign  '>
                <h3 className=' font-medium m-auto font-serif bg-blue-600 text-white text-[20px] '>hsaniat63@gmail.com</h3>
            </div>
            <div className=' p-[20px] '>

                <div  className='popupProfiledesign ' >
                    <CgProfile size={30} className=' mr-[10px] '/>
                    <h3 > <a  className=' font-bold '>Profile</a></h3>
                </div>

                <div className='popupProfiledesign ' onClick={myJobHandler} >
                <BiSolidBookmarkStar size={30} className=' mr-[10px]' />
                <h3>My jobs</h3>
                </div>
                <div className='popupProfiledesign'>
                <IoMdSettings size={30} className=' mr-[10px]'   />
                <h3>Settings</h3>
                </div>
                <div className='popupProfiledesign'>  
                <FiHelpCircle size={30} className=' mr-[10px]'/>
                <h3>Help</h3>
                </div>

            </div>
            <div className='flex h-[50px] bg-gray-50 border-t  '>
                <button className=' m-auto  hover:underline  '>Sign out</button>
            </div>
        </div>
    );
}

export default Profilepopup;